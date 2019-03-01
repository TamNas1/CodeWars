function generateHashtag (str) {
if(str===undefined)return false;
str = str.replace(/\s+/g, " ").replace(/^\s|\s$/g, "");
let arr=[];
arr=str.split(" ");
let ans="#";
for(let i=0;i<arr.length;i++){
  arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  ans+=arr[i];
}

if(str.length<1 ||str.length>=140)return false;
return ans;
}
