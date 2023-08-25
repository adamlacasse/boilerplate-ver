import express from 'express';
import http from 'http';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import data from './data/info.js';

const app = express();

// API routes
app.route('/data').get((req, res) => {
    console.log('getting the data...')
    res.json(data);
});


// Serve the built React app
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/favicon.ico', express.static(`${__dirname}/../public/vite.svg`));
app.use('/', express.static(`${__dirname}/../dist`));
app.use('/*', express.static(`${__dirname}/../dist`));


// Start the server
http.createServer(app).listen(3443, () => {
    console.log('!!START!! - Express server started on port 3443. http://localhost:3443');
});
