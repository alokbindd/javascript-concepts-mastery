// setTimeout-closures

// CASE 1 — Basic Closure with setTimeout
function x() {
    var i = 1;
    setTimeout(function (){
        console.log(i)
    }, 3000);
    console.log("Hello world")
}
x();

// here first thing javascript dont wait for anyone
// the js engine start the excecution of setTimeout function also set the timer and move on to the next line, in the background it forms a closure along with its lexical enironment. so the callback funtion remebers the var i reference and prints the output within given time

// CASE 2 — Using var inside setTimeout (Problem)
// what if we have to print number from 1 to 5 with respect to seconds

function x() {
    for(var i = 1; i <= 5; i++){
        setTimeout(function () {
            console.log(i)
        }, i * 1000);
    }
    console.log("Hello world")
}
x(); 

// output
// Hello world
// 6
// 6
// 6
// 6
// 6

// here we can see the output we get 6 as 5 time not a number series from 1 to 5 why?
// var i is declared once in function scope.
// All 5 callbacks share the same reference to the same i.
// By the time callbacks run, the loop has finished → i = 6.
// So all callbacks print 6.

// CASE 3 — Using let inside setTimeout (Solution)

function x() {
    for(let i = 1; i <= 5; i++){
        setTimeout(function () {
            console.log(i)
        }, i * 1000);
    }
    console.log("Hello world")
}
x();


// let is block-scoped and creates a NEW `i` for each iteration.
// Each iteration of the loop gets its own lexical environment.
// Therefore, each callback prints the correct value (1 to 5).


// CASE 4 — Without let, using a closure function (Alternative Solution)

function x() {
    for(var i = 1; i <= 5; i++){
        function close(x) {
            setTimeout(function () {
                console.log(x)
            }, x * 1000);
        } close(i);
    }
    console.log("Hello world")
}
x();

// close(i) passes the current value of i as argument `x`.
// Each call to close() creates a NEW closure with its own copy of x.
// The callback inside setTimeout remembers the correct x for each iteration.
