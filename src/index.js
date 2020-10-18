module.exports = function toReadable (number) {
    var numberToWords = require('number-to-words');
    var ans1 = numberToWords.toWords(number);
    var ans2 = '';
    for (var i = 0; i < ans1.length; i++){
        if (ans1[i] !== '-'){
            ans2 += ans1[i];
        }
        else{
            ans2 += ' ';
        }
    }
    return ans2;
}
