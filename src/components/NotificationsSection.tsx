import React, { useState } from 'react';
import { SCHOOL_NOTIFICATIONS } from '../data/schoolAndBibleData';
import { SchoolNotification } from '../types';
import { Bell, Check, CheckCheck, Filter, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';

interface NotificationsSectionProps {
  notifications: SchoolNotification[];
  onToggleRead: (id: string) => void;
  onMarkAllRead: () => void;
}

export const NotificationsSection: React.FC<NotificationsSectionProps> = ({
  notifications,
  onToggleRead,
  onMarkAllRead,
}) => {
  const [filterTag, setFilterTag] = useState<string>('all');

  const filtered = notifications.filter((n) => {
    if (filterTag === 'all') return true;
    return n.tag.toLowerCase() === filterTag.toLowerCase();
  });

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 text-white p-6 sm:p-8 border border-red-800 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-800/80 text-amber-300 text-xs font-bold border border-red-700">
          <Bell className="w-3.5 h-3.5" />
          <span>SCHOOL COMMUNITY DISPATCH</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h1 className="text-2xl sm:text-4xl font-black text-amber-100 flex items-center gap-3">
            <span>🔔</span> Notifications
          </h1>

          {unreadCount > 0 && (
            <button
              onClick={onMarkAllRead}
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-red-950 font-bold text-xs flex items-center gap-1.5 self-start sm:self-center transition-colors shadow-xs"
            >
              <CheckCheck className="w-3.5 h-3.5" />
              <span>Mark All as Read</span>
            </button>
          )}
        </div>
        <p className="text-sm text-stone-300/90 max-w-2xl">
          Stay updated with timely announcements from Principal Elijah Victor, Admin Anum, Teacher Aroush, and daily scripture alerts.
        </p>

        {/* Tag Filters */}
        <div className="pt-3 flex flex-wrap gap-2 border-t border-stone-800">
          {['all', 'urgent', 'festive', 'academic', 'scripture'].map((t) => (
            <button
              key={t}
              onClick={() => setFilterTag(t)}
              className={`px-3 py-1 rounded-full text-xs font-bold capitalize transition-all ${
                filterTag === t
                  ? 'bg-amber-400 text-red-950 font-black'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 border border-stone-200 text-center text-stone-500 text-sm">
            No notifications found in this category.
          </div>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                item.isRead
                  ? 'bg-white border-stone-200 opacity-80'
                  : 'bg-amber-50/70 border-amber-300 shadow-sm'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{item.senderEmoji}</span>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-stone-900">
                        {item.sender} ({item.senderRole})
                      </span>
                      <span className="text-[11px] text-stone-400">• {item.timestamp}</span>
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          item.tag === 'Urgent'
                            ? 'bg-red-100 text-red-800 border border-red-200'
                            : item.tag === 'Festive'
                            ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                            : item.tag === 'Scripture'
                            ? 'bg-purple-100 text-purple-800 border border-purple-200'
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold text-stone-900">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed pt-0.5">
                      {item.content}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onToggleRead(item.id)}
                  title={item.isRead ? 'Mark as Unread' : 'Mark as Read'}
                  className={`p-1.5 rounded-lg text-xs font-semibold shrink-0 transition-colors ${
                    item.isRead
                      ? 'text-stone-400 hover:text-stone-700 hover:bg-stone-100'
                      : 'text-amber-800 hover:bg-amber-200/60 bg-amber-100'
                  }`}
                >
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
