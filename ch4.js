var set = {"Spot": true};
// Add "White Fang" to the set
set["White Fang"] = true;
// Remove "Spot"
delete set["Spot"];
// See if "Asoka" is in the set
("Asoka" in set)

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

show(object1 == object2);
show(object1 == object3);

object1.value = 15;
show(object2.value);
show(object3.value);

function range(X) {
  var result = [];
  for (var i = 0; i <= X; i++)
    result[i] = i;
  return result;
}


var words = ["my new cat", "lion", "tiger"];
show(words.join(" ").split(" "));


function startsWith(string1, string2) {
  return string1.charAt(0) == string2.charAt(0);
}
show(startsWith("Addis", "Ababa New"));


function catNames(paragraph) {
  var colon = paragraph.indexOf(":");
  return paragraph.slice(colon + 2).split(", ");
}

show(catNames("born 20/09/2004 (mother Yellow Bess): " +
              "Doctor Hobbles the 2nd, Noog"));


var mailArchive = retrieveMails();
var livingCats = {"Spot": true};

for (var mail = 0; mail < mailArchive.length; mail++) {
  var paragraphs = mailArchive[mail].split("\n");
  for (var paragraph = 0;
       paragraph < paragraphs.length;
       paragraph++) {
    if (startsWith(paragraphs[paragraph], "born")) {
      var names = catNames(paragraphs[paragraph]);
      for (var name = 0; name < names.length; name++)
        livingCats[names[name]] = true;
    }
    else if (startsWith(paragraphs[paragraph], "died")) {
      var names = catNames(paragraphs[paragraph]);
      for (var name = 0; name < names.length; name++)
        delete livingCats[names[name]];
    }
  }
}

show(livingCats);



function extractDate(paragraph) {
  function numberAt(start, length) {
    return Number(paragraph.slice(start, start + length));
  }
  return new Date(numberAt(11, 4), numberAt(8, 2) - 1,
                  numberAt(5, 2));
}

show(extractDate("died 27-04-2006: Black Leclère"));


function between(string1, string2, string3) {
  var startAt = string1.indexOf(string2) + string2.length;
  var endAt = string1.indexOf(string3, startAt);
return string1.slice(startAt, endAt);  
    
}
    
show(between("born 15/11/2003 (mother Spot): White Fang", "(mother ", ")"))

function formatDate(date) {
  function pad(number) {
    if (number < 10)
      return "0" + number;
    else
      return number;
  }
  return pad(date.getDate()) + "/" + pad(date.getMonth() + 1) +
             "/" + date.getFullYear();
}
print(formatDate(new Date(2000, 0, 1)));

function oldestCat(data) {
  var oldest = null;

  for (var name in data) {
    var cat = data[name];
    if (!("death" in cat) &&
        (oldest == null || oldest.birth > cat.birth))
      oldest = cat;
  }

  if (oldest == null)
    return null;
  else
    return oldest.name;
}

print(oldestCat(catData));

function range(start, end) {
  if (arguments.length < 2) {
    end = start;
    start = 0;
  }
  var result = [];
  for (var i = start; i <= end; i++)
    result.push(i);
  return result;
}

show(range(4));
show(range(2, 4));


function sum(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++)
    total += numbers[i];
  return total;
}

print(sum(range(1, 10)));



















