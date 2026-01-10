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

function outest(){
    var c = 20
    function outer(b){
        function inner(){
            console.log(a,b,c)
        }
        let a = 10
        return inner;
    }
    return outer
}

var close = (outest())("Hello world");
close();

// 