function callBhaiya(position)
{
      if(position<0 || position>3 || position == undefined)
      {
        return null; // null is for developer 
      }

      var arr = ["Babuji", "Kaleen Bhaiya", "Munna Bhaiya", "Bablu Bhaiya"];
      return arr[position];
}

var y = callBhaiya(1);

if(y == null)
{
    console.log("Invaalid bhaiya ji value");
}

else
{
    console.log(y);
}