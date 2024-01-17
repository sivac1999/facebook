var regform=document.querySelector("#forms");
console.log(regform);
regform.addEventListener("submit",setdata);

function setdata(e){
    e.preventDefault();
    var mail=document.querySelector("#mail").value;
    console.log(mail);
    var passwrd=document.querySelector("#passwrd").value;
    console.log(passwrd);

    localStorage.setItem("setmail",mail);
    localStorage.setItem("setpasswrd",passwrd);
    location.href="login.html";
}