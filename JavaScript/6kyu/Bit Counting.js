const countBits =(n)=> n.toString(2).split('').reduce((s,c)=>c=='1'?s+1:s,0)
