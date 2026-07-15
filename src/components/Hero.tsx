import { motion } from 'motion/react';
import { ArrowDown, Linkedin, MessageSquare, ShieldCheck, Zap, Sparkles, Building2, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const [wibTime, setWibTime] = useState('');
  const { language, t } = useLanguage();

  useEffect(() => {
    const updateWibTime = () => {
      // WIB is UTC+7
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const wibOffset = 7;
      const wibDate = new Date(utc + (3600000 * wibOffset));
      
      const timeString = wibDate.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setWibTime(timeString);
    };

    updateWibTime();
    const interval = setInterval(updateWibTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const waMsgText = t(
    "Halo Pak Iwan Cahyo Suryadi, saya tertarik berkolaborasi tentang VOXIA/INVEZTHINK/MaxxSales dan implementasi AI...",
    "Hello Mr. Iwan Cahyo Suryadi, I am interested in collaborating on VOXIA/INVEZTHINK/MaxxSales and AI implementation..."
  );

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0B] pt-24 pb-16">
      {/* Background Decorative Glowing Orbs */}
      <div className="absolute top-[10%] left-[5%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-gradient-to-r from-blue-500/5 to-indigo-750/5 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Micro Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Active WIB Status Tag */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 font-mono mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>{t("AKTIF • Jakarta, Indonesia", "ACTIVE • Jakarta, Indonesia")}</span>
          <span className="text-gray-650">|</span>
          <span className="text-blue-500 font-semibold">{wibTime ? `${wibTime} WIB` : 'Loading...'}</span>
        </motion.div>

        {/* Display Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] max-w-5xl mx-auto"
        >
          {t("Menembus Batas Digital", "Transcending Digital Boundaries")} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-500 font-serif italic font-normal">
            {t("Kecerdasan Buatan Terpadu", "Unified Artificial Intelligence")}
          </span>
        </motion.h1>

        {/* Dynamic Name and Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans"
        >
          {language === 'ID' ? (
            <>
              Halo, saya <span className="text-white font-bold">Iwan Cahyo Suryadi</span>. Seorang inovator teknologi & pelopor AI Indonesia. Saya memimpin <span className="text-blue-500 font-semibold underline decoration-blue-500/40 underline-offset-4 font-serif">VOXIA</span> untuk transformasi digital institusi, mendirikan <span className="text-blue-400 font-semibold underline decoration-blue-400/40 underline-offset-4 font-serif">INVEZTHINK</span> untuk edukasi analitik pasar, dan meluncurkan <span className="text-emerald-400 font-semibold underline decoration-emerald-400/40 underline-offset-4 font-serif">MaxxSales</span> sebagai AI Growth OS bagi pengusaha Indonesia.
            </>
          ) : (
            <>
              Hello, I am <span className="text-white font-bold">Iwan Cahyo Suryadi</span>. A technology innovator & AI pioneer from Indonesia. I lead <span className="text-blue-500 font-semibold underline decoration-blue-500/40 underline-offset-4 font-serif">VOXIA</span> for institutional digital transformation, founded <span className="text-blue-400 font-semibold underline decoration-blue-400/40 underline-offset-4 font-serif">INVEZTHINK</span> for market analytics education, and launched <span className="text-emerald-400 font-semibold underline decoration-emerald-400/40 underline-offset-4 font-serif">MaxxSales</span> as an AI Growth OS for Indonesian entrepreneurs.
            </>
          )}
        </motion.p>

        {/* Highlight Stats Panels */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10"
        >
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5 text-left hover:border-blue-500/20 transition-colors duration-300">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">VOXIA AI</p>
              <p className="text-sm font-semibold text-white mt-0.5">{t("Solusi Terpadu Indonesia", "Unified Indonesian Solutions")}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5 text-left hover:border-blue-500/20 transition-colors duration-300">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-550">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">INVEZTHINK</p>
              <p className="text-sm font-semibold text-white mt-0.5">{t("Analisis Pasar Edukasi", "Educational Market Analysis")}</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/5 text-left hover:border-emerald-500/20 transition-colors duration-300">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">MaxxSales</p>
              <p className="text-sm font-semibold text-white mt-0.5">{t("AI Growth OS Rilis Juli 2026", "AI Growth OS Launched Jul 2026")}</p>
            </div>
          </div>
        </motion.div>

        {/* Primary Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <a
            href={`https://wa.me/6285183079558?text=${encodeURIComponent(waMsgText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-base font-bold shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 hover:translate-y-[-2px] group"
            id="hero-wa-btn"
          >
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform fill-current" />
            {t("Hubungi via WhatsApp", "Get in Touch via WhatsApp")}
          </a>

          <a
            href="https://www.linkedin.com/in/iwancahyo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 hover:bg-white/10 text-white hover:text-white border border-white/10 hover:border-blue-500/20 rounded-xl text-base font-bold transition-all duration-300 hover:translate-y-[-2px]"
            id="hero-linkedin-btn"
          >
            <Linkedin className="w-5 h-5 text-blue-500" />
            {t("Koneksi LinkedIn Profile", "Connect on LinkedIn")}
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-gray-500 hover:text-blue-500 cursor-pointer transition-colors"
          onClick={() => document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs font-mono tracking-widest uppercase text-gray-500">{t("Eksplorasi Perusahaan & Karir", "Explore Ventures & Career")}</span>
          <ArrowDown className="w-4 h-4 animate-bounce mt-1" />
        </motion.div>
      </div>
    </section>
  );
}
