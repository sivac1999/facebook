var logform=document.querySelector("#forms");


logform.addEventListener("submit",getdata);

function getdata(e){
    e.preventDefault();
    var mail=document.querySelector("#mail").value;
    console.log(mail);
    var passwrd=document.querySelector("#passwrd").value;
    console.log(passwrd);

    var logmail=localStorage.getItem("setmail");
    console.log(logmail);
    var logpasswrd=localStorage.getItem("setpasswrd");
    console.log(logpasswrd);

    if(mail==logmail){
        if(passwrd==logpasswrd){
            alert("Log in successful");
            location.href="home.html";
        }
        else{
            alert("Enter correct passwrd")
        }
    }
    else{
        alert("Enter correct email")
    }
}