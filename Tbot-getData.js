console.log('The bot is starting');
var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

// Search twitter for all tweets containing the word 'nodejs' since September 01, 2015
var params = {
	q: 'nodejs since:2015-10-01',
	count: 5
};

function getData(err, data, res) {
	var tweets = data.statuses;
	for(var i=0; i < tweets.length; i++) {
		console.log(tweets[i].text);
	}
};

T.get('search/tweets', params, getData);
