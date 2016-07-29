var MainHeader = React.createClass({
  render: function(){
    return (
      <header className="main-header">
        <h1 className="logo">tweets</h1>
      </header>
    );
  }
});

var TweetApp = React.createClass({
  render: function() {
    return (
      <div className="main">
        <div className="container">
          <MainHeader />
        </div>
      </div>
      );
  }
});

React.render(
  <TweetApp/>,
  document.getElementById('tweet-container')
);
