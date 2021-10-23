import React, { useState } from 'react';
import { Avatar, Button } from '@material-ui/core';

import '../styles/TweetBox.css';
import db from '../firebase/firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      displayName: 'Sakil Khan',
      username: 'sakilk130',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        'https://pbs.twimg.com/profile_images/1028324270550597637/HltKTrzO_200x200.jpg',
    });
    setTweetMessage('');
    setTweetImage('');
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1028324270550597637/HltKTrzO_200x200.jpg" />
          <input
            type="text"
            placeholder="What's Happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Optional Enter image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
