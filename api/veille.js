export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const today = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      tools: [{ type: 'web_search_20250305', name: 'web_search' }],
      system: `Tu es un expert en veille sur l'IA générative. Retourne UNIQUEMENT un objet JSON brut sans backticks. Format: {"articles":[{"title":"...","summary":"...","category":"Texte|Images|Vidéo|Audio","source":"...","date":"...","importance":1-5,"tags":["..."],"url":"..."}]}. Génère exactement 12 articles : 3 Texte, 3 Images, 3 Vidéo, 3 Audio.`,
      messages: [{ role: 'user', content: `Date: ${today}. Recherche les 12 actualités IA générative les plus récentes. JSON brut uniquement.` }]
    })
  });

  const data = await response.json();
  let txt = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  txt = txt.replace(/```json\s*/gi, '').replace(/```/g, '').trim();
  const parsed = JSON.parse(txt);
  res.status(200).json(parsed);
}