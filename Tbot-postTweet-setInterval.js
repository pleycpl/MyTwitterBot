console.log('The bot is starting');
var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

function tweetIt() {
	var r = Math.floor(Math.random()*100);
	var tweet = {
		status: r + ": setInterval()"
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

setInterval(tweetIt, 1000*60*24); //1000:1sn
