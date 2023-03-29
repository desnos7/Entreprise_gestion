let profession = document.querySelector("#profession");
let nom = document.querySelector("#name");
let prix = document.querySelector("#prix");

let select = document.querySelector("#pet-select");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  console.log("salut");
  e.preventDefault();

  let utilisateur = {
    id: "",
    select: select.value,
    nom: nom.value,
    profession: profession.value,
    prix: prix.value,
  };

  console.log(utilisateur);
  let administrat = JSON.parse(localStorage.getItem("utilisateur"));

  if (administrat) {
    utilisateur.id += "tv00" + parseInt(administrat.length + 1);

    administrat.push(utilisateur);

    localStorage.setItem("utilisateur", JSON.stringify(administrat));
  } else {
    administrat = [];
    utilisateur.id = "tv00" + parseInt(administrat.length + 1);
    administrat.push(utilisateur);
    localStorage.setItem("utilisateur", JSON.stringify(administrat));
  }
});
let administrat = JSON.parse(localStorage.getItem("utilisateur")) || [];

for (let i = 0; i < administrat.length; i++) {
  let tache = `<div class="item2" id='${administrat[i].id}'>
    <p>${administrat[i].nom}</p>
      <p>${administrat[i].select}</p>
      <p>${administrat[i].prix}</p>
      <div class="radio">
     <input type="radio" id="yes" name="choix${[i]}" class="salut" value="${
    administrat[i].prix
  }" >
     <input type="radio" id="not" name="choix${[i]}"  class="salut" value="0" >
      </div>
     <div class="action">  <p><i class="fa-sharp fa-solid fa-pen"></i></p><p><i class="fa-solid fa-trash"></i></p><p><i class="fa-sharp fa-solid fa-paper-plane"></i></p>
    </div>
    
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

function debut() {
  let icon = document.querySelectorAll("#not ");
  console.log(icon);

  for (let i = 0; i < icon.length; i++) {
    icon[i].addEventListener("click", (e) => {
      e.preventDefault();
      let id = e.target.closest(".item2").id;
    });
  }
}

let envoyer = document.querySelectorAll(".fa-paper-plane");
console.log(icon);

for (let i = 0; i < envoyer.length; i++) {
  envoyer[i].addEventListener("click", (e) => {
    e.preventDefault();
    console.log("salut");
    let id = e.target.closest(".item2").id;
    console.log(id);
    let administrat = JSON.parse(localStorage.getItem("utilisateur"));
    let finid = administrat.find((element) => element.id === id);

    let payer = {
      id: finid.id,
      select: finid.select,
      nom: finid.nom,
      profession: finid.profession,
      prix: finid.prix,
    };

    console.log(payer);
  });
}

let tacheTravailleur = JSON.parse(localStorage.getItem("tache"));

tacheTravailleur.forEach((element) => {
  let optionnon = `<option value="${element.id}">${element.nom}</option>`;
  let optioprix = `<option value="${element.id}">${element.prix}</option>`;

  let Select = document.querySelector("#pet-select");

  Select.innerHTML += optionnon;

  console.log(optioprix);

});

let Prix = document.querySelector("#prix");

