const hobbies = ["Mountianbike", "Reading"];

hobbies.push("Programming");

hobbies.forEach(hobby => {
  console.log(hobby);
});

const newHobbies = hobbies.map(hobby => "Hobby: " + hobby);

console.log(hobbies);
console.log(newHobbies);
