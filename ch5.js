var FoundSeven = {};

function hasSevenTruths(object) {
  var counted = 0;

  function count(object) {
    for (var name in object) {
      if (object[name] === true) {
        counted++;
        if (counted == 7)
          throw FoundSeven;
      }
      else if (typeof object[name] == "object") {
        count(object[name]);
      }
    }
  }

  try {
    count(object);
    return false;
  }
  catch (exception) {
    if (exception != FoundSeven)
      throw exception;
    return true;
  }
}