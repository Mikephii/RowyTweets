const functions = require("firebase-functions");

const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
const { getTweets, addTweet } = require("./tweets");

app.get("/tweets", getTweets);
app.post("/tweet", addTweet);

exports.api = functions.https.onRequest(app);
