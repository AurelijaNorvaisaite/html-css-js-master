var text = "";
var i;

for (i = 0; i < 5; i++) {
  text += "The number is " + i + "\n";
}

while (i <= 10) {
  if (i % 2 === 0) {
    text += "The number is " + i + "\n";
  }
  i++;
}

alert(text);
