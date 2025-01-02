const express = require("express");
const axios = require("axios");
const sharp = require("sharp");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/fetch-image", async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    const imageResponse = await axios.get(url, {
      responseType: "arraybuffer",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    const contentType = imageResponse.headers["content-type"];
    if (!contentType || !contentType.startsWith("image/")) {
      return res.status(400).json({ error: "Provided URL is not an image" });
    }

    const imageBuffer = await sharp(imageResponse.data).png().toBuffer();

    res.setHeader("Content-Type", "image/png");
    res.send(imageBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch image" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
