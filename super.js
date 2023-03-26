let btn= document.querySelector('button')

let fichier= document.querySelector('#id')
let mdpasse= document.querySelector('#password')
let email= document.querySelector('#Email')
let firstname= document.querySelector('#nom')








fichier.addEventListener("change",()=>{
    const file= fichier.files[0]
    const imageUrl=URL.createObjectURL(file);
})

btn.addEventListener("click",(e)=>{


    e.preventDefault()
    
    let admin={
        id:"",
        firstname: firstname.value,
       email:email.value,
       password:mdpasse.value,
       image:fichier.value

    }

    
console.log(admin);
let administrateur =JSON.parse(localStorage.getItem("admin")) 

if(administrateur){
    admin.id+="salut00"+parseInt((administrateur.length)+1)
  
    administrateur.push(admin)
    
    localStorage.setItem("admin",JSON.stringify(administrateur))

    
  

}else{
    
    administrateur=[]
    admin.id='salut00' +parseInt((administrateur.length)+1)
    administrateur.push(admin)
    localStorage.setItem("admin",JSON.stringify(administrateur))

}




})


let administrateur =JSON.parse(localStorage.getItem("admin")) 
for (let i =0; i < administrateur.length; i++){
    let tache =` <div class="item2"  id="${administrateur[i].id}">
    <img src=${administrateur[i].image} alt="">
      <p>${administrateur[i].firstname}</p>
      <p>${administrateur[i].firstname}</p>
     <p><i class="fa-solid fa-trash" ></i>DELETE</p>
    
    </div>`
    let container = document.querySelector(".box_item2");


    container.innerHTML +=tache 
    
}

let icon=document.querySelectorAll(".fa-trash")
console.log(icon);

for(let i =0; i < icon.length; i++){
 icon[i].addEventListener("click", (e)=>{

    e.preventDefault()
    let id= e.target.closest('.item2').id
    
    console.log(id);
    

if (condition) {
    
}


 })

}

 




