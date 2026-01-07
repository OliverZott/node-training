const myName = "Olli";
const myAge = 42;
let hasHobbies = true;

// prefered for short callbacks or when you intentionally want lexical this
const summarizeUserArrow = (userName, userAge, userHasHobbies) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    ", and the user has hobbies: " +
    userHasHobbies
  );
};

function summarizeUserClassic(userName, userAge, userHasHobbies) {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    ", and the user has hobbies: " +
    userHasHobbies
  );
}

console.log(summarizeUserArrow(myName, myAge, hasHobbies));
console.log(summarizeUserClassic(myName, myAge, hasHobbies));

// Demo: `this` behavior (arrow vs classic)
const person = {
  name: "Anna",
  sayClassic: function () {
    console.log("classic this.name =", this.name);
  },
  sayArrow: () => {
    console.log("arrow this.name =", this.name);
  },
};

person.sayClassic();
person.sayArrow();

// Demo: arguments vs rest parameters
function classicArgs() {
  console.log("classic arguments:", arguments);
}
const arrowArgs = (...args) => {
  console.log("arrow args via rest:", args);
};

classicArgs(1, 2, 3);
arrowArgs(1, 2, 3);
