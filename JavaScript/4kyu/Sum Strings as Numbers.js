
function sumStrings(a,b) { 
  var sum = "";
	var r = 0;
	var n1, n2, i;
	if (a.length < b.length) {
		n1 = a;
		n2 = b;
	}
	else {
		n1 = b;
		n2 = a;
	}
	n1 = n1.split("").reverse();
	n2 = n2.split("").reverse();
	for (i = 0; i <n2.length; i++) {
	  var t = ((i <n1.length) ? parseInt(n1[i]) : 0) + parseInt(n2[i]) + r;
  	sum += t % 10;
  	r = t < 10 ? 0 : Math.floor(t / 10);
	}
	if (r > 0)sum += r;
	sum = sum.split("").reverse();
	while (sum[0] == "0")
		sum.shift();
	return sum.length > 0 ? sum.join("") : "0";
 }
