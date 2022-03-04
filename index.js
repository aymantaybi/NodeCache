const express = require('express');
const Cache = require('./cache');

const port = 9696;

const app = express();
const cache = new Cache();

app.use(express.json());

app.post('/set', (req, res) => {
    const { key, value } = req.body;
    cache.set(key, value);
    return res.status(200).json({ data: "Succes" }).end();
})

app.post('/get', (req, res) => {
    const { key } = req.body;
    var value = cache.get(key);
    return res.status(200).json({ data: value }).end();
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})