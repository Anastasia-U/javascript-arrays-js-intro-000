var chocolateBars = ["snickers",
                     "hundred grand",
                     "kitkat",
                     "sneakers" ];


function addElementToBeginningOfArray(array, element) {
  var n = [element, ...array];
  return n;
}

function destructivelyAddElementToBeginningOfArray(array, element) {

   array.unshift(element);
   return array;
}

function addElementToEndOfArray(array, element) {
   var n = [...element, array];
   return n;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}
