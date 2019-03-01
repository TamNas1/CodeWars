var RomanNumerals={
  toRoman:function(num){
   var answer = "";
   var romanSymbols = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
   var romanValues = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
   for (let i = 0; i < romanSymbols.length; i++){
       while(num >= romanValues[i]){
            answer += romanSymbols[i];
            num -= romanValues[i];
        }
    }
    return answer;
  },

  fromRoman:function(romanNum){
    var romanSymbols = ['M','D','C','L','X','V','I'];
    var romanValues = [1000,500,100,50,10,5,1];
    var ans = romanValues[romanSymbols.indexOf(romanNum[0])];
    var previousChar, currentChar;

    for(let i = 1; i < romanNum.length; i++){
      currentChar  =  romanValues[romanSymbols.indexOf(romanNum[i])];
      previousChar =  romanValues[romanSymbols.indexOf(romanNum[i-1])];
      if(currentChar <= previousChar){
        ans+= currentChar;
      }
      else{
        ans = ans - previousChar*2 + currentChar;
      }
     }
    return ans;
    }
 }
