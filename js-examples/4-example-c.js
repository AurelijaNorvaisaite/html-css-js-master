function getFibonacciNumber(index) {
  const cache = new Map(); // For speed up
  function getFibonacciNumberRecursively(n) {
    if (n < 2) {
      return n; // Will return 0, 1
    } else if (cache.has(n)) {
      return cache.get(n);
    } else {
      let curr = getFibonacciNumberRecursively(n - 1) + getFibonacciNumberRecursively(n - 2);
      if (!cache.has(curr)) {
        cache.set(n, curr);
      }
      return curr;
    }
  }

  return getFibonacciNumberRecursively(index - 1);
}

// alert(getFibonacciNumber(10));

const start = new Date().getTime();
const fibNumber = getFibonacciNumber(45);
const end = new Date().getTime();

console.log(end - start);

console.log(fibNumber)


