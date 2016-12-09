#!/bin/bash

first="module.exports = {"
last="}"

echo "Hi, Twitter Config File Creating with little shell script"
read -p "Consumer key:" c_key
read -p "Consumer secret:" c_secret
read -p "Access token:" a_token
read -p "Access token secret:" a_token_secret

echo -e "$first" > config.js
echo -e "\tconsumer_key: \"$c_key\",\n\tconsumer_secret: \"$c_secret\"," >> config.js
echo -e "\taccess_token: \"$a_token\",\n\taccess_token_secret: \"$a_token_secret\",\n\ttimeout_ms: 60*1000,\n$last" >> config.js
