const person = {
  name: "Olli",
  age: 42,
  hobbies: ["Sports", "Cooking"],
};

const { age, ...rest } = person;
console.log("age:", age);
console.log("rest:", rest);
