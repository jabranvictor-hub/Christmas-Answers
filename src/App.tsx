import React, { useState } from 'react';
import { NavTab, SchoolNotification } from './types';
import { SCHOOL_NOTIFICATIONS } from './data/schoolAndBibleData';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { ChristmasAnswersSection } from './components/ChristmasAnswersSection';
import { BibleSection } from './components/BibleSection';
import { InformationSection } from './components/InformationSection';
import { QuizSection } from './components/QuizSection';
import { NotificationsSection } from './components/NotificationsSection';
import { AnnouncementsSection } from './components/AnnouncementsSection';
import { HelpSection } from './components/HelpSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [notifications, setNotifications] = useState<SchoolNotification[]>(SCHOOL_NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleToggleRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: !n.isRead } : n))
    );
  };

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col font-sans text-stone-900 selection:bg-amber-300 selection:text-red-950">
      {/* School Roles Top Ribbon */}
      <Header />

      {/* Main Navigation with requested tabs & special Bible highlight */}
      <Navigation
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        unreadCount={unreadCount}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && <HomeSection onNavigate={setCurrentTab} />}
        {currentTab === 'christmas-answers' && <ChristmasAnswersSection />}
        {currentTab === 'bible' && <BibleSection />}
        {currentTab === 'information' && <InformationSection />}
        {currentTab === 'quiz' && <QuizSection />}
        {currentTab === 'notifications' && (
          <NotificationsSection
            notifications={notifications}
            onToggleRead={handleToggleRead}
            onMarkAllRead={handleMarkAllRead}
          />
        )}
        {currentTab === 'announcements' && <AnnouncementsSection />}
        {currentTab === 'help' && <HelpSection />}
      </main>

      {/* Footer */}
      <Footer onNavigate={setCurrentTab} />
    </div>
  );
}
