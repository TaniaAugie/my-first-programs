//Creating a Promise: Promises are created using the Promise constructor, which takes a function as an argument. This function, called the executor, accepts two parameters: resolve and reject.

function SolveProblem() {
  return new Promise((resolve, reject) => {
    let solve = true;
    if (solve) {
      resolve("Problem is solved");
    } else {
      reject("There is error while solving problem");
    }
  });
}

// to receive data from the promise, use then method and to in case of error u can catpure the error by using catch method.

SolveProblem()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
