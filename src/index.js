module.exports = function toReadable (number) {
    var unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var decades = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var hundreds = ['','one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred',
'nine hundred'];
    var ans = '';
    var number1 = number + '';
    if (number1.length === 1){
        ans = unit[number];
    }
    else if (number1.length === 2){
        if (number < 20){
            ans = unit[number];
        }
        else {
            ans = decades[number1[0]];
            if (number1[1] !== '0'){
                ans += ' ' + unit[number1[1]];
            }
        }
    }
    else {
        ans = hundreds[number1[0]];
        if ((number%100) < 20 && (number%100)>0){
            ans += ' ' + unit[number%100];
        }
        else {
            if (number1[1]!=='0')
                ans += ' ' + decades[number1[1]];
            if ( number1[2]!=='0' )
                ans += ' ' + unit[number1[2]];
        }
    }
    return ans;
}
