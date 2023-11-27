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
const divAffiche = document.getElementById("divAffiche")

let total = 0;



function affiche(array) {
    divAffiche.innerHTML=""
   array.forEach(element => {
    divAffiche.innerHTML += `<div class="col Cupcake-Items">
    <div class="card shadow-sm h-100">
      <!-- =====================  img sector 1 ========================== -->
       <img id="Cupcake" class="h-75 cardimg"  src="${element.image}" alt=""> 
      <!-- =====================  img sector 1  ========================== -->
      <div class="card-body bg-dark-subtle">
       <div class="div-Star"><i class="bi bi-star-fill fs-4 " id="etoile"></i><i class="bi bi-star-fill fs-4"></i><i class="bi bi-star-fill fs-4"></i><i class="bi bi-star-fill fs-4"></i><i class="bi bi-star-fill fs-4"></i></div>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
           <p class="nameCupcake">${element.name}</p>
          </div>
          <small id="small" style="font-size: 22px;color: green;">$5<div class="p-2"><i onclick="ajoutElements(index)"; id="ajouter" class="bi bi-cart-fill fs-3" style="cursor: pointer;"></i></div></small>
        </div>
      </div>
    </div>
  </div>`
   });
}
affiche(datas);

let tableChopingcard = [];
if (!JSON.parse(localStorage.getItem("tableChopingcard"))) {
    tableChopingcard = localStorage.setItem("tableChopingcard",JSON.stringify(tableChopingcard))
}
tableChopingcard = JSON.parse(localStorage.getItem("tableChopingcard"));

btnBoutique.addEventListener('click',function () {
    divFill.classList.remove("d-none");
});
btnExit.addEventListener('click',function () {
    divFill.classList.add("d-none");
});  
Clear.addEventListener('click',function () {
    localStorage.clear();
    document.location.reload();
});


idCake.addEventListener('click',function (event) {
   event.preventDefault(); 
   let arrayFilter = datas;
    arrayFilter = datas.filter((element) => element.categorie === "Cake");
    affiche(arrayFilter);
});
const ajouterAupanier = document.getElementById("ajouter");

  ajouterAupanier.addEventListener('click',function (event) {
     alert("Ajout fait avec succes");
     event.preventDefault();
         tableChopingcard.push(datas);
         localStorage.setItem("tableChopingcard",JSON.stringify(tableChopingcard));
         ajoutElements();
  });


function ajoutElements(event) {
    event?.preventDefault();
   tbody.innerHTML = "";
   let total = 0;
   tableChopingcard.forEach((element,index) => {
    total += parseInt(element.prix);
    console.log(total);
    iTems.innerText = index+1;
    tbody.innerHTML += `
    <tr>
       <td class="text-center w-25"><img  class= "imageAjout" src="${element.image}" alt=""></td>
       <td>${element.namePrix}</td>
       <td><i onclick="trash(${index})" class="bi bi-trash"></i></td>
   </tr>`
   });
   afficheTotal.innerText = total
   totalAchat.innerText = total

}
ajoutElements();

function trash(index) {
    tableChopingcard.splice(index);
    localStorage.setItem("tableChopingcard",JSON.stringify(tableChopingcard));
    ajoutElements();
  }
 