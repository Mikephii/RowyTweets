const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const Twit = require("twit");

const { getTweets, addTweet } = require("./tweets");
app.get("/tweets", getTweets);
app.post("/tweet", addTweet);

exports.api = functions.https.onRequest(app);

const T = new Twit({
  consumer_key: "knIYKLRhSRASBanEhpDG8W4ud",
  consumer_secret: "zWlfxZzTLkMTYNjZKeCWlezhwJtveTJsnJX1UVqLoPnVffDPLp",
  access_token: "1448187341147828228-Pud6MwWmAJyEuy2jqe8p66txdubKRd",
  access_token_secret: "fNY8BIqcCoq8wSiu1GxXHjz6yjy4CQBK02F3gEAbmB3ff",
});

exports.publishTweet = functions.firestore
  .document("tweets/{tweetId}")
  .onUpdate((change, context) => {
    const newValue = change.after.data();

    if (newValue.appproved === "Approved") {
      T.post("statuses/update", { status: newValue.content }, () => {});
    } else {
      return;
    }
  });
