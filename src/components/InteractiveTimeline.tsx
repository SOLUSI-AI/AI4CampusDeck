import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCES_ID, EXPERIENCES_EN } from '../data';
import { Briefcase, Calendar, MapPin, Sparkles, Code2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function InteractiveTimeline() {
  const { language, t } = useLanguage();
  const EXPERIENCES = language === 'ID' ? EXPERIENCES_ID : EXPERIENCES_EN;

  const [activeId, setActiveId] = useState<string>('exp-voxia');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const selectedExp = EXPERIENCES.find(exp => exp.id === activeId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 bg-[#0A0A0B] relative overflow-hidden text-left">
      {/* Background Orbs */}
      <div className="absolute top-[30%] left-[-15%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            {t("RIWAYAT PERJALANAN KARIR", "CAREER MILESTONES")}
          </span>
          <h2 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-tight mt-4">
            {t("Pengalaman Kerja Interaktif", "Interactive Work Experience")}
          </h2>
          <p className="mt-4 text-gray-400 font-sans text-base sm:text-lg">
            {t(
              "Arahkan kursor (hover) atau klik pada milestones di sebelah kiri untuk menelusuri pencapaian taktis, tugas utama, serta tumpukan teknologi (tech stack).",
              "Hover or click on the milestones on the left to explore tactical accomplishments, core responsibilities, and associated technology stacks."
            )}
          </p>
        </div>

        {/* Interactive Timeline Layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Block: Milestones Navigator (4 cols on lg screens) */}
          <div className="lg:col-span-4 space-y-4">
            <p className="text-xs font-mono uppercase text-gray-500 ml-1 tracking-wider">
              {t("PILIH KARIR YANG INGIN DITELUSURI:", "SELECT A ROADMAP TO EXPLORE:")}
            </p>
            <div className="space-y-3">
              {EXPERIENCES.map((exp) => {
                const isActive = exp.id === activeId;
                const isHovered = exp.id === hoveredId;

                return (
                  <div
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    onMouseEnter={() => setHoveredId(exp.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`p-4 sm:p-5 rounded-xl cursor-pointer text-left border transition-all duration-300 relative ${
                      isActive 
                        ? 'bg-gradient-to-r from-blue-500/10 to-transparent border-blue-500/60 shadow-lg shadow-blue-500/5' 
                        : isHovered 
                        ? 'bg-white/5 border-white/20' 
                        : 'bg-white/2 border-white/5'
                    }`}
                    id={`timeline-card-${exp.id}`}
                  >
                    {/* Floating Vertical selection indicator strip */}
                    <div className={`absolute top-0 bottom-0 left-0 w-[3px] rounded-r-md transition-all duration-300 ${
                      isActive ? 'bg-blue-500 scale-y-100' : 'bg-transparent scale-y-0'
                    }`} />

                    <div className="flex items-start gap-3.5 pl-2">
                       <div className={`p-2.5 rounded-lg border transition-all ${
                        isActive 
                          ? 'bg-blue-500/20 border-blue-500/45 text-blue-400' 
                          : 'bg-white/5 border-white/10 text-gray-400'
                      }`}>
                        <Briefcase className="w-5 h-5" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className={`font-serif font-bold text-base tracking-tight truncate ${
                          isActive ? 'text-white' : 'text-gray-300'
                        }`}>
                          {exp.company}
                        </h4>
                        <p className="text-xs text-blue-400 font-medium truncate mt-0.5">
                          {exp.role}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-2 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-gray-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Small hover indicator arrow */}
                      <div className={`self-center text-gray-500 transition-transform ${
                        isActive ? 'translate-x-1 text-blue-400' : 'opacity-0'
                      }`}>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Block: Dynamic Detail Card Panel (8 cols on lg screens, animated with motion) */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="glassmorphism p-6 sm:p-8 rounded-2xl border border-blue-500/20 relative"
              >
                {/* Visual badge highlight */}
                <div className="absolute top-4 right-4 text-xs font-mono text-gray-600 bg-white/5 px-3 py-1 rounded-full border border-white/5 hidden sm:inline-flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> ID: {selectedExp.id}
                </div>

                {/* Card Title & Meta Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest text-blue-400 uppercase font-bold">
                      {selectedExp.period}
                    </span>
                    <h3 className="font-serif font-black text-2xl sm:text-3xl text-white tracking-tight mt-1">
                      {selectedExp.role}
                    </h3>
                    <p className="text-gray-300 font-semibold text-lg mt-0.5 flex items-center gap-2">
                      <span className="hover:text-blue-400 transition-colors font-serif font-semibold">{selectedExp.company}</span>
                      {selectedExp.websiteUrl && (
                        <a 
                          href={selectedExp.websiteUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex text-xs text-blue-400 hover:underline"
                        >
                          {t("Kunjungi Website →", "Visit Website →")}
                        </a>
                      )}
                    </p>
                  </div>
                </div>

                {/* Meta Location */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-mono mt-4">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  <span>{selectedExp.location}</span>
                </div>

                {/* Subtitle description paragraph */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4 font-sans bg-white/5 p-4 rounded-xl border border-white/5 italic">
                  "{selectedExp.description}"
                </p>

                {/* Interactive Wins Bullet Points */}
                <div className="mt-6 space-y-4">
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" /> {t("Pencapaian & Tanggung Jawab Utama:", "Key Achievements & Responsibilities:")}
                  </p>
                  <ul className="space-y-3">
                    {selectedExp.bullets.map((bullet, idx) => (
                      <motion.li 
                        key={idx} 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed font-sans group/bullet"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 group-hover/bullet:scale-125 transition-transform" />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Embedded Technologies Stack Icons/Pills */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-blue-500" /> {t("Tumpukan Teknologi Terkait:", "Associated Technology Stack:")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-lg bg-white/5 text-gray-300 border border-white/10 text-xs font-mono transition-colors duration-200 hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
