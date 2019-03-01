var Converter = {
  toAscii: function (hex) {
      hex  = hex.toString();
	    var str = '';
	    for (let i = 0; i < hex.length; i += 2) {
	  	str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	}
	return str;
  },
  toHex: function (ascii) {
	var arr = [];
	for (let i = 0; i < ascii.length; i ++)
     {
		var hex = Number(ascii.charCodeAt(i)).toString(16);
		arr.push(hex);
	 }
	return arr.join('');
  }
}
