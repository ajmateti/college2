const http = require('http');
const app = require('./backend/express');
const server = http.createServer(app);


server.listen(7070, () => console.log('listening on 7070'));
