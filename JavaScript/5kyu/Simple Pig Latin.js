function pigIt(str){
  let arr=[];
  let ans="";
  let x="";
  arr=str.split(" ");
  for(let i=0;i<arr.length;i++){
  if(arr[i].length<=1 && arr[i]=='!' || arr[i]=='?')
  continue;
  x=arr[i][0].toString();
  arr[i]=arr[i].substring(1);
  arr[i]+=x+"ay";
  x="";
  }
  ans=arr.toString();
  ans= ans.replace(/,/g, ' ');
  return ans;
}
