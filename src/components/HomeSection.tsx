import React from 'react';
import { SCHOOL_ROLES } from '../data/schoolAndBibleData';
import { NavTab } from '../types';
import {
  BookOpen,
  Bot,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Calendar,
  Heart,
  Quote,
  Megaphone,
  Gamepad2,
} from 'lucide-react';

interface HomeSectionProps {
  onNavigate: (tab: NavTab) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 space-y-8">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900 via-red-950 to-amber-950 text-white p-6 sm:p-10 shadow-2xl border border-amber-500/40">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-200 text-xs font-bold tracking-wider">
            <span>✨ WELCOME TO CHRISTMAS ANSWERS & SCHOOL HUB</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-amber-100 tracking-tight leading-tight">
            Discover the Joy, Wonder & Sacred Story of Christmas
          </h1>

          <p className="text-sm sm:text-base text-red-100/90 leading-relaxed">
            Welcome from <strong>Principal Elijah Victor</strong>, <strong>Admin Anum</strong>, and <strong>Teacher Aroush</strong>!
            Explore our brand-new, dedicated <strong>Bible 📖</strong> section for verified scripture answers, play festive quizzes with students <strong>Arnan, Balaj, and Eliab</strong>, and explore holiday announcements.
          </p>

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('bible')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-red-950 font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-900/40 transition-all hover:scale-102"
            >
              <BookOpen className="w-4 h-4 text-red-950" />
              <span>Explore Dedicated Bible 📖 Section</span>
              <ArrowRight className="w-4 h-4 text-red-950" />
            </button>

            <button
              onClick={() => onNavigate('christmas-answers')}
              className="px-5 py-3 rounded-xl bg-red-800/80 hover:bg-red-800 text-amber-200 font-bold text-sm border border-amber-400/40 flex items-center gap-2 transition-all hover:scale-102"
            >
              <Bot className="w-4 h-4 text-amber-300" />
              <span>Ask Christmas Answers 🤖</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Scripture Card of the Day */}
      <div className="bg-gradient-to-r from-amber-50 via-white to-amber-50 rounded-2xl p-6 border-2 border-amber-200 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
              <span>⭐</span>
              <span>Scripture Verse of the Day</span>
            </div>
            <p className="font-serif italic text-lg sm:text-xl text-stone-900 leading-snug">
              &ldquo;For unto you is born this day in the city of David a Savior, who is Christ the Lord.&rdquo;
            </p>
            <p className="text-xs font-bold text-red-800">— Luke 2:11</p>
          </div>

          <button
            onClick={() => onNavigate('bible')}
            className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5 self-start sm:self-center shrink-0 transition-colors"
          >
            <span>Read Nativity Passage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* School Community Roles Showcase */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-stone-900 flex items-center gap-2">
              <span>🏫</span> School Community Roles
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Meet our leadership, faculty, and active student ambassadors.
            </p>
          </div>
          <div className="text-xs text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
            Note: The <strong>Bible Section 📖</strong> is a dedicated feature, not a staff role.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SCHOOL_ROLES.map((role) => (
            <div
              key={role.name}
              className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{role.emoji}</span>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${role.badgeColor}`}
                  >
                    {role.roleTitle}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-black text-stone-900">{role.name}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed mt-1">
                    {role.description}
                  </p>
                </div>
              </div>

              {role.quote && (
                <div className="pt-2 border-t border-stone-100">
                  <p className="text-xs italic text-stone-500 font-serif">
                    {role.quote}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Quick Access Grid to Requested Main Navigation Sections */}
      <div className="space-y-3">
        <h2 className="text-lg font-black text-stone-900">Explore Christmas Answers Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div
            onClick={() => onNavigate('bible')}
            className="p-5 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-white cursor-pointer hover:scale-102 transition-transform shadow-md group"
          >
            <div className="text-2xl mb-2">📖</div>
            <h3 className="font-extrabold text-base flex items-center justify-between">
              <span>BIBLE</span>
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-xs text-amber-100 mt-1">
              Ask questions about Jesus, the Nativity, characters, and Bible references.
            </p>
          </div>

          <div
            onClick={() => onNavigate('christmas-answers')}
            className="p-5 rounded-2xl bg-gradient-to-br from-red-800 to-red-950 text-white cursor-pointer hover:scale-102 transition-transform shadow-md group"
          >
            <div className="text-2xl mb-2">🤖</div>
            <h3 className="font-extrabold text-base flex items-center justify-between">
              <span>CHRISTMAS ANSWERS</span>
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-xs text-red-200 mt-1">
              Ask about holiday traditions, carols, Saint Nicholas, recipes, and cheer.
            </p>
          </div>

          <div
            onClick={() => onNavigate('quiz')}
            className="p-5 rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-950 text-white cursor-pointer hover:scale-102 transition-transform shadow-md group"
          >
            <div className="text-2xl mb-2">🎮</div>
            <h3 className="font-extrabold text-base flex items-center justify-between">
              <span>QUIZ</span>
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-xs text-emerald-200 mt-1">
              Test your knowledge on the Nativity, scriptures, and student leaderboard.
            </p>
          </div>

          <div
            onClick={() => onNavigate('announcements')}
            className="p-5 rounded-2xl bg-gradient-to-br from-indigo-900 to-indigo-950 text-white cursor-pointer hover:scale-102 transition-transform shadow-md group"
          >
            <div className="text-2xl mb-2">📢</div>
            <h3 className="font-extrabold text-base flex items-center justify-between">
              <span>ANNOUNCEMENTS</span>
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </h3>
            <p className="text-xs text-indigo-200 mt-1">
              Annual Nativity Pageant, Charity Toy Drive, and Choir updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
