function nthFibo(n) {
    let n1=0;
    let n2=1;
    if(n==1)return n1;
    if(n==2)return n2;
    var count =2;
    while(count!==n)
    {
        var temp=n2;
        n2+=n1;
        n1=temp;
        count++;
    }
    return n2;
}
