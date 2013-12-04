function range(start, end, stepSize, length) {
  if (stepSize == undefined)
    stepSize = 1;
  if (end == undefined)
    end = start + stepSize * (length - 1);

  var result = [];
  for (; start <= end; start += stepSize)
    result.push(start);
  return result;
}

show(range(0, undefined, 4, 5));


function defaultTo(object, values) {
  forEachIn(values, function(name, value) {
    if (!object.hasOwnProperty(name))
      object[name] = value;
  });
}

function range(args) {
  defaultTo(args, {start: 0, stepSize: 1});
  if (args.end == undefined)
    args.end = args.start + args.stepSize * (args.length - 1);

  var result = [];
  for (; args.start <= args.end; args.start += args.stepSize)
    result.push(args.start);
  return result;
}

show(range({stepSize: 4, length: 5}));


