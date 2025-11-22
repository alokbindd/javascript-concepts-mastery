//1.Var hoisting and declaration 
var a = 10;
console.log(a)
var a = 20;
console.log(a)

//2.let 

// console.log(b) 
// let identifier cannot be accessed before its intialization , it can only be accessed after the declaration of identifier. so basically the 'b' is in temporal dead zone it ends when it get intialized

let b = 10;

// let b = 10; 
// its give syntaxerror because 'a' has already been decalred, so "let" dont allow duplicate declaration with same name of identifier again if its already been declared
console.log(b) 

let c;
c = 30;
c = 40; // can be reintialized again
console.log(c)


// 3.const

const d = 40;
// d = 50; typeError assignment to constant
console.log(d)

// const e;
// it throws syntax error as 'missing intializer' because we cannot intialize the const after the declaration. a syntax error is violation of js syntax


// console.log(x)
// we got reference error because X is not defined , when accessing a variable that is not present in scope or memory result in reference error