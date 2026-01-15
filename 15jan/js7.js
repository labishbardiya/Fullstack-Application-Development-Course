// Object

const A = {
    "name" : "JKLU",
    "roll" : "007",
    1 : "12345"
} // JSON object - all key value pairs are strings

const B = {
    "name" : "lab",
    "roll" : 106
} 

console.log(A.name);
// or console.log(A["name"]);

console.log(A["1"]);
// or console.log(A["1"]);

const D = {... A, ...B};
// or Object.assign({}, A, B);

console.log(D);
