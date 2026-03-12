export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const { url } = req.query;
    if (!url) return res.status(400).json({ error: 'missing url' });
    try {
        const response = await fetch(decodeURIComponent(url), {
            headers: { 'User-Agent': 'Mozilla/5.0' },
            signal: AbortSignal.timeout(8000)
        });
        const text = await response.text();
        res.status(200).send(text);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
