var arr = [10, 3, 5, 6, 20];
for(var i=0; i<arr.length; i++){
  for(var j= i+1; j<arr.length; j++){
    if(arr[i]<arr[j]){
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(arr);