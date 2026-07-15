/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CompanySection from './components/CompanySection';
import InteractiveTimeline from './components/InteractiveTimeline';
import SkillsShowcase from './components/SkillsShowcase';
import QAConsultant from './components/QAConsultant';
import ContactCTA from './components/ContactCTA';
import CVPreview from './components/CVPreview';

export default function App() {
  return (
    <LanguageProvider>
      {/* CV Preview — hanya muncul saat print */}
      <div className="hidden print:block">
        <CVPreview />
      </div>

      <div className="bg-[#0A0A0B] min-h-screen text-[#E5E7EB] font-sans selection:bg-blue-500/30 selection:text-white antialiased overflow-x-hidden no-print">
        {/* 1. Header Navigation */}
        <Header />

        {/* 2. Hero Presentation */}
        <Hero />

        {/* 3. Companies & Ventures Showrooms (VOXIA & INVEZTHINK with integrated AI & charting sandboxes) */}
        <CompanySection />

        {/* 4. Stateful Interactive Timeline Carrier history (hover-and-click state detail layout) */}
        <InteractiveTimeline />

        {/* 5. Matrix Skills & Categorized Competencies */}
        <SkillsShowcase />

        {/* 6. Virtual QA Consultant Bot chat experience */}
        <QAConsultant />

        {/* 7. Contact CTA & Escape-link WhatsApp Generator Footer */}
        <ContactCTA />
      </div>
    </LanguageProvider>
  );
}

