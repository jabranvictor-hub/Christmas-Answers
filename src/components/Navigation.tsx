import React from 'react';
import { NavTab } from '../types';
import {
  Home,
  Bot,
  BookOpen,
  Info,
  Gamepad2,
  Bell,
  Megaphone,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

interface NavigationProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  unreadCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onSelectTab,
  unreadCount,
}) => {
  const navItems: { id: NavTab; label: string; icon: React.ReactNode; isSpecial?: boolean; badge?: string }[] = [
    { id: 'home', label: 'HOME', icon: <Home className="w-4 h-4" /> },
    { id: 'christmas-answers', label: 'CHRISTMAS ANSWERS', icon: <Bot className="w-4 h-4" /> },
    {
      id: 'bible',
      label: 'BIBLE',
      icon: <BookOpen className="w-4 h-4" />,
      isSpecial: true,
      badge: 'Dedicated 📖',
    },
    { id: 'information', label: 'INFORMATION', icon: <Info className="w-4 h-4" /> },
    { id: 'quiz', label: 'QUIZ', icon: <Gamepad2 className="w-4 h-4" /> },
    {
      id: 'notifications',
      label: 'NOTIFICATIONS',
      icon: <Bell className="w-4 h-4" />,
      badge: unreadCount > 0 ? `${unreadCount}` : undefined,
    },
    { id: 'announcements', label: 'ANNOUNCEMENTS', icon: <Megaphone className="w-4 h-4" /> },
    { id: 'help', label: 'HELP', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <nav className="bg-red-950/95 border-b border-amber-600/40 sticky top-0 z-50 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & School Branding */}
          <div
            onClick={() => onSelectTab('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white shadow-md shadow-amber-900/40 group-hover:scale-105 transition-transform">
              <span className="text-xl">🎄</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-amber-100 tracking-wide text-base sm:text-lg">
                  Christmas Answers
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 hidden md:inline-block">
                  School Hub
                </span>
              </div>
              <p className="text-xs text-red-200/80 hidden sm:block">
                With Dedicated Bible 📖 Q&A Section
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`relative flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-bold tracking-wider transition-all ${
                    isActive
                      ? item.isSpecial
                        ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white shadow-md shadow-amber-900/50'
                        : 'bg-red-800 text-amber-200 shadow-inner'
                      : item.isSpecial
                      ? 'text-amber-300 hover:bg-amber-900/40 hover:text-amber-100 border border-amber-500/40'
                      : 'text-red-100/90 hover:bg-red-900/60 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ml-1 ${
                        item.isSpecial
                          ? 'bg-amber-300 text-red-950'
                          : 'bg-red-500 text-white animate-pulse'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick CTA button for mobile / top right */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onSelectTab('bible')}
              className={`flex items-center space-x-1 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                currentTab === 'bible'
                  ? 'bg-amber-400 text-red-950 border-amber-300 shadow-md'
                  : 'bg-amber-500/20 text-amber-200 border-amber-400/50 hover:bg-amber-400 hover:text-red-950'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300 group-hover:text-red-950" />
              <span>📖 Bible Q&A</span>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Scrolling Sub-Nav */}
        <div className="lg:hidden flex items-center space-x-1 overflow-x-auto py-2.5 scrollbar-none border-t border-red-900/60">
          {navItems.map((item) => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`whitespace-nowrap flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                  isActive
                    ? item.isSpecial
                      ? 'bg-amber-500 text-red-950 shadow'
                      : 'bg-red-800 text-white'
                    : item.isSpecial
                    ? 'bg-amber-900/30 text-amber-300 border border-amber-500/40'
                    : 'bg-red-900/40 text-red-200'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[10px] px-1 rounded-full bg-red-600 text-white ml-0.5">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
