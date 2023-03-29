let btn = document.querySelector("button");

let nom = document.querySelector("#tache");
let prix = document.querySelector("#prix");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let tache = {
    id: "",
    nom: nom.value,
    prix: prix.value,
  };

  console.log(tache);
  let tacheTravailleur = JSON.parse(localStorage.getItem("tache"));

  if (tacheTravailleur) {
    tache.id += "tache00" + parseInt(tacheTravailleur.length + 1);

    tacheTravailleur.push(tache);

    localStorage.setItem("tache", JSON.stringify(tacheTravailleur));
  } else {
    tacheTravailleur = [];
    tache.id = "tache00" + parseInt(tacheTravailleur.length + 1);
    tacheTravailleur.push(tache);
    localStorage.setItem("tache", JSON.stringify(tacheTravailleur));
  }
});

let tacheTravailleur = JSON.parse(localStorage.getItem("tache"));
console.log(tacheTravailleur);

for (let i = 0; i < tacheTravailleur.length; i++) {
  let tache = ` <div class="item2"  id="${tacheTravailleur[i].id}">
      <p>${tacheTravailleur[i].nom}</p>
      <p>${tacheTravailleur[i].prix}</p>
     <p><i class="fa-solid fa-trash" ></i>DELETE</p>
    
    </div>`;
  let container = document.querySelector(".box_item2");

  container.innerHTML += tache;
}
