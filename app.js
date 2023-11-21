const small = document.getElementById("small");
const btnBoutique = document.getElementById("btnBoutique");
const divFill = document.getElementById("divFill");
const btnExit = document.getElementById("btnExit");
const tbody = document.getElementById("tbody");
const ajouterAupanier = document.getElementById("ajouter");
const Clear = document.getElementById("Clear");
const iTems = document.getElementById("iTems");


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
    event.preventDefault();
        tableChopingcard.push(datas);
        localStorage.setItem("tableChopingcard",JSON.stringify(tableChopingcard));
        ajoutElements();

 });


function ajoutElements(event) {
   tbody.innerHTML = "";
   tableChopingcard.forEach((element,index) => {
    iTems.innerText = index+1;
    tbody.innerHTML += `
    <tr>
       <td class="text-center w-25"><img  class= "imageAjout" src="${element.image}" alt=""></td>
       <td>${element.namePrix}</td>
       <td><i class="bi bi-trash"></i></td>
   </tr>
   `
   });

}
ajoutElements();