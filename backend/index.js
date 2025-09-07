require('dotenv').config();
const http = require('http');
const db = require('./helpers/db');
const orm = require('./helpers/orm');
const app = require('./app');

const PORT = process.env.PORT || 3000;

if (!process.env.MONGODB) {
    console.error('Error: MONGODB environment variable is not set.');
    process.exit(1);
}

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`);
});
