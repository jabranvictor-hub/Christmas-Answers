import React from 'react';
import { NavTab } from '../types';
import { SCHOOL_ROLES } from '../data/schoolAndBibleData';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-red-950 text-red-200 border-t border-amber-600/30 mt-12 py-10">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand & Info */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎄</span>
              <span className="font-extrabold text-amber-100 text-lg">
                Christmas Answers & School Hub
              </span>
            </div>
            <p className="text-xs text-red-200/80 max-w-md leading-relaxed">
              An educational platform celebrating the wonder, joy, and sacred biblical account of Christmas.
              Featuring our dedicated <strong>Bible 📖</strong> Q&A section, historical timelines, and school community collaboration.
            </p>
            <div className="p-2.5 rounded-lg bg-red-900/60 border border-amber-500/20 text-[11px] text-amber-200/90 max-w-md">
              📖 <em>Notice: The Bible section is a separate, dedicated feature of Christmas Answers and is not a school staff role.</em>
            </div>
          </div>

          {/* Col 2: School Community Roles */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              School Roles
            </h4>
            <ul className="text-xs space-y-1.5 text-red-200/90">
              <li>👑 <strong>Principal:</strong> Elijah Victor</li>
              <li>🛠️ <strong>Admin:</strong> Anum</li>
              <li>👩‍🏫 <strong>Teacher:</strong> Aroush</li>
              <li>🎓 <strong>Student:</strong> Arnan</li>
              <li>🎓 <strong>Student:</strong> Balaj</li>
              <li>🎓 <strong>Student:</strong> Eliab</li>
            </ul>
          </div>

          {/* Col 3: Navigation Quick Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-1 text-xs text-red-200/80">
              <button onClick={() => onNavigate('home')} className="text-left hover:text-white">
                🏠 Home
              </button>
              <button onClick={() => onNavigate('christmas-answers')} className="text-left hover:text-white">
                🤖 Answers
              </button>
              <button onClick={() => onNavigate('bible')} className="text-left text-amber-300 font-bold hover:text-white">
                📖 Bible Q&A
              </button>
              <button onClick={() => onNavigate('information')} className="text-left hover:text-white">
                📚 Info
              </button>
              <button onClick={() => onNavigate('quiz')} className="text-left hover:text-white">
                🎮 Quiz
              </button>
              <button onClick={() => onNavigate('notifications')} className="text-left hover:text-white">
                🔔 Alerts
              </button>
              <button onClick={() => onNavigate('announcements')} className="text-left hover:text-white">
                📢 Bulletin
              </button>
              <button onClick={() => onNavigate('help')} className="text-left hover:text-white">
                🤝 Help
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-red-900/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-red-300/60">
          <div>
            © {new Date().getFullYear()} Christmas Answers & School Community. All rights reserved.
          </div>
          <div className="text-amber-200/80 font-medium">
            &ldquo;Glory to God in the highest, and on earth peace, good will toward men.&rdquo; — Luke 2:14
          </div>
        </div>
      </div>
    </footer>
  );
};
