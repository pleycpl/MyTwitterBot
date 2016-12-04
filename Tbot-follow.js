console.log('The bot is starting');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

// Setting up a user stream
var stream = T.stream('user');

// Anytime someone follows me
stream.on('follow', followed);

function followed(event) {
	console.log('Follow event' + event);
	var name = event.source.name;
	var screenName = event.source.screen_name;
  tweetIt('@' + screenName + ' Thank you followed me! ');
};

function tweetIt(txt) {
	var tweet = {
  	status: txt
  };
  function tweeted(err, data, response) {
  	if (err) {
    	console.log("Something went wrong!");
    } else {
      console.log("It worked!");
    }
  };
  T.post('statuses/update', tweet, tweeted);
};
                                       
