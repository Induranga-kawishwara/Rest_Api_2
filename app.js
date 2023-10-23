import express from "express";
//const express = require('express');
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from Homepage");
});
app.listen(PORT, () =>
  console.log(`Server running on port : http://localhost:${PORT}`)
);
