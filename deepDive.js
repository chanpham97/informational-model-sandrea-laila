let button = document.getElementById("btn1")

let pTag = document.getElementById("pTag")


// ADDING A EVENTLISTENR SO WE CAN HAVE A HOVER EFFECT
button.addEventListener("mouseover", function(){
  pTag.textContent = "Data from the CDC indicate that Black women face a disproportionate risk of mortality from pregnancy-related complications, with rates two to three times higher than those for white women. Alarmingly, most of these maternal deaths are preventable. This increased risk affects Black women across various socioeconomic backgrounds, underscoring the pervasive nature of the issue. In addition several factors contribute to these disparities, including discrepancies in healthcare quality, prevalence of underlying chronic conditions, systemic racism, and implicit biases within healthcare systems."
})

button.addEventListener('click', function(){
  pTag.textContent = ""
})





let lBtn = document.querySelector(".ppw")
console.log(lBtn.length)

let sbm = document.getElementById("sbm")
console.log(sbm.length)


lBtn.addEventListener('mouseover', function(event){
sbm.textContent = "Save Black Mothers"
})

lBtn.addEventListener('mouseout', function(event){
sbm.textContent = "POC Maternity Issues"
})
// ANOTHER MOUSEROVER EFFECT

let bmm = document.getElementById("bmm")

bmm.addEventListener('mouseover', function(event){
bmm.src = bmm.src.replace("jpg", "webp") 
})

bmm.addEventListener('mouseout', function(event){
bmm.src = bmm.src.replace("webp","jpg")
})

