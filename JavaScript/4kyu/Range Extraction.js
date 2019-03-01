function solution(list){
  var arr = [];
  for (let i = 0; i < list.length; i = j + 1) {
    arr.push(list[i]);
    for (var j = i + 1; j < list.length && list[j] == list[j-1] + 1; j++);
    j--;
    if (i == j) {
      arr.push(",");
    } else if (i + 1 == j) {
      arr.push(",", list[j], ",");
    } else {
      arr.push("-", list[j], ",");
    }
  }
  arr.pop();
  return arr.join("");
}
