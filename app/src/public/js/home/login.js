"use strict";

const id = document.querySelector("#id"), 
pw = document.querySelector("#pw"), 
loginButton = document.querySelector("button");
loginButton.addEventListener("click", login);

function login() {
    const req = {
        id : id.value,
        pw : pw.value,
    }
    console.log(req);
}