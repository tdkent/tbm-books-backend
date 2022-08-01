const http = require("http");
const client = require('./client');

const app = require('./app');

const PORT = process.env["PORT"] ?? 4000;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`CORS-enabled server listening on port ${PORT}`)
})

client.connect();

// Hello CORS