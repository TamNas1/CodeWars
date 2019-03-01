function sumTwoSmallestNumbers(numbers) {
     var min1=numbers[0];
     var indexmin1=0;
     var min2=numbers[1];
     for(let i=0;i<numbers.length;i++){
       if(numbers[i]<min1){
       indexmin1=i;
       if(i===1)min2=numbers[0];
       min1=numbers[i];
       }
     }

     for(let i=0;i<numbers.length;i++){
       if(numbers[i]<min2 && indexmin1!==i)min2=numbers[i];
     }
     return min1+min2;
};
