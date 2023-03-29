let btn = document.querySelector("button");

let fichier = document.querySelector("#id");
let mdpasse = document.querySelector("#password");
let profession = document.querySelector("#profession");
let email = document.querySelector("#Email");
let firstname = document.querySelector("#nom");

fichier.addEventListener("change", () => {
  const file = fichier.files[0];
  const imageUrl = URL.createObjectURL(file);
});

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let admin = {
    id: "",
    firstname: firstname.value,
    profession: profession.value,
    email: email.value,
    password: mdpasse.value,
    image: fichier.value,
  };

  console.log(admin);
  let superAdmin = JSON.parse(localStorage.getItem("admin"));

  if (superAdmin) {
    admin.id += "salut00" + parseInt(superAdmin.length + 1);

    superAdmin.push(admin);

    localStorage.setItem("admin", JSON.stringify(superAdmin));
  } else {
    superAdmin = [];
    admin.id = "salut00" + parseInt(superAdmin.length + 1);
    superAdmin.push(admin);
    localStorage.setItem("admin", JSON.stringify(superAdmin));
  }
});

let superAdmin = JSON.parse(localStorage.getItem("admin"));
for (let i = 0; i < superAdmin.length; i++) {
  let tache = ` <div class="item2"  id="${superAdmin[i].id}">
    <img src=${superAdmin[i].image} alt="">
      <p>${superAdmin[i].email}</p>
      <p>${superAdmin[i].firstname}</p>
     <p><i class="fa-sharp fa-solid fa-pen"></i><i class="fa-solid fa-trash" ></i></p>
    
    </div>`;
  let container = document.querySelector(".box_item2");

  container.innerHTML += tache;
}

let icon = document.querySelectorAll(".fa-trash");
console.log(icon);

for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", (e) => {
    e.preventDefault();
    let id = e.target.closest(".item2").id;

    console.log(id);

    if (condition) {
    }
  });
}

let creer = document.querySelector("#creer");
let update = document.querySelectorAll(".fa-pen");

for (let i = 0; i < update.length; i++) {
  update[i].addEventListener("click", (e) => {
    e.preventDefault();
    let id = e.target.closest(".item2").id;
    console.log(id);

    creer.style.display = "none";

    let superAdmin = JSON.parse(localStorage.getItem("admin"));
    let finid = superAdmin.find((element) => element.id === id);

    let put = `<div class="login" id="${finid.id}" >
    <div class="inputbox">
      <input type="text" name="nom" placeholder=" Nom" id="nome" value="${finid.firstname}">
      <input type="text" name="profession" placeholder=" profession" id="profe" value="${finid.profession}">
      <input type="password" name="password" placeholder="  PASSWORD" id="pass" value="${finid.password}">
      <input type="text" name="email" placeholder="  EMAIL" id="mail" value="${finid.email}">
      <input type="text" name="avatar" placeholder="  le lien image/https://source.unsplash.com/random?programming" id="idi" value="${finid.image}">
    </div>
    <button onclick="miseAjour(event)"><i class="fa-solid fa-pen-to-square"></i>Update</button> 


</div> `;

    let modifier = document.querySelector(".frontbox");
    modifier.innerHTML = put;
  });

  function miseAjour(e) {
    let firstname = document.querySelector("#nome");
    let mdpasse = document.querySelector("#pass");
    let profession = document.querySelector("#profe");
    let email = document.querySelector("#mail");
   

    console.log("salut");
    e.preventDefault();
    let ide = e.target.closest(".login").id;
    console.log(ide);
    let superAdmin = JSON.parse(localStorage.getItem("admin"));
    let finid = superAdmin.find((element) => element.id === ide);

     finid.email=email.value;
     finid.firstname=firstname.value;
     finid.profession=profession.value;
     finid.mdpasse=mdpasse.value
  
    filter = superAdmin.filter((element) => element.id ===ide);
    filter.push(finid)

    localStorage.setItem("admin", JSON.stringify(filter));
  }
}

// let superAdmin = JSON.parse(localStorage.getItem("admin"));
//     let finid = superAdmin.find((element) => element.id === ide);