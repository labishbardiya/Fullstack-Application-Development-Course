var a = 9; // Fixed: 2's Complement.

var b = 9.0; // floating point IEEE 754. (64-bit double-precision))

if (a == b) { // implicit type conversion of int to float.
    console.log("Hello");
} else {
    console.log("Sorry");
} // prints Hello

if (a === b) {
    console.log("Hello");
} else {
    console.log("Sorry");
} // prints Hello

// 0 == "" returns true
// 0 === "" returns false