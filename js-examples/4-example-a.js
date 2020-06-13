function getFibonacciNumber(index) {
  var elements = [0, 1];

  for (var n = 2; n < index; n++) {
    elements.push(elements[n - 1] + elements[n - 2]);
  }

  return elements[index - 1];
}

alert(getFibonacciNumber(10));


