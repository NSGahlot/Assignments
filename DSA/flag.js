const a = [1, 2, 3, 5, 4];

function hasDuplicate(arr = []) {
  let isDuplicate = false;
  for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        isDuplicate = true;
        break;
      }
    }
  }
  return isDuplicate;
}

console.log(hasDuplicate(a));
