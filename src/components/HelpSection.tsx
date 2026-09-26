import React from 'react';
import { HelpCircle, BookOpen, ShieldCheck, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

export const HelpSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 text-white p-6 sm:p-8 border border-red-800 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-800/80 text-amber-300 text-xs font-bold border border-red-700">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>COMMUNITY SUPPORT & GUIDELINES</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-amber-100 flex items-center gap-3">
          <span>🤝</span> Help & Guidelines
        </h1>
        <p className="text-sm text-stone-300/90 max-w-2xl">
          Learn how to get the most out of Christmas Answers and the dedicated Bible 📖 Q&A section, or contact school administrators.
        </p>
      </div>

      {/* Guide: How to Ask the Bible AI */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-5">
        <div className="flex items-center gap-2 text-stone-900 font-black text-xl">
          <BookOpen className="w-5 h-5 text-red-800" />
          <h2>How to Ask the Bible 📖 Section</h2>
        </div>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          The Bible section is designed for students, parents, and educators. Here are tips for asking great questions:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
            <span className="font-extrabold text-amber-900">Ask about Specific People</span>
            <p className="text-stone-600">
              "Who were the shepherds?", "Who were the Wise Men?", "What was Mary's response to Gabriel?"
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
            <span className="font-extrabold text-amber-900">Ask about Biblical Events</span>
            <p className="text-stone-600">
              "What is the Nativity?", "What happened when Jesus was born in Bethlehem?", "Why was there no room at the inn?"
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
            <span className="font-extrabold text-amber-900">Ask for Exact Scripture References</span>
            <p className="text-stone-600">
              "Where is the Christmas story in the Bible?", "Which verses foretell the Prince of Peace?"
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
            <span className="font-extrabold text-amber-900">Ask about Christian Teachings</span>
            <p className="text-stone-600">
              "What does the Bible teach about peace on earth?", "Why do we give gifts at Christmas?"
            </p>
          </div>
        </div>

        {/* Bible Rules Summary */}
        <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Guaranteed Bible Answer Rules:</span>
          </div>
          <ul className="text-xs text-emerald-800 space-y-1 list-disc list-inside">
            <li>Answers are always respectful and age-appropriate for children.</li>
            <li>Bible scripture is clearly distinguished from historical Roman/Greco context.</li>
            <li>Never invents Bible verses; gives book, chapter, and verse citations when known.</li>
            <li>If a reference is uncertain, states so rather than guessing.</li>
            <li>Respects copyright; summarizes longer passages with verse references.</li>
          </ul>
        </div>
      </div>

      {/* Contact Administration */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
        <h2 className="text-xl font-black text-stone-900">
          Contact School Administration
        </h2>
        <p className="text-xs sm:text-sm text-stone-600">
          Reach out to our leadership team for classroom assistance or general inquiries:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">👑</span>
              <div>
                <h4 className="font-extrabold text-sm text-stone-900">Elijah Victor</h4>
                <p className="text-xs text-amber-800 font-semibold">School Principal</p>
              </div>
            </div>
            <p className="text-xs text-stone-600">
              Available for parent consultations, school vision inquiries, and assembly leadership.
            </p>
            <div className="text-xs text-stone-500 pt-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-stone-400" />
              <span>principal.office@schoolhub.internal</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛠️</span>
              <div>
                <h4 className="font-extrabold text-sm text-stone-900">Anum</h4>
                <p className="text-xs text-blue-800 font-semibold">School Administrator</p>
              </div>
            </div>
            <p className="text-xs text-stone-600">
              Assisting with platform coordination, winter break dates, pageant tickets, and toy drive logistics.
            </p>
            <div className="text-xs text-stone-500 pt-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-stone-400" />
              <span>admin.anum@schoolhub.internal</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
