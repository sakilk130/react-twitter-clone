import React from 'react';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

import '../styles/Widgets.css';
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'1402320383932502021'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="sakilk130"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={'https://facebook.com/sakilk130'}
          options={{ text: '#reactjs is awesome', via: 'sakilk130' }}
        />
      </div>
    </div>
  );
}

export default Widgets;
