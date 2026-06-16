import { useState } from 'react';
import { SKILLS } from '../data';
import { ShieldCheck, Cpu, Code2, LineChart, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SkillsShowcase() {
  const { language, t } = useLanguage();
  const [filter, setFilter] = useState<'ALL' | 'AI_ML' | 'Fintech' | 'Consulting' | 'Architecture'>('ALL');

  const categories = {
    ALL: t('Semua Keahlian', 'All Skills'),
    AI_ML: t('AI & Machine Learning', 'AI & Machine Learning'),
    Fintech: t('Fintech & Pasar Analisis', 'Fintech & Market Analysis'),
    Consulting: t('Kepemimpinan & Konsultasi', 'Leadership & Consulting'),
    Architecture: t('Arsitektur Sistem', 'System Architecture')
  };

  const filteredSkills = filter === 'ALL' 
    ? SKILLS 
    : SKILLS.filter(skill => {
        if (filter === 'Consulting') return skill.category === 'Consulting' || skill.category === 'E_Learning';
        return skill.category === filter;
      });

  return (
    <section id="skills" className="py-24 bg-[#0A0A0B] relative">
      <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            {t("Matriks Keahlian & Kompetensi", "Skills Matrix & Competencies")}
          </h2>
          <p className="mt-4 text-gray-400 font-sans text-base sm:text-lg">
            {t(
              "Kombinasi mendalam teknologi mutakhir, pemahaman pasar finansial yang ketat, dan arahan transformasi digital berskala komersial.",
              "A deep fusion of cutting-edge technology, rigorous financial market understanding, and commercial-scale digital transformation direction."
            )}
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {Object.entries(categories).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`px-4.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                filter === key 
                  ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/10 scale-[1.02]' 
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5 hover:bg-white/8'
              }`}
              id={`skill-filter-${key}`}
            >
              {value}
            </button>
          ))}
        </div>

        {/* Skills layout grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => {
            // Pick icon depending on category
            let IconElement = Cpu;
            let iconColorClass = 'text-blue-500 bg-blue-500/10';

            if (skill.category === 'Fintech') {
              IconElement = LineChart;
              iconColorClass = 'text-blue-400 bg-blue-500/10';
            } else if (skill.category === 'Consulting' || skill.category === 'E_Learning') {
              IconElement = Users;
              iconColorClass = 'text-blue-300 bg-blue-500/10';
            } else if (skill.category === 'Architecture') {
              IconElement = Code2;
              iconColorClass = 'text-blue-500 bg-blue-500/10';
            }

            return (
              <div 
                key={skill.name}
                className="p-5.5 rounded-xl bg-white/[0.02] border border-[#1F2937]/50 hover:border-blue-500/20 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${iconColorClass}`}>
                    <IconElement className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif font-bold text-sm sm:text-base text-gray-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </h4>
                </div>

                {/* Simulated skill progress meter bar */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-gray-500 uppercase">{t("PROFISIENSI", "PROFICIENCY")}</span>
                    <span className="text-gray-300 font-bold">{skill.level}%</span>
                  </div>
                  {/* Outer Bar */}
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    {/* Inner progress */}
                    <div 
                      className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-blue-500 to-blue-600"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
