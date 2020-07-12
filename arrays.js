var chocolateBars = ["snickers",
                     "hundred grand",
                     "kitkat",
                     "sneakers" ];


function addElementToBeginningOfArray(array, element) {
  var n = [array, ...element];
  return n;
}
