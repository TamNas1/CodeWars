function findOutlier(integers){
  var isOdd=false;
  var isEven=false;
    if((integers[0]%2===0 && integers[1]%2===0) ||( integers[0]%2===0 && integers[2]%2===0) || (integers[1]%2===0 && integers[2]%2===0)){
      isEven=true;
    }
    else isOdd=true;
    for(let i=0;i<integers.length;i++){

      if(integers[i]%2===0 && isOdd===true)return integers[i];
      if((integers[i]%2===1 ||integers[i]%2===-1) && isEven===true)return integers[i];
    }



}
