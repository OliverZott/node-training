const hobbies = ["Mountianbike", "Reading"];
const person = {
  name: "Olli",
};

// prefered:  immutability with rest/spread (copies + changes)

// spread operator
const copiedHobbies = [...hobbies, "Cooking"];
console.log("copiedHobbies:", copiedHobbies);
const olli = { ...person };
console.log("olli:", olli);

// rest operator in function parameters
const toArray = (...args) => {
  return args;
};
console.log(toArray(1, 2, 3, 4));

// copy with slice
const slicedHobbies = hobbies.slice(1);
console.log("slicedHobbies:", slicedHobbies);

// mistake: nested array
const nestedHobbies = [hobbies];
console.log("nestedHobbies:", nestedHobbies);
