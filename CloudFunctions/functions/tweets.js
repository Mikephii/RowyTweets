const admin = require("firebase-admin");
admin.initializeApp();

exports.getTweets = (req, res) => {
  admin
    .firestore()
    .collection("tweets")
    .limit(10)
    .get()
    .then((data) => {
      let tweets = [];
      data.forEach((doc) => {
        tweets.push(doc.data());
      });
      return res.json(tweets);
    })
    .catch((err) => console.error(err));
};

exports.addTweet = (req, res) => {
  const id = ID();

  let newTweet = {
    content: req.body.content,
    notes: req.body.notes,
    appproved: "Pending",
    id: id,
  };

  admin
    .firestore()
    .collection("tweets")
    .doc(id)
    .set(newTweet)
    .then((data) => {
      return res.json(data);
    })
    .catch((err) => console.error(err));
};

const ID = function () {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return "_" + Math.random().toString(36).substr(2, 9);
};
