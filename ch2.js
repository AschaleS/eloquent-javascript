print("N")
show("N")
show(confirm("Shall we, then?"));

show(prompt("Tell us everything you know.", "..."));

var theNumber = Number(prompt("Pick a number", ""));
print("Your number is the square root of " +
      (theNumber * theNumber));
      
print(0);
print(2);
print(4);
print(6);
print(8);
print(10);
print(12);

var currentNumber = 0;
while (currentNumber <= 12) {
  print(currentNumber);
  currentNumber = currentNumber + 2;
}

var currentNumber = 0;
while (currentNumber <= 12)
  currentNumber = currentNumber + 2;

var result = 1;
var counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
print(result);

var line = "";
var counter = 0;
while (counter < 10) {
  line = line + "#";
  print(line);
  counter = counter + 1;
}

var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
  result = result * 2;
show(result);

var line ="";
for (var counter = 0; counter < 10; counter = counter + 1){
  line = line + "#";
  print (line)
}

for (var counter = 0; counter < 20; counter++) {
  if (counter % 3 == 0 && counter % 4 == 0)
    show(counter);
}

for (var counter = 0; counter < 20; counter++) {
  if (counter % 4 == 0)
    print(counter);
  else
    print("(" + counter + ")");
}

for (var counter = 0; counter < 20; counter++) {
  if (counter > 15)
    print(counter + "**");
  else if (counter > 10)
    print(counter + "*");
  else
    print(counter);
}

var answer = prompt("You! What is the value of 2 + 2?", "");
if (answer == "4")
  alert("You must be a genius or something.");
else if (answer == "3" || answer == "5")
  alert("Almost!");
else
  alert("You're an embarrassment.");
  
  for (var current = 20; ; current++) {
  if (current % 7 == 0)
    break;
}
print(current);

for (var current = 20; current % 7 != 0; current++)
  ;
print(current);

var answer;
while (true) {
  answer = prompt("You! What is the value of 2 + 2?", "");
  if (answer == "4") {
    alert("You must be a genius or something.");
    break;
  }
  else if (answer == "3" || answer == "5") {
    alert("Almost!");
  }
  else {
    alert("You're an embarrassment.");
  }
}

var value = null;
while (value != "4") {
  value = prompt("You! What is the value of 2 + 2?", "");
  if (value == "4")
    alert("You must be a genius or something.");
  else if (value == "3" || value == "5")
    alert("Almost!");
  else
    alert("You're an embarrassment.");
}





























