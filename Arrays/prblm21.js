// Print the Maximum_Marks

/*var marks = [10, 15, 18, 90, 2];
var max_marks = -Infinity;
for(var i=0; i<marks.length; i++)
{
    if(marks[i]>max_marks)
    {
        max_marks = marks[i];
    }
}
console.log(max_marks);*/

var marks = [10, 15, 18, 90, 2];
var max_marks = marks[0];
for(var i=0; i<marks.length; i++)
{
    if(marks[i]>max_marks)
    {
        max_marks = marks[i];
    }
}
console.log(max_marks);
