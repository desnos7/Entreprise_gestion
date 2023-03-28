
let mail = document.getElementById("usemail");
let pw = document.getElementById("usepass");

let admin={
    email: "email@gmail.com",
    password: 'mdpasse',
}
let supAdmin={

    email: "admin@gmail.com",
    password: 'mdpasse',
}
 

let superAdmin = JSON.parse(localStorage.getItem("admin"))
// check if stored data from register-form is equal to entered data in the   login-form
function check(e) {
  e.preventDefault();

  let email=mail.value
  let mdp=pw.value

 
  // entered data from the login-form
  if(admin.email===email && admin.password===mdp ){
    window.location.href = "index.html";
    JSON.parse(localStorage.setItem("Admin",JSON.stringify(admin)))
  }
  // check if stored data from register-form is equal to data from login form
  else if (email === superAdmin.email && mdp === superAdmin.password) {
    window.location.href = "index.html";
    let superAdmin = JSON.parse(localStorage.setItem("SuperAdmin",stringify(superAdmin)))
  } else {

    alert("mot de pass et email incorrect.");
  }
}