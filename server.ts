import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const app = express();
app.use(express.json());

// Initialize GoogleGenAI SDK with server-side API Key
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Fallback curated responses for Bible questions in case of API failure or missing key
const BIBLE_FALLBACKS: Record<string, { answer: string; references: string[]; keyVerses: string[]; historicalContext: string }> = {
  "who is jesus": {
    answer: "In the Bible, Jesus Christ is the Son of God, the promised Messiah and Savior born to Mary in Bethlehem. Christians celebrate His birth at Christmas as God's greatest gift of love, light, and peace to all humankind. Through His life, teachings, death, and resurrection, He showed profound love, compassion, and reconciliation with God.",
    references: ["Luke 2:10-11", "John 1:14", "Matthew 1:21", "Isaiah 9:6"],
    keyVerses: ["'For unto you is born this day in the city of David a Savior, who is Christ the Lord.' — Luke 2:11"],
    historicalContext: "Jesus was born during the reign of Caesar Augustus and King Herod the Great in the Roman province of Judea around 4 to 6 BC."
  },
  "what is the nativity": {
    answer: "The Nativity refers to the biblical account and scene of the birth of Jesus Christ. According to the Gospels of Luke and Matthew, Mary and Joseph traveled from Nazareth to Bethlehem. Finding no room at the inn, Mary gave birth to Jesus, wrapped Him in swaddling cloths, and laid Him gently in a manger (an animal feeding trough). Angels announced this joyful news to humble shepherds nearby, and later Wise Men followed a star to worship Him.",
    references: ["Luke 2:1-20", "Matthew 1:18-25", "Matthew 2:1-12"],
    keyVerses: ["'And she gave birth to her firstborn son and wrapped him in swaddling cloths and laid him in a manger, because there was no place for them in the inn.' — Luke 2:7"],
    historicalContext: "The word 'nativity' comes from the Latin 'nativitas', meaning birth. St. Francis of Assisi created the first living nativity scene in Greccio, Italy, in 1223."
  },
  "where is the christmas story in the bible": {
    answer: "The Christmas story is primarily recorded in two Gospel books in the New Testament:\n\n1. **Gospel of Luke (Luke 1:26–38 and Luke 2:1–20)**: Tells of the Angel Gabriel's visit to Mary (Annunciation), Mary and Joseph traveling to Bethlehem for the Roman census, Jesus' birth in a manger, the angel choir appearing to shepherds, and the shepherds rushing to visit the manger.\n\n2. **Gospel of Matthew (Matthew 1:18–25 and Matthew 2:1–12)**: Tells of Joseph's dream from an angel, Jesus' fulfillment of prophecy, the star leading the Magi (Wise Men) from the East with gifts of gold, frankincense, and myrrh, and the flight to Egypt.\n\nOld Testament prophecies also foretell the birth, such as **Isaiah 7:14**, **Isaiah 9:6**, and **Micah 5:2**.",
    references: ["Luke 1:26-38", "Luke 2:1-20", "Matthew 1:18-25", "Matthew 2:1-12", "Micah 5:2", "Isaiah 9:6"],
    keyVerses: ["'For to us a child is born, to us a son is given; and the government shall be upon his shoulder, and his name shall be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.' — Isaiah 9:6"],
    historicalContext: "Luke wrote with careful historical details for a Gentile audience (mentioning Quirinius and Caesar Augustus), while Matthew wrote focusing on fulfillment of Jewish scriptures for Hebrew readers."
  },
  "who were the shepherds": {
    answer: "The shepherds were ordinary workers tending flocks of sheep in the hills outside Bethlehem on the night Jesus was born. In biblical times, shepherds were humble, hardworking people often looked down upon by high society. God chose these humble shepherds to be the very first people on earth to hear the good news of the Savior's birth through an angel surrounded by heavenly glory.",
    references: ["Luke 2:8-20"],
    keyVerses: ["'And the angel said unto them, Fear not: for, behold, I bring you good tidings of great joy, which shall be to all people.' — Luke 2:10"],
    historicalContext: "Bethlehem's surrounding pastures were renowned for raising sheep, some of which were used in Temple offerings in nearby Jerusalem just six miles away."
  },
  "who were the wise men": {
    answer: "The Wise Men (also known as the Magi) were distinguished scholars, astronomers, and philosophers from the East (likely Persia, Babylon, or Arabia). They noticed an unusual star that indicated the birth of a royal King of the Jews. Guided by the star, they traveled a long journey to Jerusalem and Bethlehem to worship the young child and present Him with treasures of gold, frankincense, and myrrh.",
    references: ["Matthew 2:1-12"],
    keyVerses: ["'And when they were come into the house, they saw the young child with Mary his mother, and fell down, and worshipped him: and when they had opened their treasures, they presented unto him gifts; gold, and frankincense, and myrrh.' — Matthew 2:11"],
    historicalContext: "The Bible does not specify that there were exactly three Magi, though tradition assumes three based on the three gifts. They also visited Jesus in a 'house' somewhat after the night of His birth."
  },
  "what happened when jesus was born": {
    answer: "When Jesus was born, Mary and Joseph were in Bethlehem for a mandatory Roman census. Because the guest rooms were full, Mary gave birth in a place where animals stayed and laid the baby in a manger. Out in the nearby fields, an angel of the Lord appeared to shepherds, terrified by the radiance, and announced: 'Do not be afraid, for I bring you good news of great joy!' Suddenly a great multitude of the heavenly host praised God saying 'Glory to God in the highest, and on earth peace among those with whom he is pleased!' The shepherds hastened to Bethlehem and found Mary, Joseph, and the baby lying in the manger.",
    references: ["Luke 2:1-20"],
    keyVerses: ["'Glory to God in the highest, and on earth peace, good will toward men.' — Luke 2:14"],
    historicalContext: "Bethlehem was the ancestral city of King David. The Roman emperor Caesar Augustus ordered a tax census requiring citizens to register in their ancestral towns."
  }
};

// BIBLE AI PROMPT FOLLOWING ALL RULES
const BIBLE_SYSTEM_INSTRUCTION = `You are the dedicated Bible AI for Christmas Answers, an educational and family-friendly school community hub.
You must adhere strictly to these rules:
1. RESPECTFUL & AGE-APPROPRIATE: Give respectful, reverent, and age-appropriate explanations accessible to children, families, students, and teachers.
2. CLEAR DISTINCTION: Clearly distinguish biblical scripture text from historical or traditional context.
3. NEVER INVENT BIBLE VERSES: Do NOT hallucinate or invent verses. If a verse or reference is uncertain, say so honestly and clearly instead of guessing.
4. BIBLE BOOK, CHAPTER, AND VERSE: Give specific Bible book, chapter, and verse references whenever known (e.g., Luke 2:1-7, Matthew 2:1-12, Isaiah 9:6).
5. COPYRIGHT COMPLIANCE: Do not reproduce entire long chapters or copyrighted Bible translations. Use short quotations (1-3 verses) where fitting. When users request a longer passage, provide a clear summary alongside the chapter and verse references.
6. TOPICS COVERED:
   - Bible stories
   - Jesus & His life/ministry
   - The Nativity & Jesus' birth
   - Bible characters (Mary, Joseph, Shepherds, Wise Men, Gabriel, Prophets, Disciples)
   - Christian teachings & virtues (love, peace, joy, kindness, forgiveness)
   - Bible books & themes
   - Bible references & Christmas prophecies
7. RESPONSE STRUCTURE: Format your answer cleanly with:
   - **Summary Explanation** (simple and clear)
   - **📖 What the Bible Says** (short scripture quotation or verse summary with exact book/chapter/verse citation)
   - **🏛️ Historical & Cultural Context** (clearly distinguished from scripture text)
   - **✨ Key Bible References** (bulleted list of book & chapter:verse)`;

// CHRISTMAS AI SYSTEM INSTRUCTION
const CHRISTMAS_SYSTEM_INSTRUCTION = `You are Christmas Answers AI, a joyful, warm, and helpful holiday assistant for our school community.
The school roles are:
- Principal: Elijah Victor
- Admin: Anum
- Teacher: Aroush
- Students: Arnan, Balaj, Eliab
Note: The Bible section is a separate dedicated feature of Christmas Answers, not a school staff role.
Answer questions about Christmas traditions, history, carols, festive recipes, school celebration ideas, Saint Nicholas, advent wreaths, and holiday goodwill in a warm, encouraging, family-friendly tone. Keep answers concise, clear, and festive with joyful emojis.`;

// API Route: Bible Q&A
app.post('/api/bible/ask', async (req, res) => {
  const { question, topic } = req.body;
  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Question is required.' });
  }

  const normalized = question.toLowerCase().trim().replace(/[?!.,]/g, '');

  // Check matching fallback first if offline or key missing
  let fallbackMatch = null;
  for (const [key, value] of Object.entries(BIBLE_FALLBACKS)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      fallbackMatch = value;
      break;
    }
  }

  if (ai) {
    try {
      const prompt = topic
        ? `Topic: ${topic}\nQuestion: ${question}`
        : `Question: ${question}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction: BIBLE_SYSTEM_INSTRUCTION,
          temperature: 0.2, // Low temperature for high factual biblical accuracy
        },
      });

      const text = response.text || '';
      return res.json({
        answer: text,
        source: 'gemini-3.8-flash',
      });
    } catch (err: any) {
      console.error('Gemini Bible API Error:', err);
      if (fallbackMatch) {
        return res.json({
          answer: `${fallbackMatch.answer}\n\n**📖 Bible Scripture:**\n${fallbackMatch.keyVerses.join('\n')}\n\n**🏛️ Historical Context:**\n${fallbackMatch.historicalContext}\n\n**✨ References:** ${fallbackMatch.references.join(', ')}`,
          source: 'curated-fallback',
        });
      }
      return res.status(500).json({
        error: 'Unable to process Bible question at this time. Please check your network or try again.',
      });
    }
  } else {
    // If no GEMINI_API_KEY provided in environment, use curated knowledge
    if (fallbackMatch) {
      return res.json({
        answer: `${fallbackMatch.answer}\n\n**📖 Bible Scripture:**\n${fallbackMatch.keyVerses.join('\n')}\n\n**🏛️ Historical Context:**\n${fallbackMatch.historicalContext}\n\n**✨ References:** ${fallbackMatch.references.join(', ')}`,
        source: 'curated-knowledge',
      });
    }

    // Default friendly response
    return res.json({
      answer: `### Biblical Answer: "${question}"\n\n**Summary:** In the biblical scriptures, Christmas centers on God's fulfillment of His promise to send the Messiah, the Prince of Peace, born in Bethlehem as recorded in **Luke 2** and **Matthew 1-2**.\n\n**📖 What the Bible Says:**\n"Glory to God in the highest, and on earth peace, good will toward men." (Luke 2:14)\n\n**🏛️ Historical Context:** In the ancient Greco-Roman world of the first century, censuses were conducted by Roman governors such as Quirinius, and records were kept in ancestral towns like Bethlehem.\n\n**✨ Key References:** Luke 2:1-20, Matthew 1:18-25, Isaiah 9:6.`,
      source: 'curated-default',
    });
  }
});

// API Route: Christmas Answers Q&A
app.post('/api/christmas/ask', async (req, res) => {
  const { question } = req.body;
  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Question is required.' });
  }

  if (ai) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: question,
        config: {
          systemInstruction: CHRISTMAS_SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const text = response.text || '';
      return res.json({
        answer: text,
        source: 'gemini-3.8-flash',
      });
    } catch (err: any) {
      console.error('Gemini Christmas API Error:', err);
      return res.json({
        answer: `🎄 **Christmas Answers**: ${question}\n\nChristmas is a wonderful celebration of joy, family, peace, and giving! Originating from the celebration of the Nativity of Jesus Christ, traditions today also include singing carols, sharing meals, lighting trees, and spreading kindness throughout our school and community.\n\nPrincipal Elijah Victor and Admin Anum wish everyone a warm holiday season!`,
        source: 'fallback',
      });
    }
  } else {
    return res.json({
      answer: `🎄 **Christmas Answers**: ${question}\n\nChristmas celebrates love, joy, hope, and goodwill toward all people! In our school community, we celebrate both the sacred Nativity story found in the Bible and the joyful traditions of caroling, giving gifts, and spending time together.\n\nPrincipal Elijah Victor, Admin Anum, Teacher Aroush, and students Arnan, Balaj, and Eliab wish you a blessed Christmas!`,
      source: 'curated-default',
    });
  }
});

// API Route: Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'Christmas Answers & Bible Hub' });
});

// Vite middleware or static files
async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
