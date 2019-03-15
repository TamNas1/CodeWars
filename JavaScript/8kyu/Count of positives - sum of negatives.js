function countPositivesSumNegatives(input) {
    let c=0;
    let sum=0;
    if (input==null || input.length<=0) return [];
    for(let i=0;i<input.length;i++){
      if(input[i]<=0){
        sum+=input[i];
      }else{
        c++;
      }
    }
    return [c,sum];
}
