var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      const apiKey = process.env.FIREWORKS_API_KEY;
      if (!apiKey) {
        return res.status(400).json({
          error: "API Key Fireworks (FIREWORKS_API_KEY) belum dikonfigurasi di server. Silakan tambahkan melalui menu Settings/Secrets di panel AI Studio."
        });
      }
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
    } catch (err) {
      console.error("Server API Chat Error:", err);
      return res.status(500).json({ error: err.message || "Internal server error" });
    }
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
