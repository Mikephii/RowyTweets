/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
const Tweet = ({ content, status, notes }) => {
  return (
    <div
      css={{
        display: "grid",

        width: 400,
        gridTemplateColumns: "1fr 1fr 1fr",
        minHeight: 70,
      }}
    >
      <div>
        <Typography color="textSecondary">Status</Typography>
        <Typography css={{ fontWeight: 700 }}>{status}</Typography>
      </div>
      <div>
        <Typography color="textSecondary">Content</Typography>
        <Typography css={{ fontWeight: 700 }}>{content}</Typography>
      </div>
      <div>
        <Typography color="textSecondary">Notes</Typography>
        <Typography css={{ fontWeight: 700 }}>{notes}</Typography>
      </div>
    </div>
  );
};

export default Tweet;
