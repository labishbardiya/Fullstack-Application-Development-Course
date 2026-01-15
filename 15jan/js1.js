// Hoisting

console.log(a);
var a = 9;

console.log(b);
let b = 11;

// Strict JS: ECMA 6

// Temporal Dead Zone - This zone cannot be accessed until some value other than undefined is stored there.
// That's why it gives error for the following:

/*
console.log(b);
let b = 11;
*/

// As soon as value is assigned it comes out of that zone.

// Let and const supports Hoisting.