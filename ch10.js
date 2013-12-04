var datePattern = /\d\d\/\d\d\/\d\d\d\d/;
show("born 15/11/2003 (mother Spot): White Fang".search(datePattern));


var mailAddress = /\b[\w\.-]+@[\w\.-]+\.\w{2,3}\b/;

show(mailAddress.test("kenny@test.net"));
show(mailAddress.test("I mailt kenny@tets.nets, but it didn wrok!"));
show(mailAddress.test("the_giant_sloth@gmail.com"));


function extractDate(string) {
  var found = string.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (found == null)
    throw new Error("No date found in '" + string + "'.");
  return new Date(Number(found[3]), Number(found[2]) - 1,
                  Number(found[1]));
}

show(extractDate("born 5/2/2007 (mother Noog): Long-ear Johnson"));


function escapeHTML(text) {
  var replacements = {"&": "&amp;", "\"": "&quot;",
                      "<": "&lt;", ">": "&gt;"};
   return text.replace(/[&"<>]/g, function(character) {
    return replacements[character];
  });
}
print(escapeHTML("The 'pre-formatted' tag is written \"<pre>\"."));





