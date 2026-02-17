// const inner = document.getElementById('inner');

// inner.getElementListener("click", ()=>{
//     alert("Get into inner box");
// })

// const outer = document.getElementById('outer');

// outer.getElementListener("click", (evt)=>{
//     alert("Get into outer box");
//     console.log(evt.clientX);
//     console.log(evt.clientY);
//     // evt.stopPropagation();
// })

// document.getElementById('myLink').addEventListener("click", (evt)=>{
//     console.log(evt);
//     evt.preventDefault(); // prevents default behaviour
// })

// document.getElementById('button').addEventListener('click', () => {
//     document.body.classList.toggle('bg-black');
// });


document.getElementById('button').addEventListener('click', () => {
    let abc = document.body.getAttribute('class');
    console.log(abc);

    if (abc === 'dark') {
        document.body.setAttribute('class', 'white');
    }
});
