console.log('The bot is starting');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

function tweetIt() {
	var tweet = {
		status: "Tweet Content"
	};
	function tweeted(err, data, res) {
		if(err) {
			console.log('Something went wrong!');
		} else {
			console.log('It worked!');
		}
	};
	T.post('statuses/update', tweet, tweeted);
};

tweetIt();
