function dutchNationalFlag(arr = []) {
  let low = 0;
  let mid = 0;
  let right = arr.length - 1;

  while (mid <= right) {
    if (arr[mid] === 0) {
      [arr[low], arr[mid]] = [arr[mid], arr[low]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[right]] = [arr[right], arr[mid]];
      right--;
    }
  }
  return arr;
}

console.log(dutchNationalFlag([0, 2, 1, 2, 0]));
