export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
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
        max_tokens: 8000,
        system: `Tu es un expert en veille sur l'IA générative. Retourne UNIQUEMENT un objet JSON brut sans backticks ni markdown. Format exact: {"articles":[{"title":"...","summary":"...","category":"Texte|Images|Vidéo|Audio","source":"...","date":"2025-03-10","importance":4,"tags":["tag1"],"url":"https://...","image":"https://images.unsplash.com/photo-XXXXXX?w=400&h=200&fit=crop"}]}. Génère exactement 12 articles : 3 Texte, 3 Images, 3 Vidéo, 3 Audio. Pour chaque article, choisis une vraie URL Unsplash pertinente parmi ces options selon la catégorie - Texte: photo-1677442136019, Images: photo-1686191128892, Vidéo: photo-1574717024653, Audio: photo-1589903308904. Pas de texte avant ou après le JSON.`,
        messages: [{ role: 'user', content: `Date: ${today}. Génère 12 actualités récentes sur l'IA générative en JSON brut uniquement.` }]
      })
    });

    const data = await response.json();
    
    if (data.error) {
      return res.status(500).json({ error: data.error.message });
    }

    let txt = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('');

    // Extraire le JSON même s'il y a du texte autour
    const jsonMatch = txt.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return res.status(500).json({ error: 'No JSON found in response', raw: txt.slice(0, 200) });
    }

    const parsed = JSON.parse(jsonMatch[0]);
    return res.status(200).json(parsed);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
