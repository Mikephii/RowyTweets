/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TweetForm from "../src/components/TweetForm";
import TweetList from "../src/components/TweetList";
import { useAuth } from "../src/contexts/AuthContext";
export default function Home() {
  const { currentUser } = useAuth();

  if (currentUser) {
    return (
      <div css={{ margin: "auto", width: "fit-content", marginTop: 200 }}>
        <TweetForm />
        <TweetList />
      </div>
    );
  } else {
    return <div>please log in</div>;
  }
}
