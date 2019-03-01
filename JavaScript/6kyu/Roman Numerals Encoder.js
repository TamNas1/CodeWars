function solution(num){
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
}
