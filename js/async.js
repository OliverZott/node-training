// oldschool:async with callback funciton
setTimeout(() => {
  console.log("Timer is done!"); // callback function
}, 5);

console.log("Hello!");
console.log("Hi there!");

// modern: async with Promise
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    // async code
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  fetchData()
    .then(done1 => {
      console.log(done1);
      return fetchData();
    })
    .then(done2 => {
      console.log(done2);
    });
}, 1500);
