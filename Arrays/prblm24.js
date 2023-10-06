// calculate the average of sum of even numbers

/*var marks = [25, 30, 28, 40, 48, 41, 50];
var sum = 0;
var count = 0;
for(var i = 0; i<marks.length; i++)
{
    if(marks[i]%2==0)
    {
        sum = sum + marks[i];
        count++;
    }
}
var average = sum/count;
console.log(average);*/

var marks = [25, 30, 28, 40, 48, 41, 50];
var sum = 0;
var count = 0;
for(var i=0; i<marks.length; i++)
{
    if(marks[i]%2!=0)
    {
        sum = sum + marks[i];
        count++;
    }
}
var average = sum/count;
console.log(average);