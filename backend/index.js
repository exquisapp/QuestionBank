const db = require('./helpers/db');
const orm = require('./helpers/orm');

const app = require('./app');

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`Server runs on port ${process.env.PORT}`);
});
