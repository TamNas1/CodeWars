function toWeirdCase(string){
	var arr = string.split(" ");
	var arr2 = [];
	var arr3 = [];
	for (let i = 0; i < arr.length; i++) {
		var temp = arr[i].split("");
		for (var j = 0; j < temp.length; j+=2) {
				temp[j] = temp[j].toUpperCase();
			}
		arr2.push(temp);
	}
	for (var i = 0; i < arr2.length; i++) {
		arr3.push(arr2[i].join(""));
	}
	return arr3.join(" ");
}
