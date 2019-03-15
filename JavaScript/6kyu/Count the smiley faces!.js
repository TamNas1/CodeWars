//return the total number of smiling faces in the array
function countSmileys(arr) {
let c=0;
for(let i=0;i<arr.length;i++){
    if(arr[i][0]===';' || arr[i][0]===':'){
      if(arr[i][1]===')' || arr[i][1] ==='D'){c++;}
      else if((arr[i][1]==='-' || arr[i][1]==='~') && (arr[i][2]===')' || arr[i][2]==='D')){
      c++;
      }
    }
}
return c;
}
