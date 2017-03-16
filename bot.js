const fs = require('fs');
const Twit = require('twit');
const t = require('./T');
const rita = require('rita').RiTa;

require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
const words = require('./wordsnoapostrophes.txt');
const dictionary = words.split("\n");

Array.prototype.pick = function() {
    return this[Math.floor(Math.random()*this.length)];
};
const pickWord = function(){
    let picked = '';
    // let truthies = Math.random() > 0.5 ? ['jjs'] : ['nn'];
    let truthies = ['nn', 'jjs', 'jj'];
    while (!truthies.includes(rita.getPosTags(picked)[0])){
        picked = dictionary.pick();
        // console.log(picked, rita.getPosTags(picked));
    }
    return picked;
}

const buildTweet = function(){
    let tweet = 'sonic the ' + pickWord() + 'hog';
    console.log(tweet);
}
buildTweet();

// let num = 0;
// for (var i = 0; i < dictionary.length; i++){
//     if (rita.getPosTags(dictionary[i])[0] == 'jj') num++;
// }
// console.log(num);