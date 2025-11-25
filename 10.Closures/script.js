// closures in js
// a closure is the combination of function budled with its lexial environment
// in other words a closure gives you access to the outer funtion's scope from an inner  function
// example one

// function x(){
//     var a = 10;
//     function y() {
//         console.log(a)
//     }
//     y();
// }
// x();

// example 2

function x(){
    var a = 10;
    // return function y() { // one of the way to return function in js 
    function y() {
        console.log(a)
    }
    a = 200; // updated value
    return y; // we can also return whole function like this in js
}
var z = x();
// so above after x funtion is excuted and vanish from GEC but it still remembers the reference it was pointing to
console.log(z)

/* {
     thousand of loc
} */


z(); // suppose this funtion is called after many loc still, the returned function y remembers its lexical environment so it print 200 as output

// example 3
function z () {
    var b = 900;
    function x(){
        var a = 10;
        function y() {
            console.log(a,b)
        } 
        y();
    } 
    x();
} 
z();

/*
In this example, 'y' is nested inside 'x', which is nested inside 'z'.
Due to closure + lexical scope:
- 'y' can access 'a' from function x()
- 'y' can also access 'b' from function z()
This is possible because JS looks outward through its scope chain.
*/
