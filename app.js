const small = document.getElementById("small");
const btnBoutique = document.getElementById("btnBoutique");
const divFill = document.getElementById("divFill");
const btnExit = document.getElementById("btnExit");





// small.addEventListener('mouseenter',function () {
//      divFill.classList.remove("d-none")
//      console.log("survoler");
//  });
//  small.addEventListener('mouseleave',function () {
//      divFill.classList.add("d-none")
//      console.log("De-survoler"); 
//  })

btnBoutique.addEventListener('click',function () {
    divFill.classList.remove("d-none");
});
btnExit.addEventListener('click',function () {
    divFill.classList.add("d-none");
});