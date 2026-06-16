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

      // Rotasi: pilih random dari comma-separated keys
      const keysRaw = env.FIREWORKS_API_KEYS || env.FIREWORKS_API_KEY || "";
      const keys = keysRaw.split(",").map(k => k.trim()).filter(Boolean);

      if (keys.length === 0) {
        return new Response(
          JSON.stringify({ error: "API Key belum terkonfigurasi di Cloudflare Secrets." }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const apiKey = keys[Math.floor(Math.random() * keys.length)];

      const aiResponse = await fetch("https://api.fireworks.ai/inference/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "accounts/fireworks/models/deepseek-v4-flash",
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

      if (!aiResponse.ok) {
        return new Response(JSON.stringify({ error: data.error?.message || data.message || `HTTP ${aiResponse.status}`, raw: JSON.stringify(data).substring(0, 500) }), {
          status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }

      const reply = data.choices?.[0]?.message?.content;

      if (!reply) {
        return new Response(JSON.stringify({ error: "Fireworks returned empty response", raw: JSON.stringify(data) }), {
          status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }

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
