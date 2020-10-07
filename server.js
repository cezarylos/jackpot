const express = require('express');

const app = express();

app.use(express.static('./dist/jackpot-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/jackpot-app/' }),
);

app.listen(process.env.PORT || 8080);
