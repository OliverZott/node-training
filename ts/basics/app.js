"use strict";
const inputField1 = document.getElementById("inputField1");
const inputField2 = document.getElementById("inputField2");
const buttonElement = document.querySelector("#addButton");
const numResultes = [];
const strResults = [];
function add(val1, val2) {
    // Not working because of parsing on call below
    if (typeof val1 === "string" && typeof val2 === "string") {
        return val1 + " " + val2;
    }
    if (typeof val1 === "number" && typeof val2 === "number") {
        return val1 + val2;
    }
    return "Invalid input types";
}
function printResult(resultObj) {
    console.log("Result from button click: " + resultObj.val);
}
buttonElement.addEventListener("click", () => {
    const value1 = inputField1?.value;
    const value2 = inputField2?.value;
    const result = add(+value1, +value2);
    numResultes.push(result);
    const result2 = add(value1, value2);
    strResults.push(result2);
    console.log("Number result from button click: " + result);
    console.log("String result from button click: " + result2);
    console.log(numResultes);
    console.log(strResults);
    printResult({ val: +result, timestamp: new Date() });
});
// Generic type example:
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(42);
    }, 3000);
});
myPromise.then(result => {
    console.log("Promise resolved with value: " + result);
});
// alternative async/await syntax
async function waitForPromise() {
    console.log("Start");
    await new Promise(resolve => setTimeout(resolve, 4000));
    console.log("Done"); // logs after 2s
}
waitForPromise();
console.log("I run immediately!"); // logs first
//# sourceMappingURL=app.js.map