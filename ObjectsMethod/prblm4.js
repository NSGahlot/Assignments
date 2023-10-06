var student = {
      name : "Shanu",
      grade : "X",
      section : "A",
      maths : 30,
      science : 40,
      history : 50,
      biology : 60

}

for(var nani in student)
{
    if(nani === "science")
    {
        break;
    }
    console.log(nani, "-", student[nani]);
}