var firstname =prompt("Enter First Name");
var lastname =prompt("Enter Last Name");


console.log(firstname);
console.log(lastname);



var maths= +prompt("Enter Maths Marks");
var urdu= +prompt("Enter Urdu Marks");
var pst= +prompt("Enter Pst Marks");
var bio= +prompt("Enter Bio Marks");
var physics= +prompt("Enter Physics Marks");
var isl= +prompt("Enter Isl Marks");
var english= +prompt("Enter English Marks");

var total=maths+urdu+pst+bio+physics+isl+english

var per=(total/700)*100




console.log(maths);
console.log(urdu);
console.log(pst);
console.log(bio);
console.log(physics);
console.log(isl);
console.log(english);

console.log(total);
console.log(per);


if(per>=80)
{
    console.log("grade = A+");
}
else if(per>=80 && per >=70)
{
    console.log("grade = A");
}
else if(per>=70 && per >=60)
{
    console.log("grade = A");
}
else if(per>=50 && per >=60)
{
    console.log("grade = A");
}
else
{
    console.log("ivalid grade");
}




var age =prompt("Enter Your Age");
var studentcard =prompt("Student Card");



if(
    age >=18 && studentcard == true
)
{
    console.log("Allow The Students");
}
else
{
    console.log("Not Allow");
}


var officer = false;
var officer = true;


if(officer == true) 
{
    console.log("document submitted");
}
else if(assistant == true)
{
    console.log("document submitted to assistant");
}
else
{
    console.log(deny);
}