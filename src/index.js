var grid = 4;
var space = " ";
for (var i = 0; i < grid; i++) {
  do {
    i += 1;
    space += " " + "#";
  } while (i > 0 && i < grid);
}
console.log(space);
