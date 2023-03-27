let btn = document.querySelector("button");

let fichier = document.querySelector("#id");
let mdpasse = document.querySelector("#password");
let profession= document.querySelector("#profession");
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
console.log(superAdmin[0].image.split("\\")[2], "text");
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
