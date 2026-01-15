const A = [1, 2, 3];
const B = [4, 5, 6];

const C = A.concat(B); // concats A and B (first, elements of A, then elements of B).
console.log(C);

// const D = B.concat(A);
// console.log(D);

const E = [...A, ...B];
console.log(E)

// const F = [...A, ...B, ...A, ...B, ...A, ...A]; // mostly spread operator is used, and no concat.
// console.log(F)