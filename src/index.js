import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import isEmpty from 'lodash';
import '../src/index.css';

function MyComponent() {
  return (
    <div className="book">
      <div className="title">The Title</div>
      <div className="author">The Author</div>
      <ul className="stats">
        <li className="rating">5 stars</li>
        <li className="isbn">12-388880-910</li>
      </ul>
    </div>
  );
}

function AnotherWayComponent() {
  return React.createElement(
    'div',
    { className: 'book' },
    React.createElement('div', { className: 'title' }, 'The Title'),
    React.createElement('div', { className: 'author' }, 'The Author'),
    React.createElement(
      'ul',
      { className: 'stats' },
      React.createElement('li', { className: 'rating' }, '5 stars'),
      React.createElement('li', { className: 'isbn' }, '12-388880-910')
    )
  );
}

function Greeting() {
  var username = 'Victor';
  // try undefine, null, true,
  return (
    <span>
      {username && !username.isEmpty ? 'Hello ' + username : 'Not logged in.'}
    </span>
  );
}

function Table() {
  return <Data />;
}

function Data() {
  return (
    <Fragment>
      <td>data 1</td>
      <td>data 2</td>
      <td>data 3</td>
    </Fragment>
  );
}

function Tweet({tweet}) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithHandle/><Time/>
        <Message/>
        <div className="buttons">
            <ReplyButton/>
            <RetweetButton/>
            <LikeButton/>
            <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

// Fake Tweet data:
var testTweet = {
  message: "Hey it's an awesome tweeting Saturday!",
  gravatar: 'xyz',
  author: {
    handle: 'Saturday person',
    name: 'My name is Saturday Person.'
  },
  likes: 200,
  retweets: 50,
  timestampe: '2016-07-30 21:24:37'
};

function Avatar({hash}) {
  const srcUrl = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={srcUrl}
      className="avatar"
      alt="avatar"
    />
  );
}

function Message() {
  return (
    <div className="message">
      This is a tweet going out to you tweetie bird.
    </div>
  )
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">Your Name</span>
      <span className="handle">Your Handle</span>
    </span>
  )
}

const Time = () => (
  <span className="time">3 hours ago</span>
)

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
)

const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button"></i>
)

const LikeButton = () => (
  <i className="fa fa-heart like-button"></i>
)

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"></i>
)

ReactDOM.render(<Tweet tweet={testTweet}/>, document.getElementById('root'));
