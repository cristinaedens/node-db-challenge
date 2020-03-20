const express = require('express');
const server = express();

server.use(express.json());
server.get("/", (req, res) => res.send("<h1>Really feeling the stress!</h1>"));

module.exports = server;