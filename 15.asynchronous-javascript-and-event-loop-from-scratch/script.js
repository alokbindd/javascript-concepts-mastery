//1. How JS Engine Executes the Code using Call Stack
// example:
function a() {
    console.log("a")
};
a();
console.log("END")

//  the JavaScript engine executes code using a Call Stack. All JavaScript code is executed within this single-threaded call stack. When a function is invoked, an execution context is created and pushed onto the stack. Once the function finishes, its execution context is popped off the stack.
// in above when the script is run js engine creates a global execution context, it starts allocating memory to all var and funtions, when it encounter a(); it creates local execution context and put a(); in call stack, Call stack main job is to quickly execute the task as soon it received. once its a(); js engine moves to next line and print END and GEC is popped out.

// 2. what if a funtion want to wait? How does JavaScript perform async?
// javaScript, being single-threaded, needs a way to handle asynchronous tasks without blocking the main thread. This is where the browser environment comes into play. The browser provides "superpowers" beyond the JavaScript engine, such as setTimeout, DOM APIs, fetch, and local storage,location, console. These are collectively known as Web APIs.

// 3. Web APIs and the Global Object
// Web APIs are features provided by the browser that JavaScript can access. The browser exposes these APIs through the global object, which is window in the browser environment. For example, window.setTimeout or window.document.getElementById allow JavaScript to interact with browser functionalities.

// 4. How setTimeout Works Behind the Scenes 

console.log("Start")
setTimeout(function cb() {
    console.log("Callback");
},5000);
console.log("End")

// When setTimeout is called, the callback function is registered with the Web API, and a timer starts in the browser. The JavaScript engine does not wait for the timer to expire; it continues executing the rest of the code. Once the timer expires, the callback function is moved to the Callback Queue.

// 5.Event Loop and Callback Queue: 
// The Event Loop continuously monitors both the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop picks up the first function from the Callback Queue and pushes it onto the Call Stack for execution.

// 6. How Event Listeners Work

console.log("start");
document.getElementById("ClickMe").addEventListener("click", function cb() {
    console.log("Callback");
});
console.log("End");

// Similar to setTimeout, event listeners (e.g., button clicks) are registered with the Web APIs. When an event occurs, its associated callback function is placed in the Callback Queue.

// but why we need Event loop and callback Queue
// because if some user click the button multiple time the cb function registered in webapis are moved in cb queue one after and here the event loop looks if call stack is empty it push one cb function from queue then another.  

// 6. How fetch() function works
console.log("Start");

setTimeout(function cb() {
    console.log("Callback");
},5000);

fetch("https://api.netflix.com").then(function cbF(){
    console.log("CB netflix")
});

console.log("End")

// fetch() and MicroTask Queue: 
// The fetch() function is used to make network requests. Unlike setTimeout or event listeners, it returns a Promise. This promise handles the asynchronous nature of network calls. When fetch() is executed, the browser registers its callback function (the .then() part of the promise) within the Web APIs. The JavaScript engine proceeds with the rest of the code without waiting for the fetch request to complete.

// The MicroTask Queue: Once the network request initiated by fetch() is completed and data is returned, the callback function associated with the promise (e.g., inside .then()) does not go into the regular Callback Queue (also known as the Task Queue or Macrotask Queue). Instead, it goes into a separate queue called the MicroTask Queue.

// Higher Priority of MicroTask Queue: A critical distinction is that the MicroTask Queue has a higher priority than the Callback Queue. This means that any functions or callbacks placed in the MicroTask Queue will be executed first whenever the Call Stack becomes empty, before any functions from the Callback Queue.

// What constitutes MicroTasks: 
// The primary examples of microtasks are:
// Promises callbacks: All callback functions from .then(), .catch(), and .finally() methods of promises.
// Mutation Observer: Callbacks related to changes in the DOM.

// Event Loop's role with MicroTasks: 
// The Event Loop's job is still to continuously check if the Call Stack is empty. If it is, it first checks the MicroTask Queue. If there are any microtasks, it pushes them onto the Call Stack for execution until the MicroTask Queue is empty. Only then does it proceed to check the Callback Queue.

// Starvation of Callback Queue: 
// Due to the higher priority of the MicroTask Queue, it's possible for functions in the regular Callback Queue to experience starvation. This can happen if there's a continuous stream of microtasks being added to the MicroTask Queue. As long as the MicroTask Queue is not empty, the Event Loop will keep processing microtasks, and the tasks in the Callback Queue will not get a chance to execute.
