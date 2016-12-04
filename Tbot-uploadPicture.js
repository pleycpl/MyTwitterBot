console.log('The bot is starting');
var Twit = require('twit');
var config = require('./config');
var fs = require('fs');
// Making a Twit object for connection to the API
var T = new Twit(config);

tweetIt();

function tweetIt() {
	var filename = "/home/chuck/Pictures/random_picture.jpg";
	var params = {
		encoding: 'base64'
	};
	var content = fs.readFileSync(filename, params);
	T.post('media/upload', {media_data: content}, uploaded);
	function uploaded(err, data, res) {
		// This is where 1 will tweet!
		var id = data.media_id_string;
		var tweet = {
			status: "#twitterbotapi picture and text",
			media_ids: [id]
		};
		function tweeted(err, data, res) {
			if(err) {
				console.log('Something went wrong!');
			} else {
				console.log('It worked!');
			}
		}; // tweeted
		T.post('statuses/update', tweet, tweeted);
	};
}; // tweetIt
