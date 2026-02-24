let loginData = {
    password : 123
};
let btn = document.getElementById("btn");

function handleChange(event) {

    // console.log(event.taget.value);

    // console.log(event.taget.name);

    // console.log(event.taget.type);

    let key = event.target.type;
    let value = event.target.value;

    loginData[key] = value;
}

console.log(loginData);

btn.addEventListener('click', (e)=>{

    fetch('', {
        method: 'POST',
        headers: {

        },
        body: JSON.stringify(loginData)
    })
}).then((res)=>{
    return res.json()

}).then((data)=> {
    if(data.token) {
        alert("successful")
    }
}).catch(()=>{
    
})