const A = [1, 2, 3, 4, 9, 8, 7, 6];

const B = A.forEach(i => {
    // console.log(i);
    return i;
})

console.log(B); // forEach cannot return.

const C = A.map((j) =>{
    // console.log(j);
    return j;
})

console.log(C); // map can return.

