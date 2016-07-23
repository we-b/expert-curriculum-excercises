// utilities
var utils = {
  uuid: function () {
    var i, random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }

    return uuid;
  }
}

// tweet model
var Tweet = function(author, body) {
  this.uuid = utils.uuid()
  this.author = author
  this.body = body
  this.isFavorited = false
}

Tweet.prototype.favorite = function() {
  this.isFavorited = true
};

Tweet.prototype.unfavorite = function() {
  this.isFavorited = false
};

// application
var App = function() {
  this.tweets = []
  this.tweetTemplate = Handlebars.compile($('#js-tweet-template').html())
  this.filterTemplate = Handlebars.compile($('#js-filter-template').html())

  this.bindEvents()

  // routing
  new Router({
    '/:filter': function(filter) {
      this.filter = filter
      this.render()
    }.bind(this)
  }).init('/all')
}

App.prototype.bindEvents = function() {
  $('#js-tweet-body').on('keydown', this.tweet.bind(this))
  $('#js-tweets')
    .on('click', '.js-favorite', this.favorite.bind(this))
    .on('click', '.js-destroy', this.destroy.bind(this))
};

App.prototype.tweet = function(e) {
  if( e.keyCode === 13) {
    e.preventDefault()
    var $tweetBody = $('#js-tweet-body')
    var body = $tweetBody.val()
    if(body.length !== 0){
      var tweet = new Tweet('annonymous', body)
      this.tweets.unshift(tweet)
      $tweetBody.val('')
      this.render()
    }
  }
};

App.prototype.favorite = function(e) {
  e.preventDefault()
  var uuid = $(e.currentTarget).closest('section').data('uuid')
  var tweet = this.tweets[this.tweetIndexByUuid(uuid)]
  if(tweet.isFavorited) {
    tweet.unfavorite()
  } else {
    tweet.favorite()
  }
  this.render()
};

App.prototype.destroy = function(e) {
  e.preventDefault()
  var uuid = $(e.currentTarget).closest('section').data('uuid')
  this.tweets.splice(this.tweetIndexByUuid(uuid), 1)
  this.render()
};

App.prototype.render = function() {
  var tweets = this.getFilteredTweets()
  $('#js-tweets').html(this.tweetTemplate(tweets))
  $('#js-filter').html(this.filterTemplate({isAll: (this.filter === 'all')}))
};

App.prototype.tweetIndexByUuid = function(uuid) {
  var i = this.tweets.length

  while (i--) {
    if (this.tweets[i].uuid === uuid) {
      return i;
    }
  }
};

App.prototype.getFilteredTweets = function() {
  if(this.filter === 'favorited') {
    return this.tweets.filter(function(tweet) { return tweet.isFavorited })
  } else {
    return this.tweets
  }
};

// init Application
$(function() {
  new App()
})
