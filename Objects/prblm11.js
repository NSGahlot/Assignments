var naam = "narendra"; // n=2, a=2, r=2, e=1, d=1, // 8

var details = {}; // yeh mera object hai 

for(var i=0; i<naam.length; i++)
{
       var char = naam[i];
       //console.log(char);
      // console.log(details[char]);  yaha pe (details object) hai or (char key) hai aur hume aab value chaiye.
       
       if(details[char] == undefined)
       {
            details[char] = 1
       }

       else
       {
          details[char] +=1
       }

}

console.log(details);