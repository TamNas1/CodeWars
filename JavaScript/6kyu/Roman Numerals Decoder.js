function solution(romanNum){
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
