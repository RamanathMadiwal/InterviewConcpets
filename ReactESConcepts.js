//Const-->cant be re declared  but as array or object you can update it
//Let
//Scope
//Global
//Function scope-->Inside the function
//Block scope
//var will be hoisted
//let does host but we can't access the value temporal dead zone-->reference error
//let keyword cant be used for re decalring the variables


//template strings ` `-->String interpolation


//arrow function
// 1.single parameter no need of parenthesis
//ex:val=> val * 2
//no need of return keyword
//no need of curly braces
//do not get own 'this'-->enclosing context immediately outside arrow functions
//Example

var inst = {
    name: "RAM",
    sayHi: function () {
        setTimeout(() => {
            console.log("Hello" + this.name);
        }, 1000)
        //use iife or .bind(this)
    }
}
//Do not get "arguments keywords" also but can call in
// inner function to get outer functions args

//Default parameters
function f(a = 10) {
    return a;

}

//For of loop

for (let color of colors) {
    console.log();

}

//Symbol -->iterator functions-->Symbol.iterator
//This method is not in object functiosn list---> can see in console
//for of cant loop object but other data types

//Rest-->gather
function printRest(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);//-->arrays

}

printRest(1, 2, 3, 4, 5);

//Spread -->outside the functions parameters
//Concat
//Example
var combined = [...arg1, ...arg2];

var arr = [1, 2];
Math.max(arr);//undefined
Math.max.apply(this, arr);//3
Math.max(...arr);

function sum(a, b, c) {
    return a + b + c;
}

let nums = [1, 2, 3];
sum(...nums);
//or
sum.apply(this, nums)


/*
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.

Examples:
    smallestValue(4,1,12,0) // 0
    smallestValue(5,4,1,121) // 1
    smallestValue(4,2) // 2
    smallestValue(99,12321,12.2) // 2
*/

function smallestValue(...args) {
    return Math.min(...args)
}

/*
Write a function called placeInMiddle which accepts two parameters, an array and
another array. This function should return the first array with all
 of the values in the second array placed in the middle of the first array.

Examples:
    placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
    placeInMiddle([1],[3,4,5]) // [3,4,5,1]
    placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
    placeInMiddle([],[2,3,4,5]) // [2,3,4,5]
*/

// placeInMiddle([1,2,6,7],[3,4,5])
function placeInMiddle(arr, vals) {
    let mid = Math.floor(arr.length / 2)
    arr.splice(mid, 0, ...vals)
    return arr;
}

/*
Write a function called joinArrays which accepts a variable
 number of parameters (you can assume that each argument to
  this function will be an array) and returns an array of
  all of the parameters concatenated together

Examples:

    joinArrays([1],[2],[3]) // [1,2,3]
    joinArrays([1],[2],[3],[1],[2],[3]) // [1,2,3,1,2,3]
    joinArrays([1,2,3],[4,5,6],[7,8,9]) // [1,2,3,4,5,6,7,8,9]
    joinArrays([1],[3],[0],[7]) // [1,3,0,7]

*/

// rest
function joinArrays(...args) {
    return args.reduce((acc, next) => acc.concat(next), [])
}

/*
// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArgs(1,2,3,4) // 6
    sumEvenArgs(1,2,6) // 8
    sumEvenArgs(1,2) // 2
*/

// rest
function sumEvenArgs(...args) {
    return args.reduce((acc, next) => next % 2 === 0 ? acc += next : acc, 0)
}

/*
Write a function called flip which accepts a
 function and a value for the keyword this.
 Flip should return a new function that when invoked,
  will invoke the function passed to flip with the correct
  value of the keyword this and all of the parameters passed
  to the function REVERSED. HINT - if you pass more than two
  parameters to flip, those parameters should be included
  as parameters to the inner function when it is invoked.
  You will have to make use of closure!

Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }

    var person = {
        firstName: 'Elie'
    }

    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"

    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8). // "Elie subtracts -4"

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/


// rest
function flip(fn, thisArg, ...outerArgs) {
    return function (...innerArgs) {
        let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
        return fn.apply(thisArg, allArgs.reverse());
    }
}

/*
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }

    var person = {
        firstName: 'Elie'
    }

    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"

    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue"

    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

function bind(fn, thisArg, ...outerArgs) {
    return function (...innerArgs) {
        return fn.apply(thisArg, [...outerArgs, ...innerArgs])
    }
}

//Object shorthand

//if keys and values are same the no need to repeat

let s = {
    name,
    lname
};

//Object methods
let az = {
    name: Ram,
    sayHello() {
        return "Woow"
    }
};

//Computated property names use [] name of the key (not {})

let fname = "elie"//key
var s = {
    [fname]: "Ram"//value
}
s.elie; //ram

//Destructuring-->extracting values

function f1({name, favcolor}) {

}

//Array values
//Swapping values

function swap(a, b) {
    return [a, b] = [b, a]
}

swap(1, 2)

function displayStudentInfo(obj) {
    var {first, last} = obj;
    return `Your full name is ${first} ${last}`
}

function printFullName({first, last}) {
    return `Your full name is ${first} ${last}`
}

function createStudent({likesJavaScript = true, likesES2015 = true} = {}) {
    var start = 'The student';
    if (likesJavaScript && likesES2015) {
        start += ' likes JavaScript and ES2015'
    } else if (likesJavaScript) {
        start += ' likes JavaScript!'
    } else if (likesES2015) {
        start += ' likes ES2015!'
    } else {
        start += ' does not like much...'
    }
    return start;
}

function reverseArray(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    }
    return arr;
}

//Symbol
//Proxies
//Reflect

//ES6-->2015

//class doesn't hoist
//Its abstraction of functions  and objects
//uses static methods

class A {

    constructor(a) {
        this.a = a;

    }

    sayHello() {

        return "Works"
    }

    static isWorks(obj) {
        return "Yes"
    }

    //Static methods -->
}


//use  in class -->super(...arguments)

//data Structures

//Map-->hash map,keys can be any data type
var firstMap = new Map();
firstMap.set(1, "A");
firstMap.get((1));
//Implements symbol.iterator
//firstMap.forEach(function(val){
// })
firstMap.values();
firstMap.keys();
firstMap.size;
//Also use for of loop
//dont have own prototypes sos no overriding

//USE-->Keys dynamically looked into
//Weakmap:-
//all keys should be objects but not primitive
//Garbage collects if reference removed

//Set
var firstSet = new Set()//No duplicates
firstSet.add(10);
firstSet.has(10);
firstSet.delete(20);

//Weakset// all values should be object


class MessageBoard {
    constructor() {
        this.messages = new Map
        this.id = 1;
    }

    addMessage(value) {
        this.messages.set(this.id, value);
        this.id++
        return this;
    }

    findMessageById(id) {
        return this.messages.get(id)
    }

    findMessageByValue(val) {
        for (let msg of this.messages.values()) {
            if (msg === val) return msg;
        }
    }

    removeMessage(id) {
        this.messages.delete(id);
        return this;
    }

    numberOfMessages() {
        return this.messages.size;
    }

    messagesToArray() {
        return Array.from(this.messages.values())
    }
}

// sets
function uniqueValues(arr) {
    return new Set(arr).size
}

function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length
}

function countPairs(arr, num) {
    var cache = new Set(arr);
    var count = 0;
    for (let val of arr) {
        cache.delete(val)
        if (cache.has(num - val)) {
            count++
        }
    }
    return count;
}


//Promises

//One time guaranted future value
//promise.all  only when all promises are resolved ,if one fails then rejects-->fail fast


//Generator
//Pauses execution and yeilds value
//it has has next() with  value:1  & done;true /false
//Can pause multiple times
//symbol iterator which has for of loop
//pause result of synchronous

//Object.assign
//Copies of objects
//Object.assign({},newObj)
//Not deep clone


//Array.from//->Array like objects

//find used in arrays-->true then first item will return
array.find(function (value) {
    value.name=="Tim"

});
//findindex value not find retrns -1
array.findIndex(function (val) {

    value.name=="Tim"//returns -1 if not found
})

//includes

"awesome".includes("some")//true

//Number.isFinite


//exponenetial
Math.pow()
x**y

["A"].includes("A")//arrays method

//"Awesome".padStart(10.1)
//"Awesome".padEnd(12,1)

//Async functions
//await-->like yeild


async function getMostFollowers(...usernames){
    let baseUrl = "https://api.github.com/users/"
    let urls = usernames.map(v => $.getJSON(baseUrl + v));
    let results = await Promise.all(urls);
    let max = results.sort((a,b) => a.followers < b.followers)[0];
    return `${max.name} has the most followers`;
}

async function starWarsString(id){
    let str = '';
    let results = await $.getJSON(`https://swapi.co/api/people/${id}/`)
    str += `${results.name} is featured in `;
    let movies = results.films[0];
    let moreResults = await $.getJSON(movies);
    str += `${moreResults.title}, directed by ${moreResults.director} `
    let planetData = moreResults.planets[0];
    let finalResults = await $.getJSON(planetData)
    str += `and it takes place on ${finalResults.name}`;
    return str;
}