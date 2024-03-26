/* Prmomise in simple term

An object that manages asynchronous operation.

Complete this task in order.

Walk the dog
clean kitchen
take out the trash */

function walkDog(callback) {
  setTimeout(() => {
    console.log("You walk the dog dog 🐕");
    callback();
  }, 1500);
}

function cleanKitchen(callback) {
  setTimeout(() => {
    console.log("You clean kitchen 🔪");
    callback();
  }, 2500);
}

function takeOutTrash(callback) {
  setTimeout(() => {
    console.log("You takeout trash 🚜");
    callback();
  }, 500);
}

// if there is lot of callback, then its the callback hell and this is not the right way of doing async work.

walkDog(() => {
  cleanKitchen(() => {
    takeOutTrash(() => console.log("task is completed"));
  });
});

// Promise is the solution for callback hell

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You walk the dog 🐕");
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean kitchwn 🔪");
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You takeout trash 🚜");
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("the task is completed");
  });

// async await is better and cleaner way to write the promise.

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You walk the dog 🐕");
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You clean kitchen 🔪");
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You takeout trash 🚜");
    }, 500);
  });
}

async function workOrder() {
  const walkdog = await walkDog();
  console.log(walkdog);

  const clean = await cleanKitchen();
  console.log(clean);

  const trash = await takeOutTrash();
  console.log(trash);
  console.log("All the work is completed");
}

workOrder();
