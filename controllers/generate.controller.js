exports.generateImage = (req, res) => {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== "string") {
    return res.status(400).json({ error: "Prompt must be a non-empty string." });
  }

  const imageUrl = `https://picsum.photos/seed/${encodeURIComponent(prompt)}/600`;

  res.status(200).json({ imageUrl });
};
