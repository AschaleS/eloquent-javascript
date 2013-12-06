function asHTML(node) {
  if (isTextNode(node))
    return escapeHTML(node.nodeValue);
  else if (node.childNodes.length == 0)
    return "<" + node.nodeName + "/>";
  else
    return "<" + node.nodeName + ">" +
           map(asHTML, node.childNodes).join("") +
           "</" + node.nodeName + ">";
}

print(asHTML(document.body));



function removeElement(node) {
  if (node.parentNode)
    node.parentNode.removeChild(node);
}

removeElement(newParagraph);


function makeTable(data, columns) {
  var headRow = dom("TR");
  forEach(columns, function(name) {
    headRow.appendChild(dom("TH", null, name));
  });

  var body = dom("TBODY", null, headRow);
  forEach(data, function(object) {
    var row = dom("TR");
    forEach(columns, function(name) {
      row.appendChild(dom("TD", null, String(object[name])));
    });
    body.appendChild(row);
  });

  return dom("TABLE", null, body);
}

var table = makeTable(document.body.childNodes,
                      ["nodeType", "tagName"]);
document.body.appendChild(table);


