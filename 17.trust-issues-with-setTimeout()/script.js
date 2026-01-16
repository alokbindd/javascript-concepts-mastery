// 1. Why we have trust issues with setTimeout?
// let see with example
console.log("Start")

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End")

// millions of lines take to run upto 10sec

// output:
// Start
// End
// Callback

// as we know when js will run
// 1. it will create GEC and push into call stack to execute.
// 2. as js hit first line of code it print Start , move to next line
// 3. js see it is a setTimeout callback function it register in the webapi environment with attaced timer and moves to next line without waiting for 5 seconds. as js does not wait for anyone.
// 4. as it reached the last line it print End.
// 5. after this cb funtion is pushed in the callback queue waiting for eventloop
// 6. event loop continously montior the call stack as soon as the End is printed and GEC is finsihed execution.
// 7. event loop take the call back function from the queue and push into call stack.
// 8. atlast it get excuted and print Callback.

//2. but if what if there are more LOC in GEC that takes upto 10sec or more than what is the purpose attached timer of 5sec with settimeout funtion. So here Callback funtion has to wait for more than 5 sec even if its timer expires.
// so the cb function gets the chance to excute after 10sec unless the eventloop found call stack empty.

// For better understanding lets see a example

console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 5000);

console.log("End");

let Starttime = new Date().getTime();
let endtime = Starttime;
while(endtime < Starttime + 10000) {
    endtime = new Date().getTime()
}

console.log("while expires")

// 3. what if (delay funtion for 0 sec)we put 0 sec in place of 5000s thus it will print callback before end is printed.
// example
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
}, 0);

console.log("End");

// output
// Start
// End
// Callback

// here in above example even though the timer is 0 ms, since its is callback function so its need to go through all queue process to get into call stack to excute, it means the cb function will registered in the webapi and the pushed into cb queue then evenloop takes out cb function once it finds the call stack empty and push into call stack, where it get executed.

// it can be used where we have to differ the code.
console.log("Start");

function cb() {
    console.log("Callback");
};

setTimeout(cb,0);

console.log("End");

// like the cb is something that we want to print at last page. 