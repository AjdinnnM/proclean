/**
 * WhatsApp notification via CallMeBot — besplatno, bez kredita.
 *
 * Setup (jednom):
 * 1. Pošalji "I allow callmebot to send me messages" na +34 644 66 07 58 na WhatsApp
 * 2. Dobit ćeš API key porukom
 * 3. Dodaj u .env.local:
 *    CALLMEBOT_PHONE=385994840416   (bez + i razmaka)
 *    CALLMEBOT_API_KEY=              (key iz WhatsApp poruke)
 */
export async function sendWhatsApp(message: string): Promise<void> {
  const phone  = process.env.CALLMEBOT_PHONE;
  const apiKey = process.env.CALLMEBOT_API_KEY;

  if (!phone || !apiKey) {
    console.warn("[whatsapp] CALLMEBOT_PHONE ili CALLMEBOT_API_KEY nije postavljen.");
    return;
  }

  const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;

  try {
    const res = await fetch(url);
    if (res.ok) {
      console.info("[whatsapp] Poruka poslana na", phone);
    } else {
      console.error("[whatsapp] Greška:", res.status, await res.text());
    }
  } catch (e) {
    console.error("[whatsapp] Fetch greška:", e);
  }
}
