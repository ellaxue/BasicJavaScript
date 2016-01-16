function callFunction(whichDoor)
{
    logic(20, 39);//logical function
    data_types();//varies data types
    find_sum(10, 20);//sum of two values
    sum_string('coding', 'is fun');//sum of two strings
    myBio();//informatin about me
    math(12, 32, "+");//function to do math
    check(30); // check if value is less than 10
    check_string("test");//check if strings are the same
}
// 3.   Different data types
// 4.   Arrays
function data_types()
{
    var a = 1
    var b = 3
    var sum = a + b
    var message = 'my favorite day is ';
    var favorite_day = ['Mondays', 'Tuesdays', 'Weekends','fridays'];
    console.log( a + " + " + b + " = " + sum )
    console.log(message + favorite_day[3])
}
function check(value)
{
    var num = value;
    if(num < 10 )
    {
        console.log("the num is less than 10");
    }
    else {console.log("The num is " + num)};

}
function sum_string(str1, str2)
{
    console.log('combine two strings ' , str1 + str2);
}
function check_string(test_val)
{
    var stored_var= "test";
    if (stored_var = test_val)
    {
        console.log ("Two strings are the same");
    }
    else
    {
        console.log ("Two strings are different");
    }
}
// Logic
function logic(p1,p2)
{
    var num1 = p1;
    var num2 = p2;

    if (num1 < num2)
    {
        console.log( num1 + ' is less than ' + num2);
    }
    else
    {
        console.log( num2 + ' is less than ' + num2);
    }
}
// 7.	Functions
function find_sum1 (p1, p2)
{
	return p1 + p2;
}
// 8.	Write 3 different functions that take input and return something via the console or an alert.

function find_sum (p1, p2)
{
    console.log('the sum =',p1+p2);
}
function myBio()
{
    var myInfo = {firstName: 'Ella', LastName: 'Xue', interest: ["coding","singing",'c++']};

    console.log('My name is:' + myInfo.firstName + " " + myInfo.LastName);
    console.log('My interests are: ' + myInfo.interest[0] + ", " + myInfo.interest[1]);
}
function math (p1, p2, op) {
    var value;
    if (op == "+") {
        value = String(p1+p2);
    } else if (op == "-") {
        value = String(p1-p2);
    } else {
        value = "Not acceptable";
    }
    window.alert('i can do math ' + p1 + op +  p2 + " = " + value);
}
function getPrize(door)
{
    if(door == "left")
    {
        alert("Congrats, you win a Million dollar prize");
    }
    else if(door == "right")
    {
        alert("Contrats, you receive a dime");
    }
} 