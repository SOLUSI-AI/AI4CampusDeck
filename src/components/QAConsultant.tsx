import React, { useState, useEffect, useRef } from 'react';
import { QA_ITEMS_ID, QA_ITEMS_EN } from '../data';
import { Cpu, Send, Sparkles, MessageSquareCode, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
}

export default function QAConsultant() {
  const { language, t } = useLanguage();
  const QA_ITEMS = language === 'ID' ? QA_ITEMS_ID : QA_ITEMS_EN;

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message whenever language changes
  useEffect(() => {
    setMessages([
      {
        id: 'msg-welcome',
        sender: 'assistant',
        text: t(
          "Halo! Saya ICS-AI Assistant, agen virtual cerdas Pak Iwan Cahyo Suryadi (ICS). Di sini Anda dapat berkonsultasi mengenai implementasi kecerdasan buatan terpadu berskala korporasi (VOXIA), platform edukasi analisis pasar finansial (INVEZTHINK), atau bertanya mengenai latar belakang karir beliau. Silakan ketik pertanyaan Anda sendiri di bawah atau pilih opsi pertanyaan populer!",
          "Hello! I am ICS-AI Assistant, the smart virtual agent of Mr. Iwan Cahyo Suryadi (ICS). Here you can consult regarding corporate-scale integrated artificial intelligence implementation (VOXIA), financial market analysis education platform (INVEZTHINK), or ask about his career background. Please type your own question below or select a popular prompt option!"
        )
      }
    ]);
  }, [language]);

  useEffect(() => {
    if (messages.length > 1) {
      scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const askAI = async (userText: string, currentMessages: ChatMessage[]) => {
    // Only extract user/assistant roles (skip error alerts etc)
    const chatHistory = currentMessages
      .filter(m => m.id !== 'msg-welcome')
      .map(m => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text
      }));

    const res = await fetch("https://ics-ai-assistant.thebehavioralhacks.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ messages: chatHistory })
    });

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.error || t("Gagal memperoleh respon dari AI.", "Failed to retrieve response from AI."));
    }

    const data = await res.json();
    return data.reply;
  };

  const handleSelectQuestion = async (question: string, fallbackAnswer: string) => {
    if (isTyping) return;
    
    // 1. Add user message
    const userMsgId = 'msg-' + Date.now();
    const updatedMessages = [...messages, { id: userMsgId, sender: 'user' as const, text: question }];
    setMessages(updatedMessages);
    
    // 2. Set typing state
    setIsTyping(true);

    // 3. Trigger API Call with fallback
    try {
      const aiReply = await askAI(question, updatedMessages);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: 'msg-ai-' + Date.now(),
        sender: 'assistant',
        text: aiReply
      }]);
    } catch (err: any) {
      console.warn("AI API request failed, using local expert fallback", err);
      // Wait a tiny bit to simulate typing before fallback
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: 'msg-ai-fallback-' + Date.now(),
          sender: 'assistant',
          text: fallbackAnswer
        }]);
      }, 800);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isTyping || !inputText.trim()) return;

    const userText = inputText.trim();
    setInputText('');

    const userMsgId = 'msg-' + Date.now();
    const updatedMessages = [...messages, { id: userMsgId, sender: 'user' as const, text: userText }];
    setMessages(updatedMessages);

    setIsTyping(true);
    try {
      const aiReply = await askAI(userText, updatedMessages);
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: 'msg-ai-' + Date.now(),
        sender: 'assistant',
        text: aiReply
      }]);
    } catch (err: any) {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: 'msg-err-' + Date.now(),
        sender: 'assistant',
        text: t(
          `⚠️ Maaf, asisten kami tidak dapat merespon pertanyaan kustom saat ini karena server belum dikonfigurasi dengan Fireworks API Key yang valid. Silakan hubungi Pak Iwan melalui kontak resmi atau gunakan tombol "Pilih Pertanyaan Populer" di bawah.\n\nDetail Error: ${err.message}`,
          `⚠️ Sorry, our assistant cannot respond to custom questions at the moment because the server has not been configured with a valid Fireworks API Key. Please contact Mr. Iwan through official channels or choose a "Popular Question" option below.\n\nError Details: ${err.message}`
        )
      }]);
    }
  };

  return (
    <section id="interactive-qa" className="py-24 bg-[#0A0A0B] relative overflow-hidden text-left">
      {/* Background Orbs */}
      <div className="absolute top-[30%] left-[25%] w-[450px] h-[450px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            {t("ASISTEN KONSULTASI PORTAL", "PORTAL CONSULTATIVE ASSISTANT")}
          </span>
          <h2 className="font-serif font-extrabold text-2xl sm:text-4xl text-white tracking-tight mt-4">
            {t("Tanya AI Profil Virtual ICS", "Ask ICS's Virtual AI Profile")}
          </h2>
          <p className="mt-4 text-gray-400 font-sans text-sm sm:text-base">
            {t(
              "Uji interaksi agen AI terlatih di bawah ini untuk melihat ulasan filosofi kepemimpinan dan teknis masa depan yang dihadapi beliau.",
              "Test our custom-trained AI agent below to explore his futuristic technology visions and leadership philosophies."
            )}
          </p>
        </div>

        {/* Chat UI Frame */}
        <div className="bg-[#0E0E10] rounded-2xl border border-[#1F2937] shadow-2xl overflow-hidden flex flex-col h-[560px]">
          
          {/* Chat Header */}
          <div className="bg-[#161619] p-4 border-b border-[#1F2937] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-black shadow-lg shadow-blue-500/10">
                <Cpu className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-white tracking-tight">ICS-AI Assistant</h4>
                <p className="text-[10px] text-blue-500 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                  {t("SISTEM ONLINE & RESPONSIF", "SYSTEM ONLINE & RESPONSIVE")}
                </p>
              </div>
            </div>
            
            <div className="hidden sm:block text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg font-mono border border-white/5">
              Powered by VOXIA-NLP
            </div>
          </div>

          {/* Chat Messages Body Screen */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#0A0A0B]/60">
            {messages.map((msg) => (
              <div 
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
              >
                {/* Avatar Icon */}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                  msg.sender === 'user' 
                    ? 'bg-blue-500/15 text-blue-400 border border-blue-500/20' 
                    : 'bg-blue-500/15 text-blue-400 border border-blue-500/20'
                }`}>
                  {msg.sender === 'user' ? 'U' : <Cpu className="w-4 h-4" />}
                </div>

                {/* Bubble message */}
                <div className={`p-3.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.sender === 'user' 
                    ? 'bg-blue-500/10 text-blue-100 rounded-tr-none border border-blue-500/20 font-sans' 
                    : 'bg-[#161619] text-gray-200 rounded-tl-none border border-white/5 font-sans'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Simulated typing loading dots */}
            {isTyping && (
              <div className="flex gap-3 max-w-[80%] mr-auto">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4 animate-spin" />
                </div>
                <div className="p-3 bg-[#161619] text-gray-400 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-1.5 py-3.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" />
                </div>
              </div>
            )}
            
            <div ref={scrollRef} />
          </div>

          {/* Chat Form Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-[#161619] border-t border-[#1F2937] flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={t("Tanyakan apa saja tentang profil & visi Pak Iwan Suryadi...", "Ask anything about Mr. Iwan Suryadi's profile & vision...")}
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#0A0A0B] border border-[#1F2937] text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              disabled={isTyping}
              id="chatbot-input-field"
            />
            <button
              type="submit"
              disabled={isTyping || !inputText.trim()}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-white/5 text-white disabled:text-gray-600 transition-colors cursor-pointer flex items-center justify-center shrink-0"
              id="chatbot-send-btn"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Quick-Prompt Options Selection (Footer) */}
          <div className="bg-[#0A0A0B] p-4 border-t border-[#1F2937]">
            <p className="text-[11px] font-mono text-gray-500 uppercase tracking-widest mb-3 flex items-center gap-1">
              <MessageSquareCode className="w-3.5 h-3.5 text-blue-500" /> {t("PILIH PERTANYAAN POPULER:", "CHOOSE A POPULAR QUESTION:")}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {QA_ITEMS.map((item) => (
                <button
                  key={item.question}
                  onClick={() => handleSelectQuestion(item.question, item.answer)}
                  disabled={isTyping}
                  className="p-3 text-left rounded-xl bg-white/[0.02] hover:bg-white/5 disabled:opacity-50 text-gray-300 hover:text-white border border-white/5 hover:border-white/10 text-xs font-semibold transition-all group flex items-start justify-between cursor-pointer"
                >
                  <span className="pr-2">{item.question}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-500 shrink-0 transition-colors" />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
