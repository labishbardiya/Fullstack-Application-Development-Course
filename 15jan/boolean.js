// string - have last char as '\0' (null)
// array - assigned or defined without null

// this is the only difference between string and array

var a = [];
var b = 11;

// non-zero = true
// true = 1
// [] = true

// falsy values -> null, nan, undefined, 0, "", " "

if (a) {
    console.log("true");
} else {
    console.log("false");
}

// imp points:

// all for loops can be converted to while, and vice versa.
// all switch cases can be converted into if statement, but not vice versa.