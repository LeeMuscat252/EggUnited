const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname));
app.use('/{*path}', (_req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.listen(5000, '0.0.0.0', () => console.log('ready on 5000'));
