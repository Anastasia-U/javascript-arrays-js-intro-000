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
