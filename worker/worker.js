export default {
  async fetch(request, env, ctx) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
    }

    try {
      const { messages } = await request.json();

      const apiKey = env.FIREWORKS_API_KEY || env.GEMINI_API_KEY;

      if (!apiKey) {
        return new Response(
          JSON.stringify({ error: "API Key belum terkonfigurasi di Cloudflare Secrets." }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const aiResponse = await fetch("https://api.fireworks.ai/inference/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "accounts/fireworks/models/llama-v3p1-8b-instruct",
          messages: [
            {
              role: "system",
              content: "Anda adalah ICS-AI Assistant, asisten virtual cerdas bagi Pak Iwan Cahyo Suryadi (ICS). Jawab pertanyaan pengguna dengan sopan dan ringkas mengenai kedaulatan data lokal, solusi AI terpadu (VOXIA), dan platform edukasi finansial analitis (INVEZTHINK)."
            },
            ...messages
          ],
          temperature: 0.7,
          max_tokens: 600
        })
      });

      const data = await aiResponse.json();
      const reply = data.choices[0].message.content;

      return new Response(JSON.stringify({ reply }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
  }
};
