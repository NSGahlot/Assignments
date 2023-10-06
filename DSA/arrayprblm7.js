function twoSum(arr, target) {
  var i = 0;
  var j = arr.length - 1;
  while (i < j) {
    var sum = arr[i] + arr[j];
    if (sum === target) {
      return [arr[i], arr[j]];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return -1;
}
var arr = [1, 2, 3, 4, 5];
console.log(twoSum(arr, 9));
