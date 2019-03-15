function mergeArrays(a, b) {
let arr=[];
  for(let i=0;i<a.length || i<b.length;i++){
    if(i<a.length)arr.push(a[i]);
    if(i<b.length)arr.push(b[i]);
  }
  return arr;
}
