/*  1.what is the closure in js?
A closure is the combination of function with its lexical environment
*/

// example

// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a)
//     }
//     return inner;
// }

// 2. what is the use of double parenthesis
// outer()(); //the use of 2 parenthesis is for calling the innner function as outer function return it.

// var close = outer();
// close();

// will work same as double parenthesis 

// 3. what if we change var a with let a

// function outer(){
//     function inner(){
//         console.log(a)
//     }
//     let a = 10
//     return inner;
// }

// var close = outer();
// close();

//  it will still form a closure even if it blocked scope.

// 4. Are function parameters closed over? what if it take parameter b 

// function outer(b){
//     function inner(){
//         console.log(a,b)
//     }
//     let a = 10
//     return inner;
// }

// var close = outer("Hello world");
// close();

// will take parameter b and print hello world as outer function forms closure

// 5. what if outer funtion is nested inside a outest function, Relation of Scope Chain and Closures

// function outest(){
//     var c = 20
//     function outer(b){
//         function inner(){
//             console.log(a,b,c)
//         }
//         let a = 10
//         return inner;
//     }
//     return outer
// }

// var close = (outest())("Hello world");
// close();

// 6. Conflicting name Global variables in JS, what if there is one more let a outside

// function outest(){
//     var c = 20
//     function outer(b){
//         function inner(){
//             console.log(a,b,c)
//         }
//         // let a = 10
//         return inner;
//     }
//     return outer
// }
// let a = 30;
// var close = (outest())("Hello world");
// close();

// in this case due to closure and scopechain it will print 10 because the inner function forms closure with inner let a and suppose if there is no let a present in innerfunction it  will do more  deep in scope chain so it will then print 30

// 7. Advantage of closure, one of the is Data Hiding & Encapsulation in JavaScript

// example
// function counter(){
//     var count = 0
//     function incrementcount(){
//         count++
//     }    
// }
// console.log(count) 
// in this case we will get a reference error as the count is inside the closure so it cannot be outside of the function. This is data hiding and encapsulation

// example
// function counter(){
//     var count = 0;
//     return function incrementcount(){
//         count++;
//         console.log(count); 
//     }
// }

// var counter1 = counter();
// counter1();
// counter1();
// counter1();
// counter1();

// var counter2 = counter();
// counter2();
// counter2();
// counter2();
// counter2();

//counter 2 will not touch the counter 1 has it creates a new independent copy or counter

// 8. a goodway to write counter using constructor

// function Counter(){
//     var count = 0;
//     this.incrementCount = function () {
//         count++;
//         console.log(count);
//     }
//     this.decrementCount = function () {
//         count--;
//         console.log(count);
//     }
// }

// var counter1 = new Counter();
// counter1.incrementCount()
// counter1.incrementCount()
// counter1.decrementCount()

// 9. Disadvantage of closure

// There could be overconsumption of memory as the closure create a lot of garbage value if lot of closure are formed and it is not collected until the program is finished.

// 10. what is garbage collector in js?
// A garbage collector in js is used to free up the memory space by taking out the unused variable which is no longer needed.

// 11.Relation between Garbage Collection, Memory leaks, and Closures?

// example
// function a(){
//     var x = 10
//     return function b(){
//         console.log(x)
//     }
// }

// var y = a();
// // ......
// // ......
// // ......
// // ......
// // ......
// y();
// Above like the value of x is not freeup memory as it is stored in now in y so when we call y funtion after many lines it still hold value of x 


// Example of Smart Garbage collection by V8 JS Engine in Chrome

function a(){
    var x = 10, z = 20; 
    return function b(){
        console.log(x)
    }
}

var y = a();
// ......
// ......
// ......
// ......
// ......
y();

// by smart garbage collection the z is removed from memory which is no longer needed