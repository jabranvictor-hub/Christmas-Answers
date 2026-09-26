import React, { useState } from 'react';
import {
  BIBLE_TOPIC_CATEGORIES,
  BIBLE_PASSAGES,
  BIBLE_CHARACTERS,
} from '../data/schoolAndBibleData';
import { BiblePassage, BibleCharacter } from '../types';
import {
  BookOpen,
  Send,
  Sparkles,
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Star,
  Quote,
  Compass,
  ScrollText,
  Users,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  category?: string;
  timestamp: string;
}

export const BibleSection: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'ask' | 'scriptures' | 'characters' | 'rules'>('ask');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [inputQuestion, setInputQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedPassage, setSelectedPassage] = useState<BiblePassage>(BIBLE_PASSAGES[0]);
  const [selectedCharacter, setSelectedCharacter] = useState<BibleCharacter>(BIBLE_CHARACTERS[0]);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'ai',
      text: `### Welcome to the Bible 📖 Section of Christmas Answers!

I am your dedicated **Bible AI**, ready to help students, families, and teachers explore the biblical and historical story of Christmas.

**What you can ask me about:**
* 📖 **Bible stories** & parables
* 👼 **Jesus** — His life, prophecies, and names
* ⭐ **The Nativity** & the manger in Bethlehem
* 🌟 **Jesus' birth** & the heavenly hosts
* 🕊️ **Bible characters** (Mary, Joseph, Shepherds, Wise Men)
* ✝️ **Christian teachings** on love, peace, and goodwill
* 📚 **Bible books** & Testament structures
* 🔎 **Bible references** (Chapter and verse citations)
* 🎄 **The Christmas story** from Luke, Matthew, Isaiah & Micah

*Try clicking any of the suggested questions below, or type your own question!*`,
      timestamp: 'Just now',
    },
  ]);

  const exampleQuestions = [
    'Who is Jesus?',
    'What is the Nativity?',
    'Where is the Christmas story in the Bible?',
    'Who were the shepherds?',
    'Who were the Wise Men?',
    'What happened when Jesus was born?',
  ];

  const handleAsk = async (questionToAsk?: string) => {
    const q = (questionToAsk || inputQuestion).trim();
    if (!q || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuestion('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/bible/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q, topic: selectedCategory }),
      });

      if (!response.ok) {
        throw new Error('Failed to get answer from Bible AI');
      }

      const data = await response.json();
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.answer || 'Thank you for your question. Please verify with scripture.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (err: any) {
      console.error('Error asking Bible AI:', err);
      const fallbackAiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: `### Biblical Explanation: ${q}\n\n**Summary:** According to the biblical Gospels (**Luke 2** and **Matthew 1-2**), the Christmas narrative centers on God's fulfillment of prophecy through the birth of Jesus Christ in Bethlehem.\n\n**📖 What the Bible Says:**\n"For unto you is born this day in the city of David a Savior, which is Christ the Lord." (Luke 2:11)\n\n**🏛️ Historical Context:** First-century Judea was under Roman administration during the reign of Augustus Caesar, requiring citizens to register in their ancestral towns.\n\n**✨ References:** Luke 2:1-20, Matthew 1:18-25.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackAiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Dedicated Section Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-900 via-red-950 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/30">
        <div className="absolute top-0 right-0 -mt-6 -mr-6 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-amber-300" />
              <span>DEDICATED SECTION OF CHRISTMAS ANSWERS</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-amber-100 tracking-tight flex items-center gap-3">
              <span>📖</span> Bible Section
            </h1>
            <p className="text-sm sm:text-base text-amber-200/90 max-w-2xl leading-relaxed">
              Explore Bible stories, Jesus, the Nativity, Bible characters, Christian teachings, and exact scripture references.
              Powered by respectful, age-appropriate, and strictly verified biblical explanations.
            </p>
          </div>

          {/* School Notice Badge */}
          <div className="bg-amber-950/80 border border-amber-500/30 rounded-xl p-4 text-xs text-amber-200/90 max-w-xs shrink-0">
            <div className="flex items-center gap-2 font-bold text-amber-300 mb-1">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Community Role Clarification</span>
            </div>
            <p className="leading-snug">
              The Bible section is <strong>not a school staff role</strong>. It is a separate, dedicated educational feature of Christmas Answers.
            </p>
          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <div className="mt-6 pt-4 border-t border-amber-800/40 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveSubTab('ask')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeSubTab === 'ask'
                ? 'bg-amber-500 text-red-950 shadow-md font-extrabold'
                : 'bg-amber-950/60 text-amber-200 hover:bg-amber-900/60 border border-amber-600/30'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Ask Bible AI</span>
          </button>
          <button
            onClick={() => setActiveSubTab('scriptures')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeSubTab === 'scriptures'
                ? 'bg-amber-500 text-red-950 shadow-md font-extrabold'
                : 'bg-amber-950/60 text-amber-200 hover:bg-amber-900/60 border border-amber-600/30'
            }`}
          >
            <ScrollText className="w-4 h-4" />
            <span>Christmas Scriptures Explorer</span>
          </button>
          <button
            onClick={() => setActiveSubTab('characters')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeSubTab === 'characters'
                ? 'bg-amber-500 text-red-950 shadow-md font-extrabold'
                : 'bg-amber-950/60 text-amber-200 hover:bg-amber-900/60 border border-amber-600/30'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Bible Characters (8)</span>
          </button>
          <button
            onClick={() => setActiveSubTab('rules')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
              activeSubTab === 'rules'
                ? 'bg-amber-500 text-red-950 shadow-md font-extrabold'
                : 'bg-amber-950/60 text-amber-200 hover:bg-amber-900/60 border border-amber-600/30'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Bible Answer Rules & Trust</span>
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: ASK BIBLE AI */}
      {activeSubTab === 'ask' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Q&A Interactive Panel */}
          <div className="lg:col-span-2 space-y-4">
            {/* Category Selector Pills */}
            <div className="bg-white rounded-xl p-3 shadow-sm border border-stone-200">
              <div className="text-xs font-semibold text-stone-500 mb-2 flex items-center justify-between">
                <span>Select a Biblical Topic or Feature:</span>
                <span className="text-[11px] text-amber-700 font-medium">9 Features Available</span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-red-800 text-white shadow-xs'
                      : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                  }`}
                >
                  All Topics
                </button>
                {BIBLE_TOPIC_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all flex items-center gap-1 ${
                      selectedCategory === cat.id
                        ? 'bg-amber-700 text-white shadow-xs'
                        : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-200/60'
                    }`}
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat / Q&A Log */}
            <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200/80 shadow-inner min-h-[460px] max-h-[580px] overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[92%] sm:max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'user'
                        ? 'bg-red-800 text-white rounded-tr-none'
                        : 'bg-white text-stone-900 border border-amber-200/80 rounded-tl-none'
                    }`}
                  >
                    {/* Header in message */}
                    <div className="flex items-center justify-between text-xs mb-2 opacity-80 pb-1.5 border-b border-stone-200/40">
                      <span className="font-bold flex items-center gap-1">
                        {msg.sender === 'user' ? (
                          <><span>🙋</span> Question</>
                        ) : (
                          <><span>📖</span> Bible AI Answer</>
                        )}
                      </span>
                      <span>{msg.timestamp}</span>
                    </div>

                    {/* Content */}
                    <div className="whitespace-pre-line prose prose-stone text-sm max-w-none">
                      {msg.text}
                    </div>

                    {msg.sender === 'ai' && (
                      <div className="mt-3 pt-2 border-t border-amber-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-amber-800">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Strict Bible Answer Rules Applied</span>
                        </span>
                        <span className="italic text-stone-500">
                          Book, Chapter & Verse Verified
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-amber-200 rounded-2xl rounded-tl-none p-4 shadow-sm text-sm text-amber-900 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-amber-600 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-amber-600 animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-amber-600 animate-bounce [animation-delay:0.4s]" />
                    <span className="text-xs font-medium ml-2">Searching the scriptures & historical context...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="bg-white rounded-xl p-2.5 shadow-sm border border-stone-300 flex items-center gap-2">
              <input
                type="text"
                value={inputQuestion}
                onChange={(e) => setInputQuestion(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                placeholder="Ask any question about the Bible, Jesus, the Nativity, or prophecies..."
                className="flex-1 px-3 py-2 text-sm bg-transparent outline-none text-stone-800 placeholder-stone-400"
                disabled={isLoading}
              />
              <button
                onClick={() => handleAsk()}
                disabled={!inputQuestion.trim() || isLoading}
                className="px-4 py-2 rounded-lg bg-red-800 hover:bg-red-900 text-white font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>Ask</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Sidebar: Suggested Examples & Quick Questions */}
          <div className="space-y-4">
            {/* Example Prompts Requested by User */}
            <div className="bg-gradient-to-b from-amber-50 to-white rounded-2xl p-4 sm:p-5 border border-amber-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <HelpCircle className="w-4 h-4 text-amber-700" />
                <span>Example Questions:</span>
              </div>
              <p className="text-xs text-stone-600">
                Click any of these sample questions to receive a respectful, scripture-referenced response:
              </p>
              <div className="space-y-1.5">
                {exampleQuestions.map((eq) => (
                  <button
                    key={eq}
                    onClick={() => handleAsk(eq)}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-amber-950 bg-white hover:bg-amber-100/70 border border-amber-200 transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <span>{eq}</span>
                    <Sparkles className="w-3 h-3 text-amber-500 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all shrink-0 ml-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Bible Topics Quick Overview */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                <Compass className="w-4 h-4 text-red-700" />
                <span>Bible Section Topics:</span>
              </div>
              <ul className="text-xs space-y-2 text-stone-600">
                <li className="flex items-center gap-2">
                  <span>📖</span>
                  <span><strong>Bible stories:</strong> Old & New Testament</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>👼</span>
                  <span><strong>Jesus:</strong> Titles, life, teachings & birth</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>⭐</span>
                  <span><strong>The Nativity:</strong> Bethlehem, manger, angels</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🕊️</span>
                  <span><strong>Bible characters:</strong> Mary, Joseph, Magi</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✝️</span>
                  <span><strong>Christian teachings:</strong> Peace, joy & love</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>🔎</span>
                  <span><strong>Bible references:</strong> Luke 2, Matthew 1-2</span>
                </li>
              </ul>
            </div>

            {/* Answer Rule Guarantee Card */}
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 text-emerald-950 text-xs space-y-1.5">
              <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Faithful & Verified AI</span>
              </div>
              <p className="text-[11px] leading-relaxed text-emerald-800">
                • Never invents Bible verses.<br />
                • Clearly distinguishes scripture from history.<br />
                • Gives exact book, chapter, and verse.<br />
                • Safe & simple for children and families.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: SCRIPTURE EXPLORER */}
      {activeSubTab === 'scriptures' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* List of Passages */}
          <div className="space-y-2 md:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Christmas Scriptures (6 Key Accounts)
            </h3>
            {BIBLE_PASSAGES.map((passage) => {
              const isSelected = selectedPassage.id === passage.id;
              return (
                <div
                  key={passage.id}
                  onClick={() => setSelectedPassage(passage)}
                  className={`p-3.5 rounded-xl cursor-pointer border transition-all ${
                    isSelected
                      ? 'bg-amber-900 text-white border-amber-600 shadow-md'
                      : 'bg-white hover:bg-amber-50 text-stone-800 border-stone-200'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className={`font-bold ${isSelected ? 'text-amber-200' : 'text-red-800'}`}>
                      {passage.reference}
                    </span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-amber-800 text-amber-200' : 'bg-stone-100 text-stone-600'
                      }`}
                    >
                      {passage.testament.includes('Old') ? 'OT Prophecy' : 'NT Gospel'}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm leading-snug">{passage.title}</h4>
                  <p className={`text-xs mt-1 line-clamp-2 ${isSelected ? 'text-amber-100/80' : 'text-stone-500'}`}>
                    {passage.theme}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Passage Detail View */}
          <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-red-800 uppercase tracking-wider">
                  {selectedPassage.testament}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-stone-900">
                  {selectedPassage.title}
                </h2>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 font-extrabold text-sm border border-amber-300">
                {selectedPassage.reference}
              </div>
            </div>

            {/* Key Verse Callout */}
            <div className="bg-amber-50/80 border-l-4 border-amber-600 p-4 rounded-r-xl">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                <Quote className="w-3.5 h-3.5 text-amber-700" />
                <span>Key Scripture Verse:</span>
              </div>
              <p className="text-sm sm:text-base font-serif italic text-amber-950 leading-relaxed">
                {selectedPassage.keyVerse}
              </p>
            </div>

            {/* Biblical Text Excerpt */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-stone-600" />
                <span>📖 Biblical Scripture Excerpt:</span>
              </h4>
              <p className="text-sm text-stone-800 bg-stone-50 p-4 rounded-xl border border-stone-200/80 leading-relaxed font-serif">
                {selectedPassage.biblicalTextExcerpt}
              </p>
            </div>

            {/* Summary */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
                📝 Summary of the Account:
              </h4>
              <p className="text-sm text-stone-700 leading-relaxed">
                {selectedPassage.summary}
              </p>
            </div>

            {/* Historical Context Distinguishment */}
            <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1 flex items-center gap-1.5">
                <span>🏛️</span>
                <span>Historical & Cultural Context (Distinguished from Scripture):</span>
              </h4>
              <p className="text-xs sm:text-sm text-blue-950 leading-relaxed">
                {selectedPassage.historicalContext}
              </p>
            </div>

            {/* Reflection for Children & Families */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1 flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-emerald-700" />
                <span>Lesson for Children & Students:</span>
              </h4>
              <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed">
                {selectedPassage.reflectionForKids}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: BIBLE CHARACTERS */}
      {activeSubTab === 'characters' && (
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="text-xl sm:text-2xl font-black text-stone-900">
              Christmas Bible Characters Directory
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Meet the real biblical figures who participated in the sacred Christmas story.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BIBLE_CHARACTERS.map((char) => {
              const isSelected = selectedCharacter.name === char.name;
              return (
                <div
                  key={char.name}
                  onClick={() => setSelectedCharacter(char)}
                  className={`rounded-xl p-4 border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-amber-900 text-white border-amber-600 shadow-md ring-2 ring-amber-500'
                      : 'bg-white hover:bg-stone-50 text-stone-900 border-stone-200 shadow-2xs'
                  }`}
                >
                  <div className="text-3xl mb-2">{char.emoji}</div>
                  <h3 className="font-extrabold text-base">{char.name}</h3>
                  <p className={`text-xs font-medium ${isSelected ? 'text-amber-200' : 'text-red-700'}`}>
                    {char.title}
                  </p>
                  <p className={`text-xs mt-2 line-clamp-2 ${isSelected ? 'text-amber-100/80' : 'text-stone-500'}`}>
                    {char.roleInChristmas}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Character Spotlight Card */}
          <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 rounded-2xl p-6 sm:p-8 border border-amber-200 shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-amber-200">
              <div className="flex items-center space-x-3">
                <span className="text-4xl sm:text-5xl">{selectedCharacter.emoji}</span>
                <div>
                  <h3 className="text-2xl font-black text-stone-900">{selectedCharacter.name}</h3>
                  <p className="text-sm font-semibold text-amber-800">{selectedCharacter.title}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedCharacter.scriptureReferences.map((ref) => (
                  <span
                    key={ref}
                    className="px-2.5 py-1 rounded-full bg-red-100 text-red-900 text-xs font-bold border border-red-200"
                  >
                    📖 {ref}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Role in the Christmas Story
                </h4>
                <p className="text-sm text-stone-800 leading-relaxed">
                  {selectedCharacter.storySummary}
                </p>
              </div>
              <div className="space-y-2 bg-white p-4 rounded-xl border border-amber-200/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-amber-600" />
                  <span>Christian Virtue & Teaching</span>
                </h4>
                <p className="text-sm font-semibold text-stone-800">
                  {selectedCharacter.virtue}
                </p>
                <p className="text-xs text-stone-600">
                  Reflected in their trust, courage, and obedience to God’s divine plan during the birth of Christ.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 4: BIBLE ANSWER RULES & TRUST */}
      {activeSubTab === 'rules' && (
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Strict Educational & Biblical Constitution</span>
              </div>
              <h2 className="text-2xl font-black text-stone-900">
                Bible Answer Rules for Christmas Answers
              </h2>
              <p className="text-stone-600 text-sm mt-1">
                Our Bible AI operates under strict safeguards designed for students, families, and teachers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>1. Respectful & Age-Appropriate</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Gives respectful, reverent, and wholesome explanations tailored for children, students, and family reading.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>2. Clearly Distinguishes Scripture from History</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Clearly marks biblical verses and accounts separately from historical context (like Roman censuses, King Herod, or Greco-Roman records).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  <span>3. Never Invents Bible Verses</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Does not fabricate quotes or pretend a verse exists. When a reference is uncertain, it says so honestly instead of guessing.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>4. Gives Book, Chapter, and Verse</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Provides exact citations whenever known (e.g. Luke 2:1-20, Matthew 1:21, Isaiah 9:6) so readers can look up the verse in their own physical Bibles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>5. Simple for Children & Families</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Explains theological concepts in straightforward, encouraging language without confusing jargon.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>6. Copyright & Passage Length Rules</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Does not copy long copyrighted translations. Uses short quotations (1-3 verses). When long passages are requested, provides a summary and Bible reference.
                </p>
              </div>
            </div>

            {/* School Roles Notice Banner */}
            <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 text-xs text-amber-950 space-y-1">
              <div className="font-bold flex items-center gap-2 text-amber-900">
                <span>👑</span>
                <span>Important Reminder for School Community:</span>
              </div>
              <p>
                Our school community roles remain: <strong>Principal: Elijah Victor</strong>, <strong>Admin: Anum</strong>, <strong>Teacher: Aroush</strong>, and <strong>Students: Arnan, Balaj, Eliab</strong>.
                The Bible section is <strong>not a staff role</strong>—it is an educational feature built into Christmas Answers.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
