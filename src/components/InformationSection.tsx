import React, { useState } from 'react';
import { BookOpen, Calendar, ScrollText, CheckCircle2, Star, Sparkles } from 'lucide-react';

export const InformationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'gospels' | 'school'>('timeline');

  const timelineEvents = [
    {
      era: 'c. 700 BC',
      title: 'Old Testament Prophecies',
      reference: 'Isaiah 7:14; 9:6; Micah 5:2',
      description: 'Prophets foretell a virgin will conceive Immanuel, a ruler will come from Bethlehem Ephrathah, and a child will be born called Prince of Peace.',
      badge: 'Prophecy',
    },
    {
      era: 'c. 5 BC',
      title: 'The Annunciation to Mary',
      reference: 'Luke 1:26-38',
      description: 'Angel Gabriel appears to Mary in Nazareth, announcing she will bear Jesus by the Holy Spirit. Mary answers with humble faith.',
      badge: 'Gospel',
    },
    {
      era: 'c. 5 BC',
      title: 'Joseph’s Angelic Dream',
      reference: 'Matthew 1:18-25',
      description: 'An angel reassures Joseph to take Mary as his wife and name the child Jesus, for He will save His people from their sins.',
      badge: 'Gospel',
    },
    {
      era: 'c. 5–4 BC',
      title: 'Journey to Bethlehem & The Birth',
      reference: 'Luke 2:1-7',
      description: 'Due to Caesar Augustus\'s census decree, Mary and Joseph travel to Bethlehem. Finding no space in the inn, Jesus is born and laid in a manger.',
      badge: 'Nativity',
    },
    {
      era: 'Night of Birth',
      title: 'Angels Proclaim to the Shepherds',
      reference: 'Luke 2:8-20',
      description: 'A heavenly choir sings "Glory to God in the highest". Shepherds hurry to Bethlehem, witness the infant, and spread the news with joyful praise.',
      badge: 'Nativity',
    },
    {
      era: 'Months Later',
      title: 'The Visit of the Magi (Wise Men)',
      reference: 'Matthew 2:1-12',
      description: 'Magi guided by a star from the East arrive at the house in Bethlehem, offering royal treasures of gold, frankincense, and myrrh.',
      badge: 'Worship',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-red-950 via-red-900 to-stone-900 text-white p-6 sm:p-8 border border-amber-600/30 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-800/80 text-amber-300 text-xs font-bold border border-red-700">
          <BookOpen className="w-3.5 h-3.5" />
          <span>EDUCATIONAL & SCRIPTURAL GUIDE</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-black text-amber-100 flex items-center gap-3">
          <span>📚</span> Information & History
        </h1>
        <p className="text-sm text-red-200/90 max-w-2xl">
          Learn about the biblical timeline of the Nativity, how the Gospels of Luke and Matthew record the story, and our school community’s traditions.
        </p>

        {/* Tab Buttons */}
        <div className="pt-4 flex flex-wrap gap-2 border-t border-red-800/60">
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'timeline'
                ? 'bg-amber-400 text-red-950 font-black'
                : 'bg-red-900/60 text-red-200 hover:bg-red-800'
            }`}
          >
            Chronological Nativity Timeline
          </button>
          <button
            onClick={() => setActiveTab('gospels')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'gospels'
                ? 'bg-amber-400 text-red-950 font-black'
                : 'bg-red-900/60 text-red-200 hover:bg-red-800'
            }`}
          >
            Comparing Matthew & Luke
          </button>
          <button
            onClick={() => setActiveTab('school')}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === 'school'
                ? 'bg-amber-400 text-red-950 font-black'
                : 'bg-red-900/60 text-red-200 hover:bg-red-800'
            }`}
          >
            School Community & Roles
          </button>
        </div>
      </div>

      {/* Tab: Timeline */}
      {activeTab === 'timeline' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div>
            <h2 className="text-xl font-black text-stone-900">
              The Chronological Nativity Timeline
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Tracing the historical and biblical milestones from ancient prophecy to the manger in Bethlehem.
            </p>
          </div>

          <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8 py-2">
            {timelineEvents.map((ev, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-amber-500 border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-extrabold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                      {ev.era}
                    </span>
                    <span className="text-xs font-bold text-red-800">
                      📖 {ev.reference}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-stone-900">
                    {ev.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-3xl">
                    {ev.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Matthew vs Luke */}
      {activeTab === 'gospels' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-red-800 uppercase tracking-wider">New Testament</span>
                <h3 className="text-xl font-black text-stone-900">Gospel of Luke</h3>
              </div>
              <span className="text-2xl">📜</span>
            </div>
            <p className="text-xs font-semibold text-stone-600">
              Focus: Mary, the Shepherds, the Manger, and Gentile Inclusivity.
            </p>
            <ul className="text-xs space-y-2 text-stone-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Luke 1:26–38:</strong> Gabriel appears to Mary in Nazareth.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Luke 2:1–7:</strong> The Roman census of Caesar Augustus and traveling to Bethlehem.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Luke 2:8–20:</strong> The angel choir appearing to humble shepherds in the fields.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Luke 2:21–38:</strong> Baby Jesus presented in the Temple, meeting Simeon and Anna.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-red-800 uppercase tracking-wider">New Testament</span>
                <h3 className="text-xl font-black text-stone-900">Gospel of Matthew</h3>
              </div>
              <span className="text-2xl">⭐</span>
            </div>
            <p className="text-xs font-semibold text-stone-600">
              Focus: Joseph, the Lineage of David, the Wise Men, and Prophecy Fulfillment.
            </p>
            <ul className="text-xs space-y-2 text-stone-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Matthew 1:1–17:</strong> The royal genealogy from Abraham and King David.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Matthew 1:18–25:</strong> Joseph’s angelic dream and naming the child Jesus (Immanuel).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Matthew 2:1–12:</strong> The Star of Bethlehem and the Magi presenting gold, frankincense, and myrrh.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Matthew 2:13–23:</strong> The escape to Egypt to protect the young child from King Herod.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Tab: School Community */}
      {activeTab === 'school' && (
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
          <h2 className="text-xl font-black text-stone-900">
            About Our School Community Roles
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Our school platform blends academic discovery, creative student expression, and reverent biblical understanding.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 space-y-1.5">
              <div className="text-xs font-bold text-amber-900 uppercase">👑 Principal</div>
              <div className="font-extrabold text-base text-stone-900">Elijah Victor</div>
              <p className="text-xs text-stone-600">
                Directing the school assembly and providing educational vision.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 space-y-1.5">
              <div className="text-xs font-bold text-blue-900 uppercase">🛠️ Admin</div>
              <div className="font-extrabold text-base text-stone-900">Anum</div>
              <p className="text-xs text-stone-600">
                Coordinating administrative logistics, notices, and toy drives.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-200 space-y-1.5">
              <div className="text-xs font-bold text-emerald-900 uppercase">👩‍🏫 Teacher</div>
              <div className="font-extrabold text-base text-stone-900">Aroush</div>
              <p className="text-xs text-stone-600">
                Directing the Nativity play and teaching Christmas history.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/80 border border-purple-200 space-y-1.5">
              <div className="text-xs font-bold text-purple-900 uppercase">🎓 Student Leader</div>
              <div className="font-extrabold text-base text-stone-900">Arnan</div>
              <p className="text-xs text-stone-600">
                Choir lead singing Christmas carols and hymns.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/80 border border-indigo-200 space-y-1.5">
              <div className="text-xs font-bold text-indigo-900 uppercase">🎓 Student Leader</div>
              <div className="font-extrabold text-base text-stone-900">Balaj</div>
              <p className="text-xs text-stone-600">
                Pageant Wise Man and astronomy enthusiast.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/80 border border-rose-200 space-y-1.5">
              <div className="text-xs font-bold text-rose-900 uppercase">🎓 Student Leader</div>
              <div className="font-extrabold text-base text-stone-900">Eliab</div>
              <p className="text-xs text-stone-600">
                Artist who crafted the Nativity manger and Bethlehem backdrop.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
