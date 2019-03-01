function positiveSum(arr) {
var x=0;
if(arr.length<1 ||arr ===undefined)return x;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>0)x+=arr[i];
  }
  return x;
}
