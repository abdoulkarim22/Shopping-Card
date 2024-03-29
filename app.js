const small = document.getElementById("small");
const btnBoutique = document.getElementById("btnBoutique");
const divFill = document.getElementById("divFill");
const btnExit = document.getElementById("btnExit");
const tbody = document.getElementById("tbody");
const Clear = document.getElementById("Clear");
const iTems = document.getElementById("iTems");
const etoile = document.getElementById("etoile");
const totalAchat = document.getElementById("totalAchat");
const afficheTotal = document.getElementById("afficheTotal");
// const filtre = document.querySelectorAll(".Sweet-Items");
const theCard = document.getElementById("theCard")
const idCake = document.getElementById("idCake");
const divAffiche = document.getElementById("divAffiche");
const Cupcake = document.getElementById("Cupcake");
const Sweet = document.getElementById("Sweet");
const Dougnut = document.getElementById("Dougnut");
const all = document.getElementById("all");
const divAnnonce = document.getElementById("divAnnonce");
const img = document.getElementsByTagName("img");
const text = document.getElementById("text")
let total = 0;

// ===================== search ==========================
const search = () => {
  const search = document.getElementById("input-search").value.toUpperCase();
  const produits = document.querySelectorAll(".produits");
  const allName = document.getElementsByTagName("h2");

  for (let i = 0; i < allName.length; i++) {
    let length = produits[i].getElementsByTagName("h2")[0];

    if (length) {
      let textvalue = length.textContent || length.innerHTML
      if (textvalue.toUpperCase().indexOf(search) > -1) {
        console.log(textvalue.indexOf(search));
        produits[i].style.display = ""
      }else{
        produits[i].style.display = "none"
      }
    }
   
    
  }
 
}
// ===================== search ==========================






btnBoutique.addEventListener('click',function () {
    divFill.classList.remove("d-none");
});
btnExit.addEventListener('click',function () {
    divFill.classList.add("d-none");
});  
// Clear.addEventListener('click',function () {
//     localStorage.clear();
//     document.location.reload();
// });

/* ===================== event Filter ========================================= */
idCake.addEventListener('click',function (event) {
   event.preventDefault(); 
   let arrayFilter = datas;
    arrayFilter = datas.filter((element) => element.categorie === "Cake");
    affiche(arrayFilter);
});
Cupcake.addEventListener('click',function (event) {
  event.preventDefault(); 
  let arrayFilter = datas;
   arrayFilter = datas.filter((element) => element.categorie === "Cupcake");
   affiche(arrayFilter);
});
Sweet.addEventListener('click',function (event) {

  event.preventDefault(); 
  let arrayFilter = datas;
   arrayFilter = datas.filter((element) => element.categorie === "Sweet");
   affiche(arrayFilter);
});
Dougnut.addEventListener('click',function (event) {
  event.preventDefault(); 
  let arrayFilter = datas;
   arrayFilter = datas.filter((element) => element.categorie === "Dougnut");
   affiche(arrayFilter);
});
all.addEventListener('click',function (event) {
  event.preventDefault(); 
  let arrayFilter = datas;
   arrayFilter = datas.filter(() =>datas);
   affiche(arrayFilter);
});
/* ===================== event Filter ========================================= */






function affiche(array) {
  divAffiche.innerHTML= ""
 array.forEach((element,index) => {
  divAffiche.innerHTML += `<div id="the-Card" class="col">
  <div class="card shadow-sm h-100 produits">
    <!--onclick="viewImage()" =====================  img sector 1 ========================== -->
     <img   id="Cupcake" class="h-75 cardimg image_Card"  src="${element.image}" alt="">  
    <!-- <i class="bi bi-star-fill fs-4 " id="etoile_1"></i><i class="bi bi-star-fill fs-4 id="etoile_2""></i><i class="bi bi-star-fill fs-4 id="etoile_3""></i><i class="bi bi-star-fill fs-4 id="etoile_4""></i><i class="bi bi-star-fill fs-4 id="etoile_5""></i> =====================  img sector 1  ========================== -->
    <div class="card-body bg-dark-subtle">
     <div class="div-Star theStar" id="divStar"></div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
         <h2 class="nameCupcake">${element.name}</h2>
        </div>
        <small id="small" style="font-size: 22px;color: green;">${element.prix}<div class="p-2"><i onclick="ajoutElements(${index})"; id="ajouter" class="bi bi-cart-fill fs-3" style="cursor: pointer;"></i></div></small>
      </div>
    </div>
  </div>
</div>`
 });
}
affiche(datas);


const theStar = document.querySelectorAll(".theStar");
for (let i = 0; i < theStar.length; i++) {
  theStar[i].innerHTML = `<i class="bi bi-star-fill fs-4 " id="etoile_1"></i><i class="bi bi-star-fill fs-4" id="etoile_2"></i><i class="bi bi-star-fill fs-4 id="etoile_3""></i><i class="bi bi-star-fill fs-4 id="etoile_4""></i><i class="bi bi-star-fill fs-4 id="etoile_5""></i>`
}
// ========================= etoile ========================================

// ========================= etoile ========================================



   
// const next = document.getElementById("next");
//  next.addEventListener('click',function () {
//   text.innerHTML = ""
//     for (let  i= 0; i < datas.length; i++) {
//       const element = datas[i];
//       text.innerHTML = `<img src="${element.image}" alt="">`
      
//     }

//  });
// ========================== function  image ==========================
  const image_Card = document.querySelectorAll(".image_Card");
  const idimg = document.getElementById("image-no-source");
  const div_container = document.getElementById("div_container");
  const div_img = document.getElementById("div_img");

  function afficheImg(index) {
    const getsrc = image_Card[index].getAttribute("src");
    idimg.setAttribute("src", getsrc);

}
let indexActulle =  0;
image_Card.forEach((element,index) => {
  element.addEventListener('click',function () {
   indexActulle = index;
   afficheImg(indexActulle);
   div_container.style.display= "flex";
   document.body.style.overflow = "hidden";
  });
});
idimg.addEventListener('click',function () {
  div_container.style.display = "none";
  document.body.style.overflow = "auto";
});
const prev = document.getElementById("prev");
const next = document.getElementById("next");

prev.addEventListener('click',function () {
  if (indexActulle > 0) {
    indexActulle--;
   
    afficheImg(indexActulle);
  }
});
next.addEventListener('click',function () {
  if (indexActulle < image_Card.length -1) {
    indexActulle++;
    console.log(indexActulle);
    afficheImg(indexActulle);
  }else{
    indexActulle = 0;
  }
});
// ========================== function  image ==========================







let tableChopingCard = [];
if (!JSON.parse(localStorage.getItem("tableChopingCard"))) {
  tableChopingCard = localStorage.setItem("tableChopingCard",JSON.stringify(tableChopingCard));
}
 
tableChopingCard = JSON.parse(localStorage.getItem("tableChopingCard"));

function ajoutElements(index) {
  divAnnonce.classList.add("block");
  setTimeout(() =>{
    divAnnonce.classList.remove("block");
  },3000);
   tableChopingCard.push(datas[index]);
   localStorage.setItem("tableChopingCard",JSON.stringify(tableChopingCard));
   displayselements(); 
}
  function displayselements(index) {
    // index?.preventDefault();
   tbody.innerHTML = "";
    total = 0
  tableChopingCard.forEach((element,index) => {
    total += parseInt(element.prixe);
    iTems.innerText = index+1; 
    tbody.innerHTML += 
    `
    <tr>
       <td class="text-center w-25"><img  class= "imageAjout" src="${tableChopingCard[index].image}" alt=""></td>
       <td>${tableChopingCard[index].name}</td>
       <td class="text-center p-3">${tableChopingCard[index].prix}</td>
       <td><i onclick="trash(${index})" class="bi bi-trash fs-3"></i></td>
   </tr>
   `
  });
    totalAchat.innerText= total
    afficheTotal.innerText = total
    localStorage.setItem("tableChopingCard",JSON.stringify(tableChopingCard))
 }
  displayselements(); 



 


function trash(index) {
  tableChopingCard.splice(index,1);
  // localStorage.setItem("tableChopingcard",JSON.stringify(datas[index]));
  displayselements();
}
