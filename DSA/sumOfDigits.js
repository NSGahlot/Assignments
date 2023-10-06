function sumOfDigits(arr)
{
  let sumDigits = 0;
  for(let i =0; i<arr.length; i++)
  {
    const digits = arr[i].toString();
    // console.log(digits);
    for(let j=0; j<digits.length; j++)
    {
      sumDigits = sumDigits + Number(digits[j]);
    }
  }
  return sumDigits;
}

console.log(sumOfDigits([1, 22, 4, 541]))