function fibonacci() {
  console.log(`The Fibonacci Series is:`);
  let a = 0,
    b = 1;

  return {
    next: function () {
      let f = a;
      a = b;
      b = f + b;
      return { value: f, done: false };
    },
  };
}

let fib = fibonacci();

for (let i = 0; i < 15; i++) {
  console.log(fib.next().value);
}
