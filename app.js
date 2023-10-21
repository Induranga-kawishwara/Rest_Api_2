import express from "express";
//const express = require('express');
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;
app.use(bodyParser.json());
