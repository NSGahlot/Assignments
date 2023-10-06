// find the sun of even no. in array

var marks = [25, 30, 28, 40, 48, 41, 50];
var sum = 0;
for(var i = 0; i<marks.length; i++)
{
    if(marks[i]%2==0) // marks[o]=25(F), marks[1]=30(T), marks[2]=28(T), marks[3]=40(T), marks[4]=48(T), marks[5]=41(F) & marks[6]=50(T)
    {
        sum = sum + marks[i]; 
        // 30+28+40+48+50 = 196
    }
}
console.log(sum);