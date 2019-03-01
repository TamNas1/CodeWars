function isBalanced(string){
 let brCount=0;
 for(let i=0;i<string.length;i++){
   if(string[i]=='(')brCount++;
   if(string[i]==')'){
     if(brCount<=0)return false;
     else brCount--;
   }
 }
 if(brCount!=0)return false;
 return true;
}
