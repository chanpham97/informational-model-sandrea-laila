// ADDING A BUTTONS TO HAVE A MOUSEOUT AND MOUSEOVER EFFECT

let lBtn = document.querySelector(".ppw")


let sbm2 = document.getElementById("sbm2")


lBtn.addEventListener('mouseover', function(event){
sbm2.textContent = "Save Black Mothers"
})

lBtn.addEventListener('mouseout', function(event){
sbm2.textContent = "POC Maternity Issues"
})

let oneBtn = document.getElementById("Lbtn")

let img = document.getElementById("img")

oneBtn.addEventListener('click', function(event){
img.src = "bm statistic.jpg"
})


