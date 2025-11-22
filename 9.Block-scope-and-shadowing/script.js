//1. Block
{
    // this is a block
    // code inside the curly brackets are called as block
}

// Block example
if (true){
    /*compund statement are written inside this block
    we write multiple statement in block to get a single statement where js expected such as if-else,loops, function etc.
    example:*/
    var a =10;
    console.log(a);
}

{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a)
    console.log(b)
    console.log(c)
}
// The block finishes execution and its lexical environment is no longer accessible
// Block values are stored in separate memory than the global ,they are stored in block scope (the reason let and const are called as block scope)

console.log(a)
// console.log(b) // throw reference error because the let b is declared in block  and we are trying to access out of it 
// console.log(c)

// let and const variables are stored in block space, so it is called block-scoped but var is function-scop ,In global scope, var variables become properties of the global object (window or globalThis)

// 2.Shadowing

/* Variable shadowing occurs when a variable is declared in the inner scope has the same name as a variable in an outer scope, effectively hiding the outer variable within that scope*/

// example one (var)
var a = 40; //outer variable
console.log(a)
{
    var a = 10; //inner variable
    let b = 20;
    const c = 30;
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)

// In the above example,  when the script run a global execution was created var was allocated in global memory space and whereas let,const was allocated separately in other memory space reserved for them called as block. 
// so here the inner variable shadow also modifed the outer variable to get 10 as output because they both were pointing to same memory location i.e in global scope
// variables declared with var are function-scoped or globally scoped, but they are not block-scoped like variables declared with let or const. So, the var a declared inside the block {} will override the outer var a declaration

// example two (let)
let b = 40; //outer variable
console.log(b)
{
    var a = 10; 
    let b = 20; //inner variable
    const c = 30;
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(b)

// In the case of let, here 3 scope was created global (var a),script(let b),block({let b ,const c}) so block scope's inner variable  value is preserved in that block so its inner block prints 20 whereas the script scope print 40 as output because both block are have separeted memory space plus they both have required identifier 

// example three (const)

// similar for the const also

const c = 40; //outer variable
{
    var a = 10; 
    let b = 20; //inner variable
    const c = 30;
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(c)

//3. Illegal shadowing

// shadowing is NOT allowed when var shadows let
let a = 10;
{
    var a = 20;
}

// Illegal shadowing
// 'var a' inside the block gets hoisted to the global scope
// and tries to redeclare the existing global 'let a'
// Redeclaring a 'let' with 'var' is not allowed → SyntaxError

let a = 10;
function x() {
    var a = 20;
    console.log(a)
}

// this is legal , Function scope is separate, but this is NOT shadowing → it is variable masking inside function scope.

// Shadowing is allowed when let shadows var

var x = 100;
{
    let x =20;
    console.log(x)
}
console.log(x)


var x = 100;
{
        const x =20;
        console.log(x)
    }
    console.log(x)
    
// as let simliarly the const can shadow var but a var cannot shadow const
// 4. Lexical Block Scope
const e = 100;
{
    const e = 200;
    {
        const e = 300;
        console.log(e)
    }
    console.log(e)
}
console.log(e)

// so the above example follows the lexical scope chain concepts it will accessed nearest required value of variable


