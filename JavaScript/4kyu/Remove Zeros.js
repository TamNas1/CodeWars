function removeZeros(array) {
  var j;
  for(let i = array.length-1; i >= 0; i--) {
    if(array[i] === 0 || array[i]==="0") {
      j = i;
      while((j+1 < array.length) && (array[j+1] !== 0 && array[j+1]!=="0")) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        j++;
      }
    }
  }

  return array;
}
