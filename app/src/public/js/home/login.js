"use strict";
const id = document.querySelector("#id"), 
pw = document.querySelector("#pw"), 
loginButton = document.querySelector("button");
loginButton.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        pw : pw.value,
    };
    
    fetch("/login", {
        method : "POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    }).then((res) => {return res.json()})
    .then((res)=>{
        if(res.succes) {
            location.href = '/';
        }
        else {
            alert(res.msg);
        }
    }).catch((error) => {
        console.error(new Error("로그인 중 에러 발생"));
    });
}