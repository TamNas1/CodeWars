var shortenSpeech = function (str) {    
var regex = /[aeiou]/i;
var words = str.split(" ");

return words.map(function(word){
    var vowelIndex = word.slice(3).search(regex)+4;
    if(vowelIndex>3){
      return word.slice(0,vowelIndex-1)+".";
    }
    return word;
  }).join(" ");

}
