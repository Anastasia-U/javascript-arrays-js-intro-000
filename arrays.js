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
   var n = [...array, element];
   return n;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift();
   return array;
}

function removeElementFromBeginningOfArray(array) {
  var p = array.slice(0, 1);
  return p;
}
