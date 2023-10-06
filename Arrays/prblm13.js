// Given an Array of numbers
// Delete last three numbers
// Print numbers array using loop

var numbers = [1,2,3,4,5,6];
for(i=0; i<(numbers.length-3); i++)
{
    console.log(numbers[i]);
}

/* 2nd Way
for(j=1; j<=3; j++)
{
    numbers.pop();
}*/