const memoize = (fun) => {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    }
    cache[n] = fun(n)
    return cache[n];
  };
};

const el = memoize((n) => n * n);

console.time();
console.log(el(500000000));
console.timeEnd();

console.time();
console.log(el(500000000));
console.timeEnd();
