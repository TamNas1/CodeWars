var number=function(array){
  if(array.length==0)return [];
  let newarr=[];
  for(let i=0;i<array.length;i++){
    newarr.push((i+1)+": "+array[i]);
  }
  return newarr;
  }
