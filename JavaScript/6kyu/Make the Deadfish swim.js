// Return the output array, and ignore all non-op characters
function parse( data )
{
  let arr=[];
  let value=0;
  for(let i=0;i<data.length;i++){
    switch(data[i]){
      case 'i': value++;
      break;
      case 'd': value--;
      break;
      case 's': value*=value;
      break;
      case 'o': arr.push(value);
      break;
      default:continue;
    }
  }
  return(arr);
}
