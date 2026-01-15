const A = [23, 34, [45, 67], 76, [12, 17, 91], 3];

// A.push(111); // add element at the end
// A.unshift(111); // add element in the front

// A.pop(); // remove element at the end
// A.shift(); // remove element in the front

const B = A.slice(1, 4); // not inclusive "[12, 17, 91]" -> copy (main diff)

const C = A.splice(1, 4); // inclusive "[12, 17, 91]" -> cut (main diff)

console.log(B);

console.log(A);

console.log(A.indexOf(34)); // find index of a element in the array