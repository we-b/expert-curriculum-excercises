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

  getInitialState: function() {
      return {
          body: ""
      };
  },

  _createTweet: function(e){
    if (e.keyCode === 13) {
      e.preventDefault()
      var newTweet = this.refs.inputTweet.getDOMNode().value;
      this.props.createTweet(newTweet);
      this.setState({
        body: ""
      });
    }
  },

  _onChange: function(e){
    this.setState({
      body: e.target.value
    });
  },

  render: function(){
    return (
      <div className="tweet-input">
        <textarea className="tweet-input__textarea" ref="inputTweet" value={this.state.body} cols="30" rows="10" placeholder="いま何してる？" onChange={this._onChange} onKeyDown={this._createTweet}></textarea>
      </div>
    );
  }
});

var TweetList = React.createClass({
  render: function(){
    var rows = this.props.tweets.map(function(tweet, i){
      return (<Tweet tweet={tweet} i={i} deleteTweet={this.props.deleteTweet} switchFav={this.props.switchFav}></Tweet>);
    }, this);
    return (
      <div className="tweets">
        {rows}
      </div>
    );
  }
});

var FavoritedTweetList = React.createClass({
  render: function(){
    var rows = this.props.tweets.filter(function(tweet) {
      return tweet.isFavaried;
    }).map(function(tweet, i){
      return (<Tweet tweet={tweet} i={i} deleteTweet={this.props.deleteTweet} switchFav={this.props.switchFav}></Tweet>);
    }, this);
    return (
      <div className="tweets">
        {rows}
      </div>
    )
  }
});

var Tweet = React.createClass({

  _deleteTweet: function(i){
    this.props.deleteTweet(i);
  },

  _switchFav: function(i){
    this.props.switchFav(i);
  },

  render: function() {
    var tweet = this.props.tweet;
    var i = this.props.i
    return (
      <section className="tweet">
        <div className="profile">
          <p className="user"><span className="user-icon lsf">user</span>名無しさん</p>
        </div>
        <p className="tweet__body">
          {tweet.body}
        </p>
        {(() =>
          { if (tweet.isFavaried == false) {
              return <a className="js-favorite favorite lsf-icon" title="star" onClick={this._switchFav.bind(this, i)}>お気に入り</a>;
            } else {
              return <a className="js-favorite favorite lsf-icon" title="star" onClick={this._switchFav.bind(this, i)}>お気に入りを解除</a>;
            }
          }
        )()}
        <a className="lsf-icon" title="trash" onClick={this._deleteTweet.bind(this, i)}>
          ツイートを削除
        </a>
      </section>
    );
  }
});

var TweetApp = React.createClass({

  getInitialState: function() {
      return {
        tweets: [],
        page: 'all'
      };
  },

  createTweet: function(newTweet){
    this.state.tweets.unshift({body:newTweet, isFavaried:false})
    this.setState({
      tweets: this.state.tweets
    })
  },

  deleteTweet: function(i){
    this.state.tweets.splice(i, 1);
    this.setState({
      tweets: this.state.tweets
    });
  },

  switchFav: function(i){
    var targetTweet = this.state.tweets[i];
    targetTweet.isFavaried ^= true;
    this.setState({
      tweets: this.state.tweets
    });
  },

  render: function(){
    return (
      <div className="main">
        <div className="container">
          <MainHeader />
          <TweetForm createTweet={this.createTweet}/>
          <TweetList tweets={this.state.tweets} deleteTweet={this.deleteTweet} switchFav={this.switchFav}/>
          <ul className="filter__items">
            <li className="filter__item current">全てのツイート</li>
            <li className="filter__item">お気に入り</li>
          </ul>
        </div>
      </div>
    );
  }
});

React.render(
  <TweetApp/>,
  document.getElementById('tweet-container')
);
