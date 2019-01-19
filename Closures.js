function outer(){
    let start="Closures are";

    return function inner() {

        return console.log(start+" "+" cool")

    }

}

outer()();
//It remembers


//Closures for Private variables
  function counter(){
      let count=0;

      return function inner() {
          count++;
          return count;

      }
  }

  let counter1= counter();
  counter1();//Starts it own count sequence
  let counter2=counter();
  counter2();//Starts it own count sequence
 //The count variable is private

//Private methods
function classRoom() {
    let instructors=["Ramanath","Madiwal"];

    return {
        getIntrct:function () {
            return console.log(instructors.slice())

        },
        addInstrct:function (instr) {
            instructors.push(instr);
            return instructors.slice();

        }
    }

}

let a=  classRoom();
a.getIntrct();
a.addInstrct("Bruce Wayne");
a.getIntrct();
