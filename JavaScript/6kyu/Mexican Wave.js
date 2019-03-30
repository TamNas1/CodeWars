function wave(str){
  let results =[];
  for(let i=0;i<str.length;i++){
    let arr = str.split('');
    if(arr[i] === ' ')
       continue;
    arr[i] = arr[i].toUpperCase()
    results.push(arr.join(''))
  }
  return results;
}
