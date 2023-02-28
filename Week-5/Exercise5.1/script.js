/* ---------------------------------------------------------------*/

//Function with Promise
function doTask1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("a .Task 1 completed");
    }, 1000);
  });
}

function doTask2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("b. Task 2 completed");
    }, 1000);
  });
}

function doTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("c. Task 3 completed");
    }, 1000);
  });
}

/* ---------------------------------------------------------------*/

// Async/Await
async function runTasksAsync() {
  try {
    console.log("1. Using Async/Await:-");
    const result1 = await doTask1();
    console.log(result1);
    const result2 = await doTask2();
    console.log(result2);
    const result3 = await doTask3();
    console.log(result3);
  } catch (error) {
    console.error(error);
  }
}
runTasksAsync();

/* ---------------------------------------------------------------*/

//Generator

function* runTasksGenerator() {
  try {
    const result1 = yield doTask1();
    console.log(result1);
    const result2 = yield doTask2();
    console.log(result2);
    const result3 = yield doTask3();
    console.log(result3);
  } catch (error) {
    console.error(error);
  }
}

setTimeout(() => {
  const taskRunner = runTasksGenerator();
  const promise = taskRunner.next().value;
  promise
    .then((result1) => {
      console.log(`2. Using Generators:- `);
      taskRunner.next(result1).value.then((result2) => {
        taskRunner.next(result2).value.then((result3) => {
          taskRunner.next(result3);
        });
      });
    })
    .catch((error) => {
      taskRunner.throw(error);
    });
}, 3000);

/* ---------------------------------------------------------------*/
