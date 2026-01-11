//1. Function Statement Aka Function Declaration
function a(){
    console.log("a called")
}
a();

// this how funtion statement looks

// 2. Funtion Expression
// b();
var b = function () {
    console.log("b called")
}
b();

// using a function as value is known as funtion expression

// the difference between the above 2 comes during hoisting, the function statement can be called before fuction declaration whereas the function expression cant be called before declaration as it treated as variable until it hit the function declartion line. 

// 3. Anonymous Function 
// function (){
    
// }

// a funtion without a name is called as anonymous funtion and if you run it withount a name it gives you a syntax error as funtion statement required a name. so usally the anonymous funciton are used a value stored in var 

// 4. Named Function Expression

var c = function xyz() {
    console.log("c called")
}

c();
// xyz(); this is a reference error since it is not in global scope of current program
// A named funtion expression is nothing but naming a anonymous function which is used a value.

// 5. Difference Between parameters and Arguments
//this where parameters are placed which is used to recieved arguments to pass in th funtion
var d = function (param1,param2) { 
    console.log(param1,param2)
}

d("hello","world"); // this is where arguments are passed
d(a,b);
d(
    function x() {

    },
    function y() {

    }
)
// we can even pass a funtions as arguments to another funtion

// 6. First Class Function

function a(){
    return function b() {

    }
}

console.log(a());

// so the abilty of function being used as value, passing a funtion to another function and a funtion returning a another function is known as First Class Function also known as First class citizen