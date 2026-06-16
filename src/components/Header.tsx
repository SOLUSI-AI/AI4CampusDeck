import { useState, useEffect } from 'react';
import { Linkedin, MessageSquare, Menu, X, ArrowUpRight, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waConfigUrl = "https://wa.me/6285183079558";

  const waText = t(
    "Halo Pak Iwan Cahyo Suryadi, saya tertarik berkolaborasi tentang teknologi/AI...",
    "Hello Mr. Iwan Cahyo Suryadi, I am interested in collaborating on technology/AI..."
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-[#1F2937] py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-black shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-serif font-bold text-lg text-white leading-none block tracking-tight">
                ICS
              </span>
              <span className="text-[10px] text-blue-500 font-mono tracking-wider block uppercase mt-0.5">
                CEO & TECH STRATEGIST
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-blue-500 font-medium text-sm transition-colors duration-200">
              {t("Tentang", "About")}
            </a>
            <a href="#ventures" className="text-gray-300 hover:text-blue-500 font-medium text-sm transition-colors duration-200">
              {t("Perusahaan", "Ventures")}
            </a>
            <a href="#experience" className="text-gray-300 hover:text-blue-500 font-medium text-sm transition-colors duration-200">
              {t("Karir & Pengalaman", "Experience")}
            </a>
            <a href="#skills" className="text-gray-300 hover:text-blue-500 font-medium text-sm transition-colors duration-200">
              {t("Keahlian", "Skills")}
            </a>
            <a href="#interactive-qa" className="text-gray-300 hover:text-blue-500 font-semibold text-sm transition-colors duration-200 flex items-center gap-1 text-blue-500">
              {t("Tanya AI", "Ask AI")}
            </a>
          </nav>

          {/* Social CTAs & Language Switcher */}
          <div className="hidden md:flex items-center gap-3">
            {/* Desktop Language Switcher Capsule */}
            <div className="flex items-center gap-1 bg-white/5 border border-[#1F2937] p-1 rounded-xl mr-1">
              <button
                onClick={() => setLanguage('ID')}
                className={`px-2 py-0.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  language === 'ID' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                id="header-lang-id"
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('EN')}
                className={`px-2 py-0.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  language === 'EN' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                id="header-lang-en"
              >
                EN
              </button>
            </div>

            <a
              href="https://www.linkedin.com/in/iwancahyo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-blue-500 border border-[#1F2937] transition-all duration-200"
              title="LinkedIn Profile"
              id="header-linkedin-btn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`${waConfigUrl}?text=${encodeURIComponent(waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-500/10 transition-all duration-300 hover:scale-[1.03]"
              id="header-wa-btn"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-[#1F2937] transition-colors"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0B] border-b border-[#1F2937] py-5 px-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-blue-500 py-2 text-base font-semibold border-b border-[#1F2937]/5"
          >
            {t("Tentang", "About")}
          </a>
          <a
            href="#ventures"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-blue-500 py-2 text-base font-semibold border-b border-[#1F2937]/5"
          >
            {t("Perusahaan", "Ventures")}
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-blue-500 py-2 text-base font-semibold border-b border-[#1F2937]/5"
          >
            {t("Karir & Pengalaman", "Experience")}
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-300 hover:text-blue-500 py-2 text-base font-semibold border-b border-[#1F2937]/5"
          >
            {t("Keahlian", "Skills")}
          </a>
          <a
            href="#interactive-qa"
            onClick={() => setMobileMenuOpen(false)}
            className="text-blue-500 hover:text-white py-2 text-base font-semibold border-b border-[#1F2937]/5"
          >
            {t("Tanya AI Pak Iwan", "Ask AI Mr. Iwan")}
          </a>

          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between border-t border-[#1F2937]/10 pt-3 mt-1">
            <span className="text-xs text-gray-400 font-medium font-sans">
              {t("Bahasa / Language", "Language / Bahasa")}
            </span>
            <div className="flex items-center gap-1 bg-white/5 border border-[#1F2937] p-0.5 rounded-xl">
              <button
                onClick={() => setLanguage('ID')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  language === 'ID' ? 'bg-blue-600 text-white' : 'text-gray-400'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLanguage('EN')}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  language === 'EN' ? 'bg-blue-600 text-white' : 'text-gray-400'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-2 pt-2 border-t border-[#1F2937]/10">
            <a
              href="https://www.linkedin.com/in/iwancahyo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 border border-[#1F2937] transition-all"
            >
              <Linkedin className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a
              href={`${waConfigUrl}?text=${encodeURIComponent(waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/10 text-sm font-bold transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
