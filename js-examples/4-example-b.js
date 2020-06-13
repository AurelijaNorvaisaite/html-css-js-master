function getFibonacciNumber(index) {
  function F(n) {
    if (n < 2) {
      console.log(n);
      return n; // Will return 0, 1
    } else {
      return F(n - 1) + F(n - 2);
    }
  }

  return F(index - 1);
}

const start = new Date().getTime();
const fibNumber = getFibonacciNumber(45);
const end = new Date().getTime();

console.log(end - start);

console.log(fibNumber)
