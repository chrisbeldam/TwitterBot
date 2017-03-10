
var Twit = require('twit');

// Pulling all my twitter account info from another file
var config = require('./config.js');

// Making a Twit object for connection to the API
var T = new Twit(config);

// Start once
tweeter();

// Once every N milliseconds
setInterval(tweeter, 60*5*1000);

// Here is the bot!
function tweeter() {

  // This is a random number bot
  var tweet = 'Here\'s a random number between 0 and 100: ' + Math.floor(Math.random()*100);
  
  // Post that tweet!
  T.post('statuses/update', { status: tweet }, tweeted);

  // Callback for when the tweet is sent
  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
      //console.log(response);
    }
  };


//  tweet Hi! at myself
//
T.post('statuses/update', { status: 'Hi! @chrisbeldam' }, function(err, data, response) {
  console.log(data)
})

// searches for all the tweets which talk about mcdonalds since 2016 and takes 10 of them
T.get('search/tweets', { q: 'Mcdonalds since:2016-07-11', count: 10 }, function(err, data, response) {
  console.log(data)
})

//
//  get the list of user id's that follow trump (lots of people so good for results)
//
T.get('followers/ids', { screen_name: '@realdonaldtrump' },  function (err, data, response) {
  console.log(data)
})

}