import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { VENTURES_ID, VENTURES_EN, MOCK_MARKET_DATA } from '../data';
import { ExternalLink, Terminal, TrendingUp, Cpu, Sparkles, BookOpen, AlertTriangle, ShieldCheck, Play, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CompanySection() {
  const { language, t } = useLanguage();
  const VENTURES = language === 'ID' ? VENTURES_ID : VENTURES_EN;

  // VOXIA AI Simulator states
  const [voxiaOption, setVoxiaOption] = useState<'pdf' | 'chatbot' | 'vision'>('pdf');
  const [voxiaLogs, setVoxiaLogs] = useState<string[]>([]);
  const [isVoxiaRunning, setIsVoxiaRunning] = useState(false);

  // INVEZTHINK simulator states
  const [volatility, setVolatility] = useState<number>(50);
  const [candlesticks, setCandlesticks] = useState<{ open: number; close: number; high: number; low: number; signal: 'BUY' | 'SELL' | 'HOLD' }[]>([]);

  // Initialize VOXIA default logger
  useEffect(() => {
    resetVoxiaLogs();
  }, [voxiaOption, language]);

  const resetVoxiaLogs = () => {
    if (voxiaOption === 'pdf') {
      setVoxiaLogs(
        language === 'ID'
          ? [
              'ready > Klik "Jalankan Simulasi AI" untuk memulai engine VOXIA.',
              'info  > Modul: OCR-DeepEngine bersertifikasi kedaulatan data lokal.',
              'info  > Target: Pemrosesan Data Otomatis & Ekstraksi Tagihan.'
            ]
          : [
              'ready > Click "Run AI Simulation" to boot VOXIA engine.',
              'info  > Module: Secure local sovereignty corporate OCR-DeepEngine.',
              'info  > Target: Automated Data Processing & Invoice Extraction.'
            ]
      );
    } else if (voxiaOption === 'chatbot') {
      setVoxiaLogs(
        language === 'ID'
          ? [
              'ready > Klik "Jalankan Simulasi AI" untuk memulai asisten chat.',
              'info  > Modul: IndoLLM-7B Fine-Tuned NLP v3.2.',
              'info  > Target: Menjawab FAQ & Manajemen Keluhan Otomatis.'
            ]
          : [
              'ready > Click "Run AI Simulation" to launch chat assistant.',
              'info  > Module: IndoLLM-7B Fine-Tuned NLP v3.2.',
              'info  > Target: FAQ Answers & Automated Complaint Management.'
            ]
      );
    } else {
      setVoxiaLogs(
        language === 'ID'
          ? [
              'ready > Klik "Jalankan Simulasi AI" untuk memulai sistem kamera kustom.',
              'info  > Modul: EdgeVision Anomaly Detection.',
              'info  > Target: Deteksi Cacat Produksi Real-Time pada Ban Berjalan.'
            ]
          : [
              'ready > Click "Run AI Simulation" to launch custom camera system.',
              'info  > Module: EdgeVision Anomaly Detection.',
              'info  > Target: Real-Time Conveyor Belt Defect Detection.'
            ]
      );
    }
  };

  const runVoxiaSimulation = () => {
    if (isVoxiaRunning) return;
    setIsVoxiaRunning(true);
    setVoxiaLogs([
      language === 'ID' 
        ? 'initiating > Menghubungkan ke core cluster VOXIA AI...' 
        : 'initiating > Connecting to VOXIA AI core cluster...'
    ]);

    const steps = voxiaOption === 'pdf' 
      ? language === 'ID'
        ? [
            'process    > Memuat file PDF Dokumen Tagihan (size: 4.8MB)... Done.',
            'analyze    > Memulai OCR Segmentasi & Ekstraksi Entitas Multibahasa...',
            'engine     > Mengidentifikasi Nama Vendor, No. Pokok Wajib Pajak, & Total IDR...',
            'predict    > Deteksi anomali fraud: Aman (99.8% keaslian dokumen).',
            'success    > Berhasil memetakan data! Waktu pemrosesan dipangkas dari 30 menit ke 120ms.'
          ]
        : [
            'process    > Loading Invoice PDF document (size: 4.8MB)... Done.',
            'analyze    > Starting OCR segmentation & multilingual entity extraction...',
            'engine     > Identifying Vendor Name, Tax ID, & Total Balance...',
            'predict    > Fraud anomaly detection: Clean (99.8% raw authenticity).',
            'success    > Data mapped successfully! Processing cut from 30 minutes to 120ms.'
          ]
      : voxiaOption === 'chatbot'
      ? language === 'ID'
        ? [
            'process    > Memverifikasi database pengetahuan FAQ bahasa Indonesia...',
            'simulate   > Menerima keluhan: "Bagaimana cara refund jika server maintenance?"',
            'nlp        > Memahami maksud ("refund") & emosi sentiment: Netral-Frustrasi.',
            'generate   > Menyusun draf respon sopan berbasis regulasi Perusahaan...',
            'success    > Balasan otomatis terkirim. Tingkat kepuasan interaksi diprediksi naik 92%.'
          ]
        : [
            'process    > Verification of FAQ localized database completed...',
            'simulate   > Intake complaint: "How can I request a refund during maintenance?"',
            'nlp        > Decoded intent ("refund") & user sentiment: Neutral-Frustrated.',
            'generate   > Drafted polite auto-response based on company SLA rules...',
            'success    > Auto-reply sent. Predicted interaction satisfaction increased to 92%.'
          ]
      : language === 'ID'
      ? [
          'process    > Mereferensi frame CCTV lini perakitan pabrik 10fps...',
          'vision     > Menganalisis geometri visual permukaan produk berkendara...',
          'detect     > Menemukan goresan tipis 1.2 milimeter di luar toleransi tolerir.',
          'alert      > Mengaktifkan katup pneumatik otonom pembuangan cacat...',
          'success    > Frame diarsipkan. Laporan efisiensi keselamatan kerja siap diekspor!'
        ]
      : [
          'process    > Referencing CCTV frame on assembly line at 10fps...',
          'vision     > Analyzing physical surface geometry of the production layer...',
          'detect     > Spotted subtle scratch of 1.2mm exceeding quality limits.',
          'alert      > Dispatching pneumatic valves to autonomously reject defiled item...',
          'success    > Frames archived. Safety efficiency reports compile ready!'
        ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setVoxiaLogs(prev => [...prev, steps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsVoxiaRunning(false);
      }
    }, 700);
  };

  // Generate Candlesticks for INVEZTHINK based on volatility slider
  useEffect(() => {
    const generateCandles = () => {
      const baseCandles: { open: number; close: number; high: number; low: number; signal: 'BUY' | 'SELL' | 'HOLD' }[] = [];
      let lastClose = 100;
      
      const multiplier = volatility / 50; // Normalize

      for (let i = 0; i < 7; i++) {
        const change = (Math.random() - 0.48) * 15 * multiplier;
        const open = lastClose;
        const close = Math.round(open + change);
        const high = Math.round(Math.max(open, close) + Math.random() * 5 * multiplier);
        const low = Math.round(Math.min(open, close) - Math.random() * 5 * multiplier);
        
        let signal: 'BUY' | 'SELL' | 'HOLD' = 'HOLD';
        const ratio = (close - open) / open;
        if (ratio > 0.04) signal = 'BUY';
        else if (ratio < -0.04) signal = 'SELL';

        baseCandles.push({ open, close, high, low, signal });
        lastClose = close;
      }
      setCandlesticks(baseCandles);
    };

    generateCandles();
  }, [volatility]);

  return (
    <section id="ventures" className="py-24 bg-[#0A0A0B] relative">
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[25%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            {t("Kepemimpinan Strategis & Perusahaan", "Strategic Leadership & Ventures")}
          </h2>
          <p className="mt-4 text-gray-400 font-sans text-base sm:text-lg">
            {t(
              "Menakhodai korporasi pelopor transformasi Indonesia di bidang kecerdasan buatan terapan serta platform literasi finansial analitis.",
              "Steering pioneering Indonesian corporations in applied artificial intelligence and analytical financial literacy platforms."
            )}
          </p>
        </div>

        {/* Outer Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* VOXIA Solusi AI Terpadu Card (CEO & Founder) */}
          <div className="glassmorphism p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group border border-[#1F2937]/50">
            {/* Branding Top */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-mono text-[10px] tracking-widest font-bold uppercase border border-blue-500/20">
                  LEADER & CEO
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-4 flex items-center justify-between">
                <span>VOXIA</span>
                <a 
                  href="https://voxia.id/" 
                  target="_blank" 
                  rel="noopener" 
                  className="p-1 px-3 text-xs flex items-center gap-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 transition-all font-sans"
                  id="voxia-link-btn"
                >
                  voxia.id <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </h3>
              
              <p className="text-sm font-medium text-blue-500 italic font-mono mt-1">
                {t("Solusi AI Terpadu untuk Transformasi Digital Indonesia", "Integrated AI Solutions for Indonesia's Digital Transformation")}
              </p>

              <p className="text-gray-300 font-sans text-[14px] sm:text-base leading-relaxed mt-4">
                {t(
                  "Penyedia platform kecerdasan buatan terpadu berskala komersial yang dirancang khusus untuk memenuhi standar digitalisasi industri Indonesia. Mengintegrasikan kemitraan aman antar instansi dengan otomatisasi otonom berbasis data terlokalisasi.",
                  "A provider of a commercial-scale integrated artificial intelligence platform specifically designed to meet Indonesian industrial digitization standards. Integrating secure cross-agency partnerships with autonomous automation based on localized data."
                )}
              </p>

              {/* Core Features */}
              <div className="mt-6 space-y-2.5">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">{t("Unggulan Transformasi:", "Focus Areas:")}</p>
                {VENTURES[0].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-blue-500 font-bold mt-1 select-none">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE COMPONENT: VOXIA AI ENGINE SIMULATOR */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="bg-[#0b0c0e] rounded-xl border border-white/5 overflow-hidden">
                {/* Simulator Header */}
                <div className="bg-[#050608] px-4 py-2 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-mono text-gray-300 font-semibold uppercase">VOXIA AI Engine - Sandbox</span>
                  </div>
                  {/* Status lights */}
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500/80 animate-pulse" />
                  </div>
                </div>

                {/* Option selector tabs */}
                <div className="grid grid-cols-3 border-b border-white/5 text-center text-xs">
                  <button 
                    onClick={() => !isVoxiaRunning && setVoxiaOption('pdf')}
                    className={`py-2 px-1 font-mono transition-colors cursor-pointer ${voxiaOption === 'pdf' ? 'bg-blue-500/10 text-white font-bold border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-300'}`}
                    disabled={isVoxiaRunning}
                  >
                    OCR PDF
                  </button>
                  <button 
                    onClick={() => !isVoxiaRunning && setVoxiaOption('chatbot')}
                    className={`py-2 px-1 font-mono transition-colors cursor-pointer ${voxiaOption === 'chatbot' ? 'bg-blue-500/10 text-white font-bold border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-300'}`}
                    disabled={isVoxiaRunning}
                  >
                    {t("Asisten Chat", "Chat Assistant")}
                  </button>
                  <button 
                    onClick={() => !isVoxiaRunning && setVoxiaOption('vision')}
                    className={`py-2 px-1 font-mono transition-colors cursor-pointer ${voxiaOption === 'vision' ? 'bg-blue-500/10 text-white font-bold border-b-2 border-blue-500' : 'text-gray-500 hover:text-gray-300'}`}
                    disabled={isVoxiaRunning}
                  >
                    Edge Vision
                  </button>
                </div>

                {/* Terminal screen text output */}
                <div className="p-4 font-mono text-xs text-slate-300 h-44 overflow-y-auto space-y-1 bg-[#020304]">
                  {voxiaLogs.map((log, lIdx) => (
                    <div key={lIdx} className="leading-relaxed text-left">
                      {log.startsWith('success') && <span className="text-blue-400">✅ </span>}
                      {log.startsWith('ready') && <span className="text-blue-400">💡 </span>}
                      {log.startsWith('process') && <span className="text-blue-500 font-semibold">⚡ </span>}
                      {log.startsWith('analyze') && <span className="text-blue-300">🔍 </span>}
                      <span className={log.includes('>') ? 'text-gray-400' : 'text-slate-200'}>{log}</span>
                    </div>
                  ))}
                </div>

                {/* Action button bar */}
                <div className="p-3 bg-[#050608] flex items-center justify-between border-t border-white/5">
                  <span className="text-[10px] text-gray-500 font-mono">{t("Simulasi Sisi-Klien v2.4", "Client-Side Simulation v2.4")}</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={resetVoxiaLogs}
                      disabled={isVoxiaRunning}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 border border-[#1F2937] hover:text-white transition-colors"
                      title="Reset terminal"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={runVoxiaSimulation}
                      disabled={isVoxiaRunning}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-mono text-xs font-semibold shadow-lg shadow-blue-500/10 transition-all cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      {isVoxiaRunning ? t("Memproses...", "Processing...") : t("Jalankan Simulasi AI", "Run AI Simulation")}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* INVEZTHINK Platform Card (Founder) */}
          <div className="glassmorphism p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden group border border-[#1F2937]/50">
            {/* Branding Top */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-mono text-[10px] tracking-widest font-bold uppercase border border-blue-500/20">
                  FOUNDER & ARCHITECT
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-4 flex items-center justify-between">
                <span>INVEZTHINK</span>
                <a 
                  href="https://app.invezthink.com/en/" 
                  target="_blank" 
                  rel="noopener" 
                  className="p-1 px-3 text-xs flex items-center gap-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 transition-all font-sans"
                  id="invezthink-link-btn"
                >
                  app.invezthink.com <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </h3>
              
              <p className="text-sm font-medium text-blue-500 italic font-mono mt-1">
                AI-Powered Market Analysis Tools for Learning
              </p>

              <p className="text-gray-300 font-sans text-[14px] sm:text-base leading-relaxed mt-4">
                {t(
                  "Platform edukasi khusus yang didesain untuk mentransfer kecakapan kuantitatif analisis grafik data finansial. Melatih peserta didik menyaring distorsi psikologis pasar global demi mewujudkan visual keputusan strategis modern.",
                  "A dedicated educational platform designed to transfer quantitative financial charting analytics proficiency. Training learners to filter global market emotional biases to realize modern visual strategic decisions."
                )}
              </p>

              {/* Core Features */}
              <div className="mt-6 space-y-2.5">
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">{t("Fitur Kurikulum & Alat:", "Curriculum & Features:")}</p>
                {VENTURES[1].features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-blue-500 font-bold mt-1 select-none">•</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* INTERACTIVE COMPONENT: INVEZTHINK SIMULATOR CHART */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="bg-[#0b0c0e] rounded-xl border border-white/5 p-4 relative">
                {/* Disclaimer Alert Pill inside interactive element to explicitly respect user statement */}
                <div className="flex items-start gap-2 p-2 bg-blue-500/5 border border-blue-500/10 rounded-lg mb-4 text-[11px] text-blue-300 leading-normal text-left">
                  <AlertTriangle className="w-4 h-4 shrink-0 text-blue-400" />
                  <div>
                    <span className="font-bold">{t("📚 DISCLAIMER AKADEMIS:", "📚 ACADEMIC DISCLAIMER:")}</span> {t(
                      "Platform edukasi & simulator pembelajaran. Khusus simulasi teori, sama sekali bukan merupakan saran / anjuran keuangan finansial (Not Financial Advice).",
                      "Educational platform & learning simulator. For theoretical simulation only, this does NOT constitute professional financial or investment advice."
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center mb-3 text-xs font-mono">
                  <span className="text-blue-500 font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-500" /> INVEZTHINK AI-Core Plot
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-[10px]">{t("Atur Volatilitas:", "Set Volatility:")}</span>
                    <input 
                      type="range" 
                      min="10" 
                      max="100" 
                      value={volatility} 
                      onChange={(e) => setVolatility(Number(e.target.value))}
                      className="w-20 accent-blue-500 h-1 rounded cursor-pointer"
                    />
                  </div>
                </div>

                {/* Candlestick Visualization Stage */}
                <div className="h-28 bg-[#020304] border border-white/5 rounded-lg flex items-end justify-around py-3">
                  {candlesticks.map((candle, idx) => {
                    const isGreen = candle.close >= candle.open;
                    const maxDiff = 120;
                    const openPos = (candle.open / maxDiff) * 80;
                    const closePos = (candle.close / maxDiff) * 85;
                    const highPos = (candle.high / maxDiff) * 90;
                    const lowPos = (candle.low / maxDiff) * 75;

                    const bodyTop = Math.max(openPos, closePos);
                    const bodyHeight = Math.max(2, Math.abs(openPos - closePos));

                    return (
                      <div key={idx} className="flex flex-col items-center w-8 group relative cursor-help">
                        {/* High/Low wick line */}
                        <div 
                          className={`absolute w-0.5 ${isGreen ? 'bg-emerald-500' : 'bg-red-500'}`}
                          style={{ 
                            bottom: `${lowPos}%`, 
                            top: `${100 - highPos}%` 
                          }}
                        />
                        {/* Candle Body */}
                        <div 
                          className={`w-3.5 rounded-sm relative z-10 transition-all ${isGreen ? 'bg-emerald-500' : 'bg-red-500'}`}
                          style={{ 
                            bottom: `${Math.min(openPos, closePos)}%`, 
                            height: `${bodyHeight}%` 
                          }}
                        />

                        {/* Interactive Tooltip showing details simulating market indicators */}
                        <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-1 bg-black border border-blue-500/20 text-[9px] text-gray-200 p-1.5 rounded font-mono pointer-events-none z-50 w-24">
                          <p className="font-bold border-b border-[#1F2937] pb-0.5 mb-1 text-center text-white">{t("LILIN", "CANDLE")} #{idx+1}</p>
                          <p>{t("Buka", "Open")}: Rp{candle.open * 150}</p>
                          <p>{t("Tutup", "Close")}: Rp{candle.close * 150}</p>
                          <p className={isGreen ? 'text-emerald-400' : 'text-red-400'}>
                            {isGreen ? t("HIJAU (+)", "GREEN (+)") : t("MERAH (-)", "RED (-)")}
                          </p>
                        </div>

                        {/* Display Signal Underneath */}
                        <div className="text-[9px] font-mono mt-1 pt-1 border-t border-white/5 w-full text-center">
                          {candle.signal !== 'HOLD' ? (
                            <span className={`px-1 py-0.2 rounded font-extrabold ${candle.signal === 'BUY' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                              {candle.signal}
                            </span>
                          ) : (
                            <span className="text-gray-500">HOLD</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Legend Indicator summary */}
                <p className="text-[10px] text-gray-400 font-mono text-center mt-2">
                  {t(
                    "Menggerakkan slider meregenerasi skenario algoritme pola AI.",
                    "Moving the slider regenerates the AI pattern algorithm scenarios."
                  )}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
