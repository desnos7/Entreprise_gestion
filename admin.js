let profession = document.querySelector("#profession");
let nom = document.querySelector("#name");
let prix = document.querySelector("#prix");
let contact = document.querySelector("#contact");

let select = document.querySelector("#pet-select");
let btn = document.querySelector("button");

let radio1 = null;

//ajout des travailleur avec leur tache
btn.addEventListener("click", (e) => {
  console.log("salut");
  e.preventDefault();

  let utilisateur = {
    id: "",
    select: select.value,
    nom: nom.value,
    profession: profession.value,
    contact: contact.value,
    prix: prix.value
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

function affiche() {
  for (let i = 0; i < administrat.length; i++) {
    let tache = `<div class="item2" id='${administrat[i].id}'>
      <p>${administrat[i].nom}</p>
      <p>${administrat[i].profession}</p>
        <p>${administrat[i].select}</p>
        <p>${administrat[i].prix}</p>
        <p>${administrat[i].contact}</p>
        
        <div class="radio">
       <input type="radio" id="yes" name="choix${[i]}" class="salut" value=${
      administrat[i].prix
    } >
       <input type="radio" id="not" name="choix${[i]}"  class="salut" value=0 >
        </div>
       <div class="action">  <p><i class="fa-sharp fa-solid fa-pen" onclick="miseAjour(event)"></i></p><p><i class="fa-solid fa-trash"></i></p><p><i class="fa-sharp fa-solid fa-paper-plane"></i></p>
      </div>
      
      </div>`;
    let container = document.querySelector(".box_item2");

    container.innerHTML += tache;
  }

  let icone = document.querySelectorAll(".fa-trash");

  for (k = 0; k < icone.length; k++) {
    icone[k].addEventListener("click", (e) => {
      e.preventDefault();
      let administrat = JSON.parse(localStorage.getItem("utilisateur"));

      const id = e.target.closest(".item2").id;
      console.log(id);

      administrat = administrat.filter((element) => element.id !== id);
    });
    administrat = JSON.parse(localStorage.getItem("administrat"));
  }
}
affiche();

//radio recuperation
document.querySelector(".radio").addEventListener("change",()=> {
 let radio = document.querySelectorAll("input");
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked === true) break;
  }
  console.log("value => " + radio[i].value);
  radio1 = radio[i].value;
});

// partie update
function miseAjour(e) {
  let firstname = document.querySelector("#nome");
  let mdpasse = document.querySelector("#pass");
  let profession = document.querySelector("#profe");
  let email = document.querySelector("#mail");

  console.log("salut");
  e.preventDefault();
  let ide = e.target.closest(".login").id;
  console.log(ide);
  let administrat = JSON.parse(localStorage.getItem("utilisateur"));
  let finid = administrat.find((element) => element.id === ide);

  finid.select = select.value;
  finid.nom = nom.value;
  finid.profession = profession.value;
  finid.prix = prix.value;

  filter = superAdmin.filter((element) => element.id === ide);
  filter.push(finid);

  localStorage.setItem("utilisateur", JSON.stringify(filter));
}

// partie supprimer partie radio

//recuperation de tous les donnee partie radio
let envoyer = document.querySelectorAll(".fa-paper-plane");

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
      prix: radio1
    };
    console.log("salut" + radio1);
    console.log(payer);


    let facture= JSON.parse(localStorage.getItem("facture"))||[];

    if (facture) {
      payer.id += "facture00" + parseInt(facture.length + 1);
  
      facture.push(payer);
  
      localStorage.setItem("facture", JSON.stringify(facture));
    } else {
      facture = [];
      payer.id = "facture00" + parseInt(facture.length + 1);
      facture.push(payer);
      localStorage.setItem("utilisateur", JSON.stringify(facture));
    }

  });
}
// ajouter les travailleur dans select

let tacheTravailleur = JSON.parse(localStorage.getItem("tache")) || [];

let Select = document.querySelector("#pet-select");

tacheTravailleur.forEach((element) => {
  let optionnon = `<option value="${element.id}">${element.nom}</option>`;
  // let optioprix = `<option value="${element.id}">${element.prix}</option>`;
  Select.innerHTML += optionnon;

  // console.log(optioprix);
});

//partie selection du travailleur avec le prix avc SelectIndex

let Prix = document.querySelector("#prix");

// SelctedIndex
let tabMtn = [];
tacheTravailleur.forEach((element) => {
  tabMtn.push(element.prix);
});
console.log(tabMtn);

Select.addEventListener("change", () => {
  console.log(Select.selectedIndex);
  prix.value = tabMtn[Select.selectedIndex];
});
