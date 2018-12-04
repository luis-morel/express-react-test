const express = require('express');
const path = require('path');

// Creating Express app
const app = express();

// Serving ReactJS static files
app.use(express.static(path.join(__dirname, 'client/build')));

// API and front-end routes
app.get('/api/getList', (req, res) => {
    var list = ['Captain America, Iron Man, Superman, Wonder Woman'];
    res.json(list);
    console.log('Sent super Avengers team list.');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`\nServer now listening on port: ${PORT}\n`);
});
