/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import Tweet from "./Tweet";
const TweetList = () => {
  const { currentUser } = useAuth();
  const [tweets, setTweets] = useState();

  useEffect(() => {
    axios.get("/tweets").then((response) => {
      setTweets(response.data);
      console.log(response.data);
    });
  }, []);

  const tweetsMarkup = tweets
    ? tweets.map((tweet, index) => {
        return (
          <div key={index}>
            <Tweet
              number={index}
              status={tweet.appproved}
              content={tweet.content}
              notes={tweet.notes}
            />
            <hr />
          </div>
        );
      })
    : null;

  return (
    <div css={{ margin: 50, display: "flex", flexDirection: "column" }}>
      {tweetsMarkup}
    </div>
  );
};

export default TweetList;
