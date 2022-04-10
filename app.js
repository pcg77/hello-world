

const express = require('express');

//const hostname = '127.0.0.1';
const port = 3000;
const app = express();
const http = require("http").createServer(app);
app.get("/hello", (req, res) => {
  res.send("Hello World")
});

const server = http.listen(port);

