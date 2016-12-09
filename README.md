# Twitter Bot Examples
I am using twit package this bot. 

## Installing ##
```
  $ git clone https://github.com/pleycpl/MyTwitterBot
  $ npm install
```
## Before Usage, You should create config.js file##
```
  $ # <Path - 1> Creating config.js file with vim
  $ vim config.js
    module.exports = {
      consumer_key: "xxx",
      consumer_secret: "xxx",
      access_token: "xxx",
      access_token_secret: "xxx",
      timeout_ms: 60*1000,
    }
  $ # <Path - 2> Creatin config.js file with shell script
  $ chmod +x createConfig.sh
  $ ./createConfig.sh
```
## Usage ##
```
  $ node Tbot-getData.js   #whatever you need.Just changed content.
```
