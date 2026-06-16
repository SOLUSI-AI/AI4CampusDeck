export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  techStack: string[];
  logoType: 'voxia' | 'invezthink' | 'generic' | 'consultancy';
  websiteUrl?: string;
}

export interface Venture {
  name: string;
  headline: string;
  url: string;
  role: string;
  description: string;
  features: string[];
  analyticsType?: 'ai-chat' | 'trading-view';
}

export interface SkillItem {
  name: string;
  level: number; // percentage, e.g., 95
  category: 'AI_ML' | 'Fintech' | 'Consulting' | 'Architecture' | 'E_Learning';
}

export interface QAItem {
  question: string;
  answer: string;
  category: 'about' | 'voxia' | 'invezthink' | 'collaboration';
}

export interface MarketSignal {
  time: string;
  price: number;
  aiPrediction: 'BUY' | 'SELL' | 'HOLD';
  confidence: number;
}
