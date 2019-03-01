Array.prototype.filter = function(fn,con){
var l=this.length;
 var newarr=[];
  for(var i=0;i<l;i++){
    if(i in this && fn.call(con,this[i],i,this))
    newarr.push(this[i]);
  }
  return newarr;
};
