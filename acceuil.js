let mail = document.getElementById("usemail");
let pw = document.getElementById("usepass");

let admin = {
  email: "email@gmail.com",
  password: "mdpasse",
};
let supAdmin = {
  email: "admin@gmail.com",
  password: "mdpasse",
};

let superAdmin = JSON.parse(localStorage.getItem("admin"));
// check if stored data from register-form is equal to entered data in the   login-form
function check(e) {
  e.preventDefault();

  let email = mail.value;
  let mdp = pw.value;

  // entered data from the login-form
  if (admin.email === email && admin.password === mdp) {
    window.location.href = "acceuil.html";
    JSON.parse(localStorage.setItem("Admin", JSON.stringify(admin)));
  }
  // check if stored data from register-form is equal to data from login form
  else if (email === supAdmin.email && mdp === supAdmin.password) {
    window.location.href = "acceuil.html";
    let superAdmin = JSON.parse(
      localStorage.setItem("SuperAdmin", stringify(superAdmin))
    );
    // let none= document.querySelector("#deconnexion")
    // none.style.display='none'
  } else {
    alert("mot de pass et email incorrect.");
  }
}

let superAdmint = JSON.parse(localStorage.getItem("admin")) || [];

for (let i = 0; i < superAdmint.length; i++) {
  let tache = `<div class="item2" id='${superAdmint[i].id}'>
  <img src="${superAdmint[i].image}" alt="" />
  <p>${superAdmint[i].nom}</p>
  <p>${superAdmint[i].profession}</p>
  <div class="i"></div>
</div>`;

  let box = document.querySelector(".box_item2");

  box.innerHTML += tache;
}

let tacheTravailleur = JSON.parse(localStorage.getItem("tache"));
let box_item = document.querySelector("#id2");

box_item.innerHTML = tacheTravailleur.length;
let travailleur = JSON.parse(localStorage.getItem("utilisateur"));

let box_item2 = document.querySelector("#id1");
box_item2.innerHTML = travailleur.length;


let box_item3= document.querySelector("#id3");
box_item3.innerHTML = superAdmint.length;
