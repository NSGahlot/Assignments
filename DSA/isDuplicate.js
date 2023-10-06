function isDuplicate(element, result)
{
     for(var i=0; i<result.length; i++)
     {
        if(element===result[i])
        {
            return true;
        }
     }
     return false;
}


function findUnion(arr1, arr2)
{
  const result = [];
  
  for(var i=0; i<arr1.length; i++)
  {
    if(!isDuplicate(arr1[i],result))
    {
        result.push(arr1[i]);
    }
  }

  for(var i=0; i<arr2.length; i++)
  {
    if(!isDuplicate(arr2[i],result))
    {
        result.push(arr2[i])
    }
  }
 return result;
}

const A1 = [1,2,3,4,5,6,7];
const A2 = [1,2,7,6,8,9,4];

console.log(findUnion(A1 , A2));
