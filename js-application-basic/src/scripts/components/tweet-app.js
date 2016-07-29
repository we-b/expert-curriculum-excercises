var MainHeader = React.createClass({
  render: function(){
    return (
      <header className="main-header">
        <h1 className="logo">tweets</h1>
      </header>
    );
  }
});

var TweetForm = React.createClass({
  render: function(){
    return (
      <div className="tweet-input">
        <textarea className="tweet-input__textarea" name="tweet" cols="30" rows="10" placeholder="いま何してる？"></textarea>
      </div>
    );
  }
});

var TweetList = React.createClass({
  render: function(){
    return (
      <div className="tweets">
      </div>
    );
  }
});

var FilterTweet = React.createClass({
  render: function(){
    return (
      <ul className="filter__items">
        <li className="filter__item current">全てのツイート</li>
        <li className="filter__item">全てのツイート</li>
      </ul>
    );
  }
});

var TweetApp = React.createClass({
  render: function(){
    return (
      <div className="main">
        <div className="container">
          <MainHeader />
          <TweetForm />
          <TweetList />
          <FilterTweet />
        </div>
      </div>
    );
  }
});

React.render(
  <TweetApp/>,
  document.getElementById('tweet-container')
);
