export type NavTab =
  | 'home'
  | 'christmas-answers'
  | 'bible'
  | 'information'
  | 'quiz'
  | 'notifications'
  | 'announcements'
  | 'help';

export interface SchoolStaffOrStudent {
  roleTitle: string;
  name: string;
  emoji: string;
  badgeColor: string;
  description: string;
  quote?: string;
  avatarSeed: string;
}

export interface BibleQuestionCategory {
  id: string;
  title: string;
  emoji: string;
  description: string;
  sampleQuestions: string[];
}

export interface BiblePassage {
  id: string;
  title: string;
  reference: string;
  testament: 'Old Testament Prophecy' | 'New Testament Gospel';
  theme: string;
  keyVerse: string;
  summary: string;
  biblicalTextExcerpt: string;
  historicalContext: string;
  reflectionForKids: string;
}

export interface BibleCharacter {
  name: string;
  title: string;
  emoji: string;
  roleInChristmas: string;
  scriptureReferences: string[];
  virtue: string;
  storySummary: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  scriptureReference: string;
  category: 'Bible' | 'Nativity' | 'Christmas Traditions';
}

export interface SchoolNotification {
  id: string;
  title: string;
  sender: string;
  senderRole: string;
  senderEmoji: string;
  timestamp: string;
  content: string;
  tag: 'Urgent' | 'Academic' | 'Festive' | 'Scripture';
  isRead: boolean;
}

export interface SchoolAnnouncement {
  id: string;
  title: string;
  date: string;
  author: string;
  authorRole: string;
  badge: string;
  preview: string;
  content: string;
  location?: string;
  importantDate?: string;
}
