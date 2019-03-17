function solve(files) {
  let arrEx = [];
  let arrExCounter=[];
  let currentEx ="";
  for(let i=0;i<files.length;i++)
  {
    currentEx = files[i].substring(files[i].lastIndexOf('.'),files[i].length);
    if(currentEx== -1)continue;
    
    if(!arrEx.includes(currentEx)){
      arrEx.push(currentEx);
      arrExCounter.push(0);
    }
    arrExCounter[arrEx.indexOf(currentEx)]++;
  }
  console.log(arrEx);
  console.log(arrExCounter);
  let arrMax=[];
  let maxNumIndex=0;
  for(let i=0;i<arrExCounter.length;i++){
    if(arrExCounter[i]>arrExCounter[maxNumIndex])maxNumIndex=i;
  }
  for(let i=0;i<arrEx.length;i++){
    if(arrExCounter[i]==arrExCounter[maxNumIndex])arrMax.push(arrEx[i]);
  }
   return arrMax.sort();
}
