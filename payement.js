let facture = JSON.parse(localStorage.getItem("facture")) || [];

for (let i = 0; i < facture.length; i++) {
  let tache = `<div class="item2" id='${facture[i].id}'>
  <p>${facture[i].nom}</p>
  <p>${facture[i].profession}</p>
    <p>${facture[i].select}</p>
    <p>${facture[i].prix}</p>
    <p>${facture[i].contact}</p>
    
    <div class="radio">
 
   <div class="action">  <p><i class="fa-sharp fa-solid fa-pen" onclick="miseAjour(event)"></i></p><p><i class="fa-solid fa-trash"></i></p><p><i class="fa-sharp fa-solid fa-paper-plane"></i></p>
  </div>
  
  </div>`;
  let container = document.querySelector(".box_item2");

  container.innerHTML += tache;
}
let payer = document.querySelectorAll(".fa-paper-plane");
for (let i = 0; i < payer.length; i++) {
  payer[i].addEventListener("click", (e) => {
    e.preventDefault();
    let id = e.target.closest(".item2").id;
    console.log(id);

    let facture = JSON.parse(localStorage.getItem("facture"));
    let finid = facture.find((element) => element.id === id);
    console.log(finid);

    let ajouter = `<div class="reseau" id='${finid.id}'>
      <img src="wave.webp" alt="" />
      <img src="OrangeMoney.jpeg" alt="" />
      <img src="Moov_Africa_logo.png" alt="" />
      <img src="MTN money.jpeg" alt="" />
    </div>

    <div class="login">
      <div class="inputbox">
        
        <input type="text" name="contact" placeholder=" Contact" value=${finid.contact}>
        <input type="text" name="number" placeholder="  prix" value=${finid.prix}>
        <button onclick='suit(event)'><i class="fa-solid fa-user-plus"></i>payer</button>
      </div>
    </div>
  </div> `;

    let contener = document.querySelector(".frontbox");
    contener.innerHTML = ajouter;
  });
  function suit(e) {

    e.preventDefault();
    swal({
      title: "EXCELLENT!",
      text: "payement effectue!",
      icon: "success",
      button: "OK!",
    });
    let contener = document.querySelector(".frontbox");
contener.style.display='none'

  }
}
