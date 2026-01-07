const person = {
  name: "Olli",
  age: 42,

  // not knowing this of object scope but caller scope
  greet2: () => {
    console.log("Hi, I am " + this.name + " my age is " + this.age);
  },

  // prefered to use method shorthand or function expressions
  greet3() {
    console.log("Hi, I am " + this.name);
  },

  greet: function () {
    console.log("Hi, I am " + this.name);
  },
};

person.greet();
person.greet2();
person.greet3();
