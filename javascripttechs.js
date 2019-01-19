var newArgs = [].slice.call(arguments);
//Constructor function are Captilized


//Slice example

//The slice method returns a new array with a copied slice from the original array.
// The first optional argument is the beginning index and the second optional argument is
// the ending index (non-inclusive).
let testArr=[1,2,3,4,5,6];
var sliceval=testArr.slice(2,4);
console.log(`slice value is`+sliceval);


//Splice example

//The splice method changes the content of the array in place and can be used to add or remove items from the array.
// When only one argument is provided, all the items after the provided starting index are removed from the array:
// The second optional argument is for the number of items to remove:
//An arbitrary amount of additional arguments can be passed-in and will be added to the array:
//You can specify 0 as the number of items to remove to simply add new items at the specified location in the array:
let testArrs=[1,2,3,4,5,6];
var spliceval=testArrs.splice(1,3,9);
console.log(`splice value is`+spliceval);

const arr = ['a', 'b', 'c', 'd', 'e']
arr.splice(2, 1, 'dog')
console.log(arr)