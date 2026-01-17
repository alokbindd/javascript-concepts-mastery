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

function findsum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];        
    }
    return sum;
}

console.log(findsum(arr))

// using reduce

const output = arr.reduce(function (acc,curr) {
    acc = acc + curr;
    return acc
},0)

console.log(output);

// example of finding max
// tradition way

function findMax(arr){
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));

// using reduce

const output1 = arr.reduce( function (max,curr) {
    if (curr >  max){
        max = curr;
    }return max
},0);

console.log(output1)


// Tricky examples 

const users = [
    {firstname : "Alok" , lastname: "Bind", Age: 22},
    {firstname : "Niraj" , lastname: "Kewat", Age: 24},
    {firstname : "Dhiraj" , lastname: "Kewat", Age: 22},
    {firstname : "Shekhar" , lastname: "Tiwari", Age: 26},
    {firstname : "Narendra" , lastname: "Modi", Age: 78},
    {firstname : "Elon" , lastname: "Musk", Age: 50},
    {firstname : "Joe" , lastname: "Biden", Age: 78},
]

// map function to print first and last name

const fullname = users.map((x) => x.firstname + " " + x.lastname);
console.log(fullname);

// reduce funtion to know ages and their count

const agecount = users.reduce(function(acc,curr){
    if(acc[curr.Age]){
        acc[curr.Age]++
    }
    else {
        acc[curr.Age] = 1;
    }
    return acc
},{})

console.log(agecount)

// filter funtion to name of all people whose age is lesson than 30

const youngusers = users.filter(function (x) {
    if(x.Age < 30){
      return  x;
    }
}).map(function (x){
    return x.firstname
})

console.log(youngusers)

// with arrow function

const output5 = users.filter((x) => x.Age < 30 ).map((x) => x.firstname);
console.log(output5)

// above an example of chainig map,filter,reduce
// reduce funtion to find first name whose age less than 30

const output6 = users.reduce(function(res,curr){
    if(curr.Age<30) {
       res.push(curr.firstname)
    }
    return res;
},[])

console.log(output6)