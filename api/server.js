const express = require('express');
const server = express();
const projectRouter = require('../routes/projectRoutes');

server.use(express.json());
server.use('/api/projects', projectRouter)
server.get("/", (req, res) => res.send("<h1>Really feeling the stress!</h1>"));

module.exports = server;