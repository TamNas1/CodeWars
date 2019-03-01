const order=(words)=>{
let newarr=new Array(9);
var narr=[];
var s;
let arr=words.split(" ")
let i=0,j=0;
while(i<arr.length){

  if( arr[i] == "" ) {
  i++;
  continue;
  }

  let k = arr[i].match(/\d+/g).map(Number);
  newarr[k-1]=arr[i];
  i++;
}

for(let i=0;i<newarr.length;i++){
  if(newarr[i]!==undefined)narr.push(newarr[i]);
}
s = narr.toString();
s= s.replace(/,/g, ' ');
return s;
}
