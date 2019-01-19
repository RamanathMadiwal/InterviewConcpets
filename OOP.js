//New Keyword

/*It creates New Object
Sets this to empty object
Adds return this end of function
Adds property __proto__ links prototype property on constructor function to empty object
*
* */

function House(bedrooms) {
    this.bedrooms=bedrooms

}

let fh= new House(2);
fh.bedrooms;//2


function pg(price=10,bedrooms){
    this.price=price;
    House.call(this,bedrooms)
}


//Prototypes:-
/* Every constructor function has property called as Prototype.Which is an object
prototype has constructor which points back to constructor function
Object is created using new keyword  __proto__ gets created linking the object and prototype property of the constructor
*
* */

/*Person-->Object
Person-->.prototype-->Person.prototype
Person.prototype has constructor-->Person
Let Person1= new Person()
Person1.___proto__=Person.prototype
//True

* */
//Prototype Instructor
//Person1 will  have access to all properties on Person-->prototypal inheritance


//Person.prototype.sayHi=function(){}



//Passing methods and properties from one class to another

//When we assign var to another we just create reference


//var student.prototype=Object.create(Person.prototype)
//Use Object.create whenever use inheritance

//Two parts of inheritance
//Set the prototype of an object with another prototype
//reset constructor property

//Student.prototype=Object.create(Person.prototype)
//Student.prototype.constructor=student //Otherwise its pointing to person constructor


