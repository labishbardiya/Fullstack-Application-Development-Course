let form=document.getElementById("login")
form.addEventListener("submit",(e)=>{
    // e.preventDefault();
    let email1=document.getElementById("email").value;
    let password1=document.getElementById("password").value
    let login={"email":email1,
        "password":password1}
    console.log(login);
    fetch("http://localhost:12000/loginpost",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(login)
    }).then(res=>res.json())
    .then(data=>{
        // console.log(data);
        if(data.token){
            alert("login successful");
            msg.innerText="login successful";
            msg.style.color="green"; 
        }
        else{
            alert("login failed");
            msg.innerText="invalid credentials";
            msg.style.color="red"; 
        }
    })
})