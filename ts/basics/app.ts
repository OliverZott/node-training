const inputField1 = document.getElementById("inputField1") as HTMLInputElement;
const inputField2 = document.getElementById("inputField2") as HTMLInputElement;
const buttonElement = document.querySelector("#addButton")!;

const numResultes: number[] = [];
const strResults: string[] = [];

type NumOrString = number | string;
type MyObjType = { val: number; timestamp: Date };

interface ResultObj {
    val: number;
    timestamp: Date;
}

function add(val1: NumOrString, val2: NumOrString): NumOrString {
    // Not working because of parsing on call below
    if (typeof val1 === "string" && typeof val2 === "string") {
        return val1 + " " + val2;
    }
    if (typeof val1 === "number" && typeof val2 === "number") {
        return val1 + val2;
    }
    return "Invalid input types";
}

function printResult(resultObj: ResultObj) {
    console.log("Result from button click: " + resultObj.val);
}

buttonElement.addEventListener("click", () => {
    const value1 = inputField1?.value;
    const value2 = inputField2?.value;

    const result = add(+value1, +value2);
    numResultes.push(result as number);

    const result2 = add(value1, value2);
    strResults.push(result2 as string);

    console.log("Number result from button click: " + result);
    console.log("String result from button click: " + result2);
    console.log(numResultes);
    console.log(strResults);
    printResult({ val: +result, timestamp: new Date() });
});

// Generic type example
//  async/await example
let myPromise = new Promise<number>((resolve, reject) => {
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
