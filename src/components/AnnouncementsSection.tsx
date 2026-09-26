import React, { useState } from 'react';
import { SCHOOL_ANNOUNCEMENTS } from '../data/schoolAndBibleData';
import { SchoolAnnouncement } from '../types';
import { Megaphone, Calendar, MapPin, Sparkles, User, Heart } from 'lucide-react';

export const AnnouncementsSection: React.FC = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<SchoolAnnouncement | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-red-950 via-red-900 to-amber-950 text-white p-6 sm:p-8 border border-red-800 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-800/80 text-amber-300 text-xs font-bold border border-red-700">
          <Megaphone className="w-3.5 h-3.5" />
          <span>OFFICIAL SCHOOL BULLETIN</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-amber-100 flex items-center gap-3">
          <span>📢</span> School Announcements
        </h1>
        <p className="text-sm text-red-200/90 max-w-2xl">
          Upcoming events, Christmas Nativity Pageant rehearsals, and community service projects.
        </p>
      </div>

      {/* Announcements Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SCHOOL_ANNOUNCEMENTS.map((ann) => (
          <div
            key={ann.id}
            className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                  {ann.badge}
                </span>
                <span className="text-stone-400 font-medium">{ann.date}</span>
              </div>

              <h3 className="text-lg font-black text-stone-900 leading-snug">
                {ann.title}
              </h3>

              <p className="text-xs text-stone-600 leading-relaxed">
                {ann.preview}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 space-y-2">
              <div className="text-[11px] text-stone-500 space-y-1">
                <div className="flex items-center gap-1 text-stone-700 font-semibold">
                  <User className="w-3.5 h-3.5 text-stone-400" />
                  <span>{ann.author} ({ann.authorRole})</span>
                </div>
                {ann.location && (
                  <div className="flex items-center gap-1 text-stone-600">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>{ann.location}</span>
                  </div>
                )}
                {ann.importantDate && (
                  <div className="flex items-center gap-1 text-amber-800 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span>{ann.importantDate}</span>
                  </div>
                )}
              </div>

              <button
                onClick={() => setSelectedAnnouncement(ann)}
                className="w-full py-2 rounded-lg bg-stone-100 hover:bg-red-800 hover:text-white text-stone-800 text-xs font-bold transition-colors"
              >
                Read Full Announcement
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Full Announcement */}
      {selectedAnnouncement && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-xl w-full border border-stone-200 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  {selectedAnnouncement.badge}
                </span>
                <h2 className="text-xl font-black text-stone-900 mt-2">
                  {selectedAnnouncement.title}
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">
                  Published: {selectedAnnouncement.date} • By {selectedAnnouncement.author}
                </p>
              </div>
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-500 font-bold shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="text-sm text-stone-800 leading-relaxed space-y-2">
              <p>{selectedAnnouncement.content}</p>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
              {selectedAnnouncement.location && (
                <div><strong>📍 Location:</strong> {selectedAnnouncement.location}</div>
              )}
              {selectedAnnouncement.importantDate && (
                <div><strong>📅 Date & Time:</strong> {selectedAnnouncement.importantDate}</div>
              )}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedAnnouncement(null)}
                className="px-5 py-2 rounded-lg bg-red-800 hover:bg-red-900 text-white font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
