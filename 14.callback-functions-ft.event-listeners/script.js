//1. what is callback funtion in JS

// when a funtion is passed as arguments to another function is called as callback funtion, this funtion is called back by the outerfunction in which it is passed.
// example

setTimeout(function () {
  console.log("Timer");
}, 5000);

function x(y) {
  console.log("X");
  y();
}

x(function y() {
  console.log("Y");
}); // here funtion y is a callback funtion

// 1. as we know javascripts is a synchronous and single threaded language.
// 2. the Javascript does not wait for anyone, time and tide.
// in the above example 
// when js engine hit the setimeout funtion it starts the execution of callback funtion and the and attached the timer with it and move on the next line, it does not wait for compeletion of the funtion ie the time mention with it.
// using call back funtion gives the ability to perform asynchronous task in JS.
// its outwill be:
//  X
//  Y
//  Timer //printed after 5 seconds.

// 2. what is main thread?
// when js runs a code it execuute all its operation in a call stack this is called as main thread as js has only one call stack.
// when the above example code runs, as call stack finish after few second anonymous task that is settimeout as async after 5 sec

// 3. what is main thread blocking.
// if a function has multiple operation to run that could take more time to execute also consuming memory and keeps busy the call stack, as js has only one call stack in that case this is known as main thread blocking.

// so because of first class funtion and callback we can perform asynchronous task

// Creating an event listener
// document.getElementById("ClickMe").addEventListener("click", function xyz(){
//     console.log("Button Clicked");
// });

// this is again a callback funtion it is called when clicked.

//4. closure along with event listener (interview question)
// for data hiding like count we use closures

function attachEventListener(){
    let count = 0
    document.getElementById("ClickMe").addEventListener("click", function xyz(){
        console.log("Button Clicked",++count);
    });
};

attachEventListener();
// by wrapping the callback funtion forms a closure with the count and remembers the memory reference of it.

// Garabage collection and removeEventlistener (interview question)

// as in above example click eventlistener is hold the count even if the js is not running but the button has to hold it because we never know when user will click on button. so this make eventlistner heavy that we should remove unused eventlistener to optimize our code