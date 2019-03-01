function findUniq(arr) {
  let special;
  for(let i=0;i<arr.length-1;i+=3){
  if(i===arr.length-1 || i===arr.length-2) i=arr.length-3;
    if(arr[i]===arr[i+1] && arr[i]===arr[i+2])continue;
    if(arr[i]!==arr[i+1] && arr[i]===arr[i+2]){
      special=arr[i+1];
      break;
      }
    if(arr[i]===arr[i+1] && arr[i]!==arr[i+2]){
      special=arr[i+2];
      break;
      }
    if(arr[i]!==arr[i+1] && arr[i]!==arr[i+2]){
      special=arr[i];
      break;
      }
  }
 return special;
}
