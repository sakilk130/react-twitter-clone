import React from 'react';
import { Avatar, Button } from '@material-ui/core';

import '../styles/TweetBox.css';

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1028324270550597637/HltKTrzO_200x200.jpg" />
          <input type="text" placeholder="What's Happening?" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional Enter image URL"
        />

        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
