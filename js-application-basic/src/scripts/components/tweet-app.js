var TweetApp = React.createClass({
  getInitialState: function() {
      return {
        todos: [{body:"hello", isFavaried:true}]
      };
  },
  render: function(){
    return (
      <div className="main">
        <div className="container">
          <MainHeader />
          <TweetForm />
          <TweetList todos={this.state.todos} />
          <FilterTweet />
        </div>
      </div>
    );
  }
});

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
        {
          this.props.todos.map(function(todo, i){
            if (todo.isFavaried == true) {return (
              <section className="tweet" data-uuid={i}>
                <div className="profile">
                  <p className="user"><span className="user-icon lsf">user</span>名無しさん</p>
                </div>
                <p className="tweet__body">
                  {todo.body}
                </p>
                <a className="js-favorite lsf-icon" title="star">
                  お気に入りに登録
                </a>
              </section>)
            }
          })
        }
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

React.render(
  <TweetApp/>,
  document.getElementById('tweet-container')
);
