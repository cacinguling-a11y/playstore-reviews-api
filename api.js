// api.js
export default async function handler(req, res) {
  const { appId, country, num, secret } = req.query;

  // Basic validation
  if (!appId || !country || !num || !secret) {
    res.status(400).json({ ok: false, message: 'Missing parameters' });
    return;
  }

  // Check secret
  if (secret !== 'gameloft2024') {
    res.status(403).json({ ok: false, message: 'Unauthorized' });
    return;
  }

  // Here, you would fetch real reviews from an API
  // For demo purposes, send dummy data
  res.json({
    ok: true,
    reviews: [
      { reviewer: 'John', review: 'Great game!', rating: 5 },
      { reviewer: 'Alice', review: 'Nice graphics.', rating: 4 },
    ],
  });
}