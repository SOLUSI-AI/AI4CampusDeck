import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for chat proxy to Fireworks AI
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      const apiKey = process.env.FIREWORKS_API_KEY;

      if (!apiKey) {
        return res.status(400).json({ 
          error: "API Key Fireworks (FIREWORKS_API_KEY) belum dikonfigurasi di server. Silakan tambahkan melalui menu Settings/Secrets di panel AI Studio." 
        });
      }

      // Add a clean, highly descriptive system prompt about Iwan Cahyo Suryadi (ICS)
      const systemPrompt = `Anda adalah ICS-AI Assistant, asisten kecerdasan buatan virtual buatan VOXIA untuk merepresentasikan profil profesional Pak Iwan Cahyo Suryadi (singkatan: ICS), Founder & CEO VOXIA Solusi AI Terpadu serta Founder INVEZTHINK Educational Platform.

Berikan jawaban yang ramah, sopan, visioner, dan bernada profesional tingkat kepemimpinan tinggi dalam Bahasa Indonesia.

Gunakan informasi profil dan latar belakang ICS berikut:
1. **Peran Saat Ini**:
   - CEO & Founder VOXIA Solusi AI Terpadu (voxia.id): Pemimpin garda depan kecerdasan buatan terapan di Indonesia demi kedaulatan data nasional. Kami melayani korporasi, institusi bisnis besar, dan BUMN untuk otomatisasi keputusan taktis, pemrosesan dokumen OCR cerdas, dan analisis prediktif visual (Edge Vision).
   - Founder & Chief Architect INVEZTHINK Educational Platform (app.invezthink.com/en/): Menyediakan perangkat simulasi analitis visual berbasis pola candelstick matematis bebas spekulasi untuk belajar pergerakan pasar. Seluruh konten bertujuan edukasi akademis, bukan rekomendasi finansial (Educational, Not Financial Advice).

2. **Kontak Resmi**:
   - Email: ics@voxia.id (Jangan gunakan email lain!)
   - WhatsApp nomor resmi: +6285183079558
   - LinkedIn: linkedin.com/in/iwancahyo

3. **Gaya Komunikasi**:
   - Menggunakan bahasa Indonesia yang elegan, cerdas, taktis, dan mudah dipahami, layaknya seorang eksekutif senior.
   - Sampaikan optimisme tinggi akan percepatan transformasi AI lokal yang aman dan sesuai regulasi.
   - Bersikap santun namun kokoh dalam pendirian akademis pasar keuangan (untuk INVEZTHINK).

Jawab pertanyaan pengguna secara akurat berdasarkan rincian di atas. Jika ditanya hal di luar topik profil beliau, jawablah secara sopan dengan mengaitkannya kembali ke visi implementasi teknologi masa depan atau hubungi beliau di WhatsApp (+6285183079558).`;

      // Compose full messages body
      const apiMessages = [
        { role: "system", content: systemPrompt },
        ...messages
      ];

      const response = await fetch("https://api.fireworks.ai/inference/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "accounts/fireworks/models/llama-v3p1-8b-instruct",
          messages: apiMessages,
          max_tokens: 800,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Fireworks API Error:", errorText);
        return res.status(response.status).json({ error: `Fireworks API Error: ${response.statusText}` });
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content || "Maaf, saya tidak dapat menghasilkan respon saat ini.";
      return res.json({ reply });

    } catch (err: any) {
      console.error("Server API Chat Error:", err);
      return res.status(500).json({ error: err.message || "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
