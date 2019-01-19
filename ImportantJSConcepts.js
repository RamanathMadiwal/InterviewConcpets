// forEach :
// 1.Iterates over an array ,
// runs callback on each value and
// returns undefined.
// 2.Use new array  to assign it to push the result

//
// Map:
// 1.Creates a new array ,runs a callback
// on each value and pushes the result of each callback in the new
// array of same length
// 2.Always use return
// 3.Assign to new variable and return it or return th main statement itself

// Filter:
// 1.Creates  a new array ,
// 2.Runs a callback on each value
// 3.If the result of the callback returns true ,the value is added to the new array
// 4.Result will always will be boolean.
// 5.if false it will not be added to new array.
// 6.Assign to new variable and return it or return th main statement itself
//
// Some:
// iterates through an array and
// runs a callback on each value if the callback for at least one value returns true,
// some returns true otherwise false;
//SOME
//AT LEAST ONE VALUE SATISFIES IT WILL RETURN TRUE OR FALSE
//never returns undefined or new array
//
//
// Every:
// 1.iterates through an array and runs a callback on each value
// 2.if the callback at any time returns false every returns false
//
//
// Reduce:
// 1.Accepts a callback and optional second parameter
// 2.iterates through an array.
// 3.returns a accumulated value which is determined by the result
// of what is returned to each callback
//
//
// let creates TDZ:-Temporal Dead Zone,let does not hoist
//
// const declaring same variable twice results in syntax error not type error
//
//
//
// block scope if ,while catch try finally
//
//
// Template Strings-String interpolation-backticks
//
// can use multi line strings
//
// Arrow functions-no return if placed in single line
// Arrow functions wont get own this..=-->enclosing
//
// Arrow functions wont get arguments.Never use in method functions
//
// Maps
// If you need keys that are not strings but objects will always be string in keys
// key value added and removed
// Weakmaps->no primitive data types only object also garbage
// collector clears the map easily and cant be iterted
//
// maps implement symbol.iterator so can be iterated easily
// and no overwriting like in object.prototypes
//
// Sets-->unique values s.has, s.delete s,size
// weak set->performance->all should be objects
// async /await--->promise is invoked
//
// await waits to resolve the functions
// awist faild javascript auto handles but user can add try catch block
//
// arguments object->no  longer accessed in arrow functions
// this keyword->is also ot accessed in arrow functions
// Promises
// if resolved  "then" function will be invoked otherwise "catch" function will be executed when its rejected
// "promise.all" will be executed one after other
// A promise is settled if it’s not pending (it has been resolved or rejected).
// Sometimes people use resolved and settled to mean the same thing: not pending.
// Once settled, a promise can not be resettled. Calling resolve() or reject() again will have no effect.
// The immutability of a settled promise is an important feature.
// Iterabales and iterator
// iterator doesn't work on objects but work in sets map etc
// Sets are array objects which accepts unique objects
// Generator,symbol.iterator
// Generators hold state of objects
//
// When generator is invoked it will return to us with keys of value and done
// value is returned using pause function using yeild functins
// done returns when function completes


function testForEach(arr) {
    let result = [];

    arr.forEach(function (elem) {

        result.push(elem / 2);

    });

    return result;
}


function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], [i], arr);
    }
}

console.log(testForEach([1, 2, 3, 4, 5, 6, 7]));


/*
Write a function called doubleValues which accepts
 an array and returns a new array with all the values
  in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
    let res = [];

    arr.forEach(function (elem) {

        res.push(elem * 2);

    });
    return res;

}

/*
Write a function called onlyEvenValues which
accepts an array and returns a new array with
only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
    let res = [];

    arr.forEach(function (elem) {
        if (elem % 2 === 0) {
            res.push(elem);
        }
    });
    return res;
}

/*
Write a function called showFirstAndLast which
accepts an array of strings and returns a new
array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {

    let res = [];

    arr.forEach(function (elem) {
        //First Element
        let first = elem[0];
        //last Element
        let last = elem[elem.length - 1];
        res.push(first + last);

    });
    return res;
}

/*
Write a function called addKeyAndValue which accepts an
array of objects, a key, and a value and returns
the array passed to the function with the new key and
value added for each object

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'},
     {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')

    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'},
    {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
    arr.forEach(function (elem) {
        elem[key] = value;

    });
    return arr;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'},
    {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'))

/*
Write a function called vowelCount which accepts a string and returns an object
with the keys as the vowel and the values as the number of times the vowel appears
in the string. This function should be case insensitive so a
 lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    let splitArr = str.toLowerCase().split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let obj = {};

    splitArr.forEach(function (el) {
        if (vowels.indexOf(el) !== -1) {
            if (el in obj) {
                obj[el]++;
            } else {
                obj[el] = 1;
            }
        }


    });
    return obj;
}

console.log(vowelCount('I Am awesome and so are you'));


//MAP

function testMap(arr) {
    let s = arr.map(function (val) {

        return val * 2;

    });
    return s;
}

console.log(testMap([2, 4]));

//
function map(arr, callback) {
    var newArr = [];
    for (let i = 0; i = arr.length; i++) {
        newArr.push(callback(arr[i], i, arr))
    }
}


/*
Write a function called doubleValues which
accepts an array and returns a new array with
 all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/

function doubleValues(arr) {

    return arr.map(function (val) {
        return val * 2;

    });

}

/*
Write a function called valTimesIndex which accepts
 an array and returns a new array with each value
  multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr) {

    return arr.map(function (val, index) {


        return val * index;

    });

}

/*
Write a function called extractKey which accepts
an array of objects and some key and returns a new array
 with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'},
     {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key) {

    return arr.map(function (val) {

        //return val.name;
        //to evaluate the key
        return val[key];

    });

}

/*
Write a function called extractFullName which
accepts an array of objects and returns a new array
with the value of the key with a name of "first" and
the value of a key with the name of  "last" in each object,
concatenated together with a space.

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"},
     {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
    return arr.map(function (val) {
        var f = val.first;
        var l = val.last;
        return f + " " + l;

    });


}

//FILTER

function testFilter(arr) {

    return arr.filter(function (el, i, arr) {

        return el > 2;

    })
}

console.log(testFilter([1, 2, 3, 4, 56]));

function filter(arr, callback) {
    let newArr = [];
    let bool = false;

    for (let i = 0; i < arr.length; i++) {
        bool = callback(arr[i], i, arr);
        if (bool === true) {
            newArr.push(arr[i]);
        }

    }
    return newArr;
}


/*
Write a function called filterByValue which accepts an array of objects
 and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
     {first: 'Matt', last:"Lane"},
     {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner')
      // [{first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function (el) {
        //checking if each elements has key otherwise it wont be returned
        return el[key] !== undefined;

    })
}

/*
Write a function called find which accepts an
 array and a value and returns the first element
  in the array that has the same value as the second
  parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    return arr.filter(function (val) {
        return val === searchValue
    })[0]
}

/*
Write a function called findInObj which accepts an
array of objects, a key, and some value to search for
 and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {

    return arr.filter(function (val) {

        return val[key] === searchValue;

    })[0];

}

/*
Write a function called removeVowels which accepts a
string and returns a new string with all of the vowels
(both uppercased and lowercased) removed. Every character
 in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let newStr = str.toLowerCase().split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    return newStr.filter(function (val) {
        return vowels.indexOf(val) === -1;
    }).join('');

}

console.log(removeVowels('Elie'));

/*
Write a function called doubleOddNumbers which accepts
an array and returns a new array with all of the odd numbers
doubled (HINT - you can use map and fitler to double and then
filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {

    arr.filter(function (val) {
        return val % 2 !== 0;

    }).map(function (elem) {
        return val * 2;

    })
}

//SOME
function some(arr, callback) {
    let bool = false;

    for (let i = 0; i < arr.length; i++) {
        bool = callback(arr[i], i, arr);
        if (bool === true) {
            return true;
        }
    }
    return false;
}

//EVERY

function every(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        bool = callback(arr[i], i, arr);
        if (bool === false) {
            return false;
        }
    }

    return true;
}

function allArrays(arr){
    return arr.every(function (val) {
        return Array.isArray(val);

    })
}

console.log(allArrays([[1],[2]]));


/*
Write a function called hasOddNumber which accepts
an array and returns true if the array contains at
least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr){

    return arr.some(function (val) {

        return val%2!==0;

    });

}

/*
Write a function called hasAZero which accepts a
 number and returns true if that number contains at
 least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num){
    return num.toString().split('').some(function (val) {

        return val==='0';

    });

}

/*
Write a function called hasOnlyOddNumbers which accepts
 an array and returns true if every single number in the
 array is odd. If any of the values in the array are not odd,
 the function should return false.

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr){
    return arr.every(function (val) {

        return val%2!==0;

    });
}

/*
Write a function called hasNoDuplicates which accepts an
 array and returns true if there are no duplicate values
 (more than one element in the array that has the same value as another).
 If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr){

    return arr.every(function (val) {

        return arr.indexOf(val)===arr.lastIndexOf(val);

    });

}

console.log(hasNoDuplicates([1,2,3]));

/*
Write a function called hasCertainKey which accepts an array of
objects and a key, and returns true if every single object in
 the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"},
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last:"Lane"},
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]

    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key){
    return arr.every(function (val) {

        return key in val;

    });

}

/*
Write a function called hasCertainValue which accepts an array
of objects and a key, and a value, and returns true if every single
object in the array contains that value for the specific key.
Otherwise it should return false.


Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"},
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
        {title: "Instructor", first: 'Matt', last:"Lane"},
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]

    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false

*/

function hasCertainValue(arr, key, searchValue){
    return arr.every(function (val) {

        return val[key]===searchValue;

    });
}

//Reduce


function testReduce(arr){
    return arr.reduce(function (acc,nextValue,index,arr) {

        return acc+nextValue;

    },[]);
}

console.log(testReduce([1,2]));


function findDuplicateAndOccurance(arr) {

    return arr.reduce(function (acc,nextVal) {
        //key in obj
        if(nextVal in acc){
            acc[nextVal]++
        }else{
            acc[nextVal]=1
        }
        return acc;
    },{})

}

/*
*acc ->{} nextValue-> 5 returnedValue->{5:1}
*acc->{5:1} next value-->4 returnedValue-->{5:1,4:1}
* acc->{5:1,4:1} nextValue->1 returnedValue-->{5:1,4:1,1:1}
*
* */


console.log(findDuplicateAndOccurance([5,4,1,4,5]));


/*
Write a function called extractValue which accepts an array of
 objects and a key and returns a new array with the value of each
  object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key){

    return arr.reduce(function (acc,nextVal) {
           acc.push(nextVal[key]);
           return acc;
    },[]);

}


/*
Write a function called vowelCount which accepts a string and returns
an object with the keys as the vowel and the values as the number of times
the vowel appears in the string. This function should be case insensitive so
a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){
    var vowels="aeiou";
    return str.split("").reduce(function (acc,nextVal) {
        if(vowels.indexOf(nextVal.toLowerCase())){
            if(next in acc){
                acc[next]++
            }else{
                acc[next]=1
            }
        }
        return acc;

    },{})

}

/*
Write a function called addKeyAndValue which accepts an array of objects
and returns the array of objects passed to it with each object now including
 the key and value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

    addKeyAndValue(arr, 'title', 'Instructor') //
      [
        {title: 'Instructor', name: 'Elie'},
        {title: 'Instructor', name: 'Tim'},
        {title: 'Instructor', name: 'Matt'},
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value){
 return arr.reduce(function (acc,next,idx) {

         acc[idx][key]=value;
         return acc;
     
 },arr)
}


/*
Write a function called partition which accepts an array and a callback and
 returns an array with two arrays inside of it. The partition function should
  run the callback function on each value in the array and if the result o
  f the callback function at that specific value is true, the value should be
   placed in the first subarray. If the result of the callback function at that
   specific value is false, the value should be placed in the second subarray.

Examples:

    function isEven(val){
        return val % 2 === 0;
    }

    var arr = [1,2,3,4,5,6,7,8];

    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];

    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }

    var names = ['Elie', 'Colt', 'Tim', 'Matt'];

    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback){
    return arr.reduce(function(acc,next){
        if(callback(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);

}

