const small = document.getElementById("small");
const btnBoutique = document.getElementById("btnBoutique");
const divFill = document.getElementById("divFill");
const btnExit = document.getElementById("btnExit");
const tbody = document.getElementById("tbody");
const ajouterAupanier = document.getElementById("ajouter");
const Clear = document.getElementById("Clear");
const iTems = document.getElementById("iTems");
const etoile = document.getElementById("etoile");
const totalAchat = document.getElementById("totalAchat");
const afficheTotal = document.getElementById("afficheTotal");
let total = 0;



// etoile.addEventListener('click',function () {
//     etoile.classList.add("color");
    
// })


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
})

 ajouterAupanier.addEventListener('click',function (event) {
    alert("Ajout fait avec succes");
    event.preventDefault();
        tableChopingcard.push(datas);
        localStorage.setItem("tableChopingcard",JSON.stringify(tableChopingcard));
        ajoutElements();

 });


function ajoutElements(event) {
   tbody.innerHTML = "";
   let total = 0;
   tableChopingcard.forEach((element,index) => {
    total += parseInt(element.prix1);
    console.log(total);
    iTems.innerText = index+1;
    tbody.innerHTML += `
    <tr>
       <td class="text-center w-25"><img  class= "imageAjout" src="${element.image1}" alt=""></td>
       <td>${element.namePrix1}</td>
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