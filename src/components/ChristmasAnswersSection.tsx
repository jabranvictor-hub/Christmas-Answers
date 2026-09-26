import React, { useState } from 'react';
import { Bot, Send, Sparkles, Gift, Music, Flame, Snowflake, TreePine } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const ChristmasAnswersSection: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      sender: 'ai',
      text: `🎅 **Ho Ho Ho! Welcome to Christmas Answers!**\n\nI am your school holiday assistant. Ask me anything about Christmas traditions, carols, the history of Saint Nicholas, advent wreaths, holiday recipes, or festive school activities!\n\n*(Note: For biblical scripture, Nativity accounts, and verse references, be sure to visit our dedicated **Bible 📖** section in the main navigation!)*`,
      timestamp: 'Just now',
    },
  ]);

  const quickPrompts = [
    'Why do we put up Christmas trees?',
    'Who was Saint Nicholas in history?',
    'What is the meaning of the Advent Wreath?',
    'What are the most famous Christmas carols and their origins?',
    'How do children around the world celebrate Christmas?',
    'What fun Christmas activities can students do at school?',
  ];

  const handleSend = async (q?: string) => {
    const textToSend = (q || question).trim();
    if (!textToSend || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setQuestion('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/christmas/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: textToSend }),
      });

      if (!res.ok) throw new Error('Failed to ask Christmas Answers');

      const data = await res.json();
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.answer || 'Merry Christmas! Joy and peace to you and your family.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      const fallbackMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: `🎄 **Christmas Answers**: ${textToSend}\n\nChristmas is a wonderful time celebrated with carols, evergreen trees, festive lights, and sharing gifts of love. Traditions like hanging stockings and singing carols evolved through centuries of winter celebrations and Christian history!\n\nPrincipal Elijah Victor and Teacher Aroush wish everyone joy!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-red-900 to-red-950 text-white p-6 sm:p-8 border border-red-800 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-800/80 text-amber-300 text-xs font-bold border border-red-700">
          <Bot className="w-3.5 h-3.5" />
          <span>FESTIVE COMMUNITY ASSISTANT</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-amber-100 flex items-center gap-3">
          <span>🤖</span> Christmas Answers
        </h1>
        <p className="text-sm text-red-200/90 max-w-2xl">
          Ask questions about Christmas traditions, carols, Saint Nicholas, advent wreaths, and holiday cheer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Log */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-stone-50 rounded-2xl p-4 sm:p-5 border border-stone-200 shadow-inner min-h-[460px] max-h-[580px] overflow-y-auto space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[90%] sm:max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                    m.sender === 'user'
                      ? 'bg-red-800 text-white rounded-tr-none'
                      : 'bg-white text-stone-900 border border-red-200 rounded-tl-none'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-2 opacity-80 pb-1 border-b border-stone-200/50">
                    <span className="font-bold flex items-center gap-1">
                      {m.sender === 'user' ? '🎄 Your Question' : '🤖 Christmas Answers AI'}
                    </span>
                    <span>{m.timestamp}</span>
                  </div>
                  <div className="whitespace-pre-line text-sm leading-relaxed">
                    {m.text}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-red-200 rounded-2xl rounded-tl-none p-3 shadow-sm text-xs text-red-800 flex items-center space-x-2">
                  <span className="animate-spin text-sm">❄️</span>
                  <span>Fetching festive answer...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Box */}
          <div className="bg-white rounded-xl p-2.5 shadow-sm border border-stone-300 flex items-center gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about Christmas traditions, carols, Saint Nick, or holiday fun..."
              className="flex-1 px-3 py-2 text-sm bg-transparent outline-none text-stone-800"
              disabled={isLoading}
            />
            <button
              onClick={() => handleSend()}
              disabled={!question.trim() || isLoading}
              className="px-4 py-2 rounded-lg bg-red-800 hover:bg-red-900 text-white font-bold text-xs flex items-center gap-1.5 transition-colors disabled:opacity-50"
            >
              <span>Ask</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Popular Questions to Try</span>
            </h3>
            <div className="space-y-2">
              {quickPrompts.map((qp) => (
                <button
                  key={qp}
                  onClick={() => handleSend(qp)}
                  className="w-full text-left p-2.5 rounded-xl text-xs font-semibold text-stone-800 bg-stone-50 hover:bg-red-50 hover:text-red-950 border border-stone-200 transition-colors shadow-2xs"
                >
                  {qp}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-red-50 rounded-2xl p-4 border border-red-200 text-red-950 text-xs space-y-2">
            <div className="font-bold flex items-center gap-2 text-red-900">
              <TreePine className="w-4 h-4 text-red-700" />
              <span>Looking for Scripture?</span>
            </div>
            <p className="text-stone-700 leading-relaxed">
              If your question is about Bible verses, the Nativity story, Luke 2, Matthew 1-2, or Old Testament prophecies, check our dedicated <strong>Bible 📖 Section</strong>!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
