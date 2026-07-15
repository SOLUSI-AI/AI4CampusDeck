import { useState } from 'react';
import { Mail, MessageSquare, ArrowUpRight, CheckCircle2, Send, Heart, Shield, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactCTA() {
  const { language, t } = useLanguage();
  const [name, setName] = useState('');
  const [intent, setIntent] = useState('voxia_consulting');
  const [customText, setCustomText] = useState('');
  
  // Base setup
  const targetEmail = "ics@voxia.id";
  const linkedInUrl = "https://www.linkedin.com/in/iwancahyo";

  // Build reactive WhatsApp URL based on state
  const getWhatsAppUrl = () => {
    let template = '';
    
    if (intent === 'voxia_consulting') {
      template = language === 'ID'
        ? `Halo Pak Iwan Cahyo, saya ${name || '[Nama Anda]'}. Saya tertarik berkonsultasi mengenai Implementasi AI Terpadu (VOXIA) untuk transformasi digital perusahaan kami.`
        : `Hello Mr. Iwan Cahyo, I am ${name || '[Your Name]'}. I am interested in consulting about Integrated AI Implementation (VOXIA) for our corporate digital transformation.`;
    } else if (intent === 'invezthink_educational') {
      template = language === 'ID'
        ? `Halo Pak Iwan Cahyo, saya ${name || '[Nama Anda]'}. Saya tertarik mempelajari platform analisis pasar finansial berbasis kecerdasan buatan di INVEZTHINK (app.invezthink.com).`
        : `Hello Mr. Iwan Cahyo, I am ${name || '[Your Name]'}. I am interested in learning about the AI-powered financial market analytics platform at INVEZTHINK (app.invezthink.com).`;
    } else if (intent === 'maxxsales_growth') {
      template = language === 'ID'
        ? `Halo Pak Iwan Cahyo, saya ${name || '[Nama Anda]'}. Saya tertarik menggunakan MaxxSales sebagai AI Growth OS untuk mengembangkan bisnis saya dengan daily tactical briefing dan AI content generation.`
        : `Hello Mr. Iwan Cahyo, I am ${name || '[Your Name]'}. I am interested in using MaxxSales as an AI Growth OS to scale my business with daily tactical briefing and AI content generation.`;
    } else {
      template = language === 'ID'
        ? `Halo Pak Iwan Cahyo, saya ${name || '[Nama Anda]'}. Saya ingin berdiskusi terkait kolaborasi bisnis, pembicara seminar teknologi, atau partnership lainnya.`
        : `Hello Mr. Iwan Cahyo, I am ${name || '[Your Name]'}. I would like to discuss business collaboration, speaking engagements, or other partnerships.`;
    }

    if (customText) {
      template += language === 'ID' 
        ? ` Catatan tambahan: ${customText}` 
        : ` Additional notes: ${customText}`;
    }

    return `https://wa.me/6285183079558?text=${encodeURIComponent(template)}`;
  };

  return (
    <footer id="contact" className="bg-[#0A0A0B] border-t border-[#1F2937]/50 pt-24 pb-12 relative overflow-hidden text-left">
      {/* Glow decorative element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Section Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16">
          
          {/* Left Block: Text Info & Direct links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
              {t("KOLABORASI SEGERA", "COLLABORATE NOW")}
            </span>
            
            <h2 className="font-serif font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              {t("Mari Bangun Masa Depan AI Bersama", "Let's Build the Future of AI Together")}
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {t(
                "Siap mengotomatisasi pilar bisnis Anda menggunakan VOXIA Solusi AI Terpadu, ingin menguasai taktis analisis pergerakan pasar modern lewat INVEZTHINK, atau mencoba MaxxSales sebagai AI Growth OS? Hubungi saya kapan saja. Sesi kolaborasi eksekutif dan kemitraan selalu terbuka.",
                "Ready to automate your business pillars using VOXIA Integrated AI Solutions, master modern market trend analysis with INVEZTHINK, or try MaxxSales as your AI Growth OS? Reach out anytime. Executive collaborations and strategic partnerships are always open."
              )}
            </p>

            {/* Direct Quick Info Contacts */}
            <div className="space-y-4 pt-4">
              <a 
                href={`mailto:${targetEmail}`}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-[#1F2937]/60 hover:border-blue-500/20 transition-all group"
              >
                <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">{t("EMAIL RESMI", "OFFICIAL EMAIL")}</p>
                  <p className="text-sm font-semibold text-white mt-0.5">{targetEmail}</p>
                </div>
              </a>

              <a 
                href={linkedInUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.02] border border-[#1F2937]/60 hover:border-blue-500/20 transition-all group"
              >
                <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg group-hover:scale-105 transition-transform">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">{t("LINKEDIN RESMI", "OFFICIAL LINKEDIN")}</p>
                  <p className="text-sm font-semibold text-white mt-0.5 font-serif font-bold">linkedin.com/in/iwancahyo</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Block: Dynamic Form-Based WhatsApp Link Generator (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#161619] to-[#0E0E10] border border-[#1F2937]/50 shadow-2xl relative">
              <h3 className="font-serif font-bold text-lg sm:text-xl text-white mb-6 text-left">
                {t("Kirim Pesan Instan Menarik ke WhatsApp", "Send an Instant Message Draft to WhatsApp")}
              </h3>
              
              <div className="space-y-4">
                
                {/* Name Input */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2 text-left">{t("Nama atau Institusi Anda:", "Your Name or Institution:")}</label>
                  <input
                    type="text"
                    placeholder={t("Contoh: Budi Santoso (PT Inovasi Maju)", "E.g., John Doe (ABC Corp)")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B]/80 text-sm text-gray-100 placeholder:text-gray-500 border border-[#1F2937] hover:border-[#374151] focus:border-blue-500 focus:outline-none transition-all font-sans"
                    id="contact-name-input"
                  />
                </div>

                {/* Intent Type Selector */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2 text-left">{t("Tujuan Hubungan:", "Inquiry Purpose:")}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setIntent('voxia_consulting')}
                      className={`p-3 text-left rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        intent === 'voxia_consulting'
                          ? 'bg-blue-500/10 text-blue-300 border-blue-500/60'
                          : 'bg-white/2 text-gray-400 border-white/5 hover:bg-white/5'
                      }`}
                      id="intent-voxia-btn"
                    >
                      {t("Konsultasi AI Terpadu (VOXIA)", "Integrated AI Consultation (VOXIA)")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIntent('invezthink_educational')}
                      className={`p-3 text-left rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        intent === 'invezthink_educational'
                          ? 'bg-blue-500/10 text-blue-300 border-blue-500/60'
                          : 'bg-white/2 text-gray-400 border-white/5 hover:bg-white/5'
                      }`}
                      id="intent-invezthink-btn"
                    >
                      {t("Edukasi Analitik (INVEZTHINK)", "Analytical Education (INVEZTHINK)")}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIntent('maxxsales_growth')}
                      className={`p-3 text-left rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                        intent === 'maxxsales_growth'
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/60'
                          : 'bg-white/2 text-gray-400 border-white/5 hover:bg-white/5'
                      }`}
                      id="intent-maxxsales-btn"
                    >
                      {t("AI Growth OS (MaxxSales)", "AI Growth OS (MaxxSales)")}
                    </button>
                  </div>
                </div>

                {/* Custom Note Area */}
                <div>
                  <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2 text-left">{t("Pesan Kustom Pengiring (Opsional):", "Custom Message Note (Optional):")}</label>
                  <textarea
                    rows={3}
                    placeholder={t("Ceritakan singkat ide atau kebutuhan Anda...", "Briefly share your idea or operational needs...")}
                    value={customText}
                    onChange={(e) => setCustomText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B]/80 text-sm text-gray-100 placeholder:text-gray-500 border border-[#1F2937] hover:border-[#374151] focus:border-blue-500 focus:outline-none transition-all font-sans resize-none"
                    id="contact-note-textarea"
                  />
                </div>

                {/* Highly attractive Send CTA button */}
                <div className="pt-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold rounded-xl shadow-xl hover:shadow-blue-500/10 active:scale-95 transition-all text-center group font-sans"
                    id="submit-wa-btn"
                  >
                    <MessageSquare className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                    {t("Buka WhatsApp & Kirim Draf", "Open WhatsApp & Send Draft")}
                  </a>
                  
                  <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-500 mt-3 font-mono text-center">
                    <Shield className="w-3 h-3 text-blue-500" />
                    <span>{t("Draf pesan langsung dienkripsi oleh pengolah eksternal WhatsApp. Aman dan Instan.", "The message draft is processed with WhatsApp secure end-to-end encryption. Safe & instant.")}</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400 text-center sm:text-left">
          <div>
            <p>{language === 'ID' ? `© ${new Date().getFullYear()} Iwan Cahyo Suryadi. Hak Cipta Dilindungi Undang-Undang.` : `© ${new Date().getFullYear()} Iwan Cahyo Suryadi. All Rights Reserved.`}</p>
            <p className="text-[10px] text-gray-500 mt-1">{t("Platform Inovasi Digital AI terintegrasi Indonesia.", "Integrated AI and Digital Innovation Platform in Indonesia.")}</p>
          </div>
          
          <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
            <span>{t("Dibuat dengan dedikasi transformasi digital", "Built with digital transformation dedication")}</span>
            <Heart className="w-3 h-3 text-red-500 fill-current animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
}
