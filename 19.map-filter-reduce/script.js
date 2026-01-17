// 1. Map()
// map function iterate over all element in array or list in a passed function to do task and return a new list or array as output
// example

const arr = [2,5,3,8,10];

function double(x) {
    return x *2;
};

function triple(x) {
    return x*3;
};

console.log(arr.map(double));
console.log(arr.map(triple));
console.log(arr.map( (x) => x.toString(2))) // arrow funtion without name ,return , curly braces

// 2. Filter
// This function filter the given array on given function or condition.

function isOdd(x) {
    return x % 2;
};

function isEven(x) {
    return x % 2 === 0;
};


console.log(arr.filter(isOdd));
console.log(arr.filter(isEven));
console.log("Greater than 4:",arr.filter((x) => x >4));

// 3.Reduce
// this function takes 2 argument and gives the output as a single value.

// example sum of array
// tradition way

function sum(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];        
    }
    return sum;
}

console.log(sum(arr))

// using reduce

console.log(arr.reduce(function (acc,curr) {
    acc = acc + curr;
    return acc
},0))

