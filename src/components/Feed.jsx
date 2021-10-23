import React from 'react';

import '../styles/Feed.css';
import TweetBox from './TweetBox';

function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />
      {/* Post */}
    </div>
  );
}

export default Feed;