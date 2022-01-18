"use strict";
const id = document.querySelector("#id"), 
psword = document.querySelector("#pw"), 
loginButton = document.querySelector("button");
loginButton.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        psword : psword.value,
    };
    
    fetch("/login", {
        method : "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    }).then((res) =>  res.json())
    .then((res)=>{
        if(res.sucess) {
            location.href = '/';
        }
        else {
            alert(res.msg);
        }
    }).catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    });
}