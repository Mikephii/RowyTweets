/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const TweetForm = () => {
  const [tweet, setTweet] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(tweet);
    console.log(notes);
    axios
      .post("/tweet", { content: tweet, notes: notes })
      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      css={{ margin: 50, display: "flex", flexDirection: "column" }}
    >
      <Typography variant="h5">Propose a new Tweet</Typography>
      <Typography>Tweet</Typography>
      <TextField
        multiline
        rows={5}
        onChange={(e) => {
          setTweet(e.target.value);
        }}
      ></TextField>
      <br />
      <Typography>Notes</Typography>
      <TextField
        multiline
        rows={2}
        onChange={(e) => {
          setNotes(e.target.value);
        }}
      ></TextField>
      <br />
      <Button type="submit" variant="outlined">
        Submit Tweet
      </Button>
    </form>
  );
};

export default TweetForm;
