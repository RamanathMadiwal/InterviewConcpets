//-->
// Object that is executing the current function

//method-->this refer to object
//function->outside-->this refer to global(window,global)=


/*//CASE 1
// const video={
//     title:'a',
//     play(){
//         console.log(this);
//     }
// };
//
//
// video.play();
// video.stop=function () {
//     console.log(this);
//
// };
//
// video.stop();//>method of video object

/!*{ title: 'a', play: [Function: play] }
{ title: 'a', play: [Function: play], stop: [Function] }*!/*/


// const video={
//     title:'a',
//     play:function(){
//         console.log(this);
//         console.log(this.title)
//     }
// };
//
//
// //video.play();
//
// let s= video.play.bind(video);//Solution
// s();

//CASE 2
// const video={
//     title:'a',
//     play(){
//         console.log(this);
//     }
// };
//
//
// function playVideo() {
//     console.log(this);
// }
// playVideo();

/*Object [global] {*/

//CASE 3

// const video={
//     title:'a',
//     play(){
//         console.log(this);
//     }
// };
//
//
// function Video(title) {
//     this.title=title;
//     console.log(this);
// }
//  const v= new Video('ram');
//Constructor function is new empty object as new creates its own context

//CASE 4

// const video={
//     title:'a',
//     tags:['a','b','c',{title:'k'}],
//     showTags(){
//         this.tags.forEach(function (tag) {
//             console.log(this,tag);
//             //This refers to this.tags which is undefined reference to window object
//             //call back function is regular function and will be executed in
//             // global context
//         },this)
//     }
// };
//
// video.showTags();

//Basic
//1
// function myFunc() {
//
//     console.log(this===global);//true
//
// }
//
// myFunc();

//2
// var myObj={
//     testFunc:function () {
//         console.log(this===myObj);//true
//
//     }
// };
//
// myObj.testFunc();
//3
var myObj = {
    testFunc: function () {
        console.log(this === myObj);//false
        //global

    }
};

let m = myObj.testFunc;
m();

//IMPORTANT
//if `this` is called in form obj.func() `this` equals obj else
//`this` equals global

//3.56

//Nested Functions.
let myObject = {

    myFunction: function () {
        console.log(this === myObject);//True
        setTimeout(function () {
            console.log(this === myObject);//prints True
            console.log(this === global);

        }, 0);

    }
};
myObject.myFunction();

//1.Function Expressions vs Declarations

function myFunctionDeclaration() {
};
let myFunctionExpression = function () {
};


//Function Declarations and hoisting.

myFunction();//Prints  "hi"--->Fine

function myFunction() {
    console.log('Hi');

}

//2.Function Expressions and Hoisting

myFunctions();//Prints  "Type error :"Undefined" is not function

let myFunctions = function () {
    console.log('Hi');
};

//Named Function Expressions

let myFunc = function myOtherFunc(recurse) {
    if (recurse) {
        myFunc(false);//Ok
        myOtherFunc(false);//Ok
    }

};

myFunc(true);//ok
myOtheFunc(true);//Reference error

//Call Apply and Bind

//Call
let myObjectCall = {
    myF: function (a, b) {
        console.log(a + '' + b);
        console.log(this === myObject);
        console.log(this === myO);//Prints"true"

    }
};

let myO = {};

myObjectCall.myF.call(myO, "hello", "World");


//Apply

let myObjectApply = {
    myF: function (a, b) {
        console.log(a + '' + b);
        console.log(this === myObject);
        console.log(this === myO);//Prints"true"

    }
};

let myOA = {};

myObjectApply.myF.apply(myOA, ['hello', 'world']);


//Bind

let Obj = {
    myF: function (a, b) {
        console.log(a + '' + b);
        console.log(this === myObject);
        console.log(this === myO);//Prints"true"

    }

};


let myOB = {};
//New function this is pre applied to it .
let myF = myObjectApply.myF.bind(myOB);
myF('Hello', 'World');


//Object ShortHand Notation

const myo = {
    myfu() {
        console.log(this === myO);
    }
};


myo.myfu(); //Prints "true"
const myFuncs = myO.myfu();
myFuncs();//prints "false"

//Arrow functions

const Yo = () => {
    console.log(this === global);// Prints true
};

Yo();


let myOd = {
    myFunction() {
        console.log(this === myOd);//True
        setTimeout(() => {
            console.log(this === myOd);//prints True
            console.log(this === global);//Prints false

        }, 0);

    }
};
myOd.myFunction();


//Arrow functions and .call()

const Oj = {};

const myFuc = () => {
    console.log(this === Oj);//Global
};
//
myFuc();//prints false
myFuc.call(Oj);//Prints false


//React
//Case 1:Bad Way
// class MyComponent extends React.Component {
//     onClick() {
//         console.log(this instanceof MyComponent);//Prints false
//     }
//
//     render() {
//         return (
//             <button onClick={this.onClick}>Click me</button>
//         )
//     }
// }
//
// //Case 2:Works but sucks
// class MyComponent extends React.Component {
//     onClick() {
//         console.log(this instanceof MyComponent);//Prints true but performance
//         // issue as this called by creating every function
//         //react thisnks function changes evrytime
//     }
//
//     render() {
//         return (
//             <button onClick={() => this.onClick}>Click me</button>
//         )
//     }
// }

//case 3:Proper way
// class MyComponent extends React.Component {
//
//     constructor() {
//         super();
//         this.onClick = this.onClick.bind(this);
//
//     }
//
//     onClick() {
//         console.log(this instanceof MyComponent);//Prints true
//     }
//
//     render() {
//         return (
//             <button onClick={this.onClick}>Click me</button>
//         )
//     }
// }

//Instance properties in 2017
//Class field Declarations
class MyClass {
    // constructor(){
    //     this.myprop=10;
    // }
    //
    // let myprop = 10;
}

const myInst = new MyClass();
console.log(myInst.myprop);

//Arrow Function Class field


class MyClass1 {
    myFunc = () => {
        console.log(this instanceof MyClass1);
        //Prints true
    }
}

const myInst1 = new MyClass1();
const myFs = myInst1.myFunc();
myFs();


//Current way

// class MyComponent extends React.Component{
//     onClick=()=>{
//         console.log(this instanceof MyComponent);
//         //Prints true
//     }
//     render(){
//         return (
//             <button onClick={this.onClick}>Click me</button>
//         )
//     }
// }
//******************************************************************

//Use strict to prevent declaring global variable

function mistake() {
    this.badidea = "Wooo"
}

function m() {
    return this;//Undefined in strict mode

}

//never attach variable without initiation otherwise it becomes global


//2-Implicit/Object

//when keyword is declared inside the object then context  will
//  be closest parent object


var p = {
    fname: "Ram",
    sayHi: function () {

        return this.fname

    },

    determineContext: function () {
        return this === person;//

    }
}
//p.sayHi()-->Ram
//p.determineContext()-->true


var p2 = {
    fname: "Ram",
    sayHi: function () {

        return this.fname

    },

    determineContext: function () {
        return this === person;//

    },

    dog: {
        sayHello: function () {

            return this.fname //undefined as its pointing towards dog

        },

        determineContext: function () {
            return this === person;// will be dog object

        }
    }
}


//Explicit binding only on functions not other datattypes
//bind


p2.dog.sayHello.call(person);
p2.dog.sayHello();

//Use case
var colt = {
    fname: "A",
    sayHi: function () {
        return "hi" + this.fname

    }
}

var elie = {
    fname: "B",
    // sayHI:function () {
    //     return "hi"+this.fname
    // }
}

colt.sayHi.call(elie, elie.fname);
//Target element ,its function and call(pass instance and pass variable to it)

///Slice works amazing fro array like objects

var divArray = [].slice.call(divs);
divArray.filter(function (val) {
    return val.innerText === "hello"

});

//When to use apply

var nums = [5, 7, 1, 4, 2];
Math.max(nums);//NaN

Math.max.apply(this, nums);


function sum(a, b, c) {

    return a + b + c;

}

var values = [4, 1, 2];
sum(values)//4,1,2 undefined

sum.apply(this, values);

//Bind
//we don't  when we need to invoke the function

//Example partial functions

function addNumbers(a, b, c, d) {
    return this.fname + "just caculated" + (a + b + c + d)

}

let elies = {
    fname: "elie"
}

let elieCalc = addNumbers.bind(elies, 1, 2);
elieCalc(3, 4); //-->calculated 10


let io = {
    fname: "Colt",
    sayHi: function () {
        setTimeout(function () {
            console.log("Hi" + this.fname);//Undefined

        }, 2000)

    }

}


let io1 = {
    fname: "Colt",
    sayHi: function () {
        setTimeout(function () {
            console.log("Hi" + this.fname);//Undefined

        }.bind(this), 2000)

    }

}


/*
Write a function called arrayFrom which converts an array-like-object into an array.

Examples:
    var divs = document.getElementsByTagName('divs');
    divs.reduce // undefined
    var converted = arrayFrom(divs);
    converted.reduce // function(){}....
*/

function arrayFrom(arrayLikeObject) {
    let resultArray = [].slice.call(arrayLikeObject);

    return resultArray;

}

/*
// Write a function called sumEvenArguments which takes all
of the arguments passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArguments(1,2,3,4) // 6
    sumEvenArguments(1,2,6) // 8
    sumEvenArguments(1,2) // 2
*/

function sumEvenArguments() {

    var newArgs = [].slice.call(arguments);

    return newArgs.reduce((function (acc, next) {
        if (next % 2 === 0) {
            return acc + next;
        }
        return acc;
    }, 0))

}


/*
Write a function called invokeMax which accepts a function and a
maximum amount. invokeMax should return a function that when called
increments a counter. If the counter is greater than the maximum amount,
 the inner function should return "Maxed Out"

Examples:

    function add(a,b){
        return a+b
    }

    var addOnlyThreeTimes = invokeMax(add,3);
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(2,2) // 4
    addOnlyThreeTimes(1,2) // 3
    addOnlyThreeTimes(1,2) // "Maxed Out!"

*/

function invokeMax(fn, num) {
    var max = 0;
    return function () {

        if (max >= num) {
            return "MAxed Out"
        }
        max++;
        return fn.apply(this.arguments)
    }

}

/*
Write a function called once which accepts two parameters,
 a function and a value for the keyword 'this'. Once should
 return a new function that can only be invoked once, with the
 value of the keyword this in the function set to be the second parameter.

Examples:

    function add(a,b){
        return a+b
    }

    var addOnce = once(add, this);
    addOnce(2,2) // 4
    addOnce(2,2) // undefined
    addOnce(2,2) // undefined

    function doMath(a,b,c){
        return this.firstName + " adds " + (a+b+c)
    }

    var instructor = {firstName: "Elie"}
    var doMathOnce = once(doMath, instructor);
    doMathOnce(1,2,3) // "Elie adds 6"
    doMathOnce(1,2,3) // undefined


*/

function once(fn, thisArg) {
    var hasBeenCalled=false;

    return function () {
      if(!hasBeenCalled){
          hasBeenCalled=true;
          return fn.apply(thisArg)
      }
    }

}

// BONUSES!

/*
Write a function called bind which accepts a function and a value
 for the keyword this. Bind should return a new function that when
 invoked, will invoke the function passed to bind with the correct
  value of the keyword this. HINT - if you pass more than two parameters
  to bind, those parameters should be included as parameters to the inner
  function when it is invoked. You will have to make use of closure!

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

function bind(fn, thisArg) {

    var outerArgs=[].slice.call(arguments,2);
    return function () {
        var InnerArgs=[].slice.call(arguments)
        var allArgs=outerArgs.concat(InnerArgs)
        return fn.apply(thisArg,allArgs);

    }

}

/*
Write a function called flip which accepts a function and a
 value for the keyword this. Flip should return a new function
  that when invoked, will invoke the function passed to flip with
  the correct value of the keyword this and all of the arguments passed
   to the function REVERSED. HINT - if you pass more than two parameters to
    flip, those parameters should be included as parameters to the inner
    function when it is invoked. You will have to make use of closure!

Flip should return a new function that when invoked takes the correct
number of required arguments to that function which are then reversed.
 HINT - you will need to use the .length property on functions to figure
 out the correct amount of arguments. For example:

flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10)




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

    function subtractFourNumbers(a,b,c,d){
        return a-b-c-d;
    }

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/


function flip(fn, thisArg) {
    let outerArgs=[].slice.call(arguments,2);
    return function () {
        let InnerArgs=[].slice.call(arguments);
        let allArgs=outerArgs.concat(InnerArgs).slice(0,fn.length)
        return fn.apply(thisArg,allArgs.reverse());

    }

}


//New keyword
//New refers to object its created


