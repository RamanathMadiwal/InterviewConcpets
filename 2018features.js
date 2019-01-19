const user={
    name:"Ram",
    lname:"nath",
    useless:"dummy"
};


const {useless,...data}=user;

console.log(useless);
console.log(data);

let s="ram";
console.log(s);

const names=["a","b","c"];

for await(let name of names){
    name
}