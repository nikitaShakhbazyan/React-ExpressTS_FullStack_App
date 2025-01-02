const express = require('express');
const axios = require('axios');
const Jimp = require('jimp');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/fetch-image', async (req, res) => {
    const { url } = req.body;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        // Запрос для получения изображения с переданного URL
        const imageResponse = await axios.get(url, {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            }
        });

        // Проверка типа содержимого
        const contentType = imageResponse.headers['content-type'];
        if (!contentType || !contentType.startsWith('image/')) {
            return res.status(400).json({ error: 'Provided URL is not an image' });
        }

        // Используем Jimp для чтения изображения из буфера
        const image = await Jimp.read(imageResponse.data);

        // Конвертируем изображение в формат PNG
        image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to process image' });
            }
            // Отправляем изображение в формате PNG
            res.setHeader('Content-Type', 'image/png');
            res.send(buffer);
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch image' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
