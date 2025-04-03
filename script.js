let removebtn = document.querySelector(".remove-btn-count")
let addbtn = document.querySelector(".add-btn-count")
let count = document.querySelector(".btn1-count")
let korzina = document.querySelector(".hover-box-cart")
let savatfoto = document.querySelector(".savat")


document.addEventListener("DOMContentLoaded", function () {
    savatfoto.addEventListener("mouseover", function(){
        korzina.style.display = "block"
    })
    
    savatfoto.addEventListener("mouseleave", function(){
        korzina.style.display = "none"
    })
});










// + btn bosilganda textContentni 1 taga oshirish
// - btn bosilganda textContentni 1 taga kamaytirish
addbtn.addEventListener("click", function () {
    if (count.textContent >= 0) {
        count.textContent++;
    }
  
});

removebtn.addEventListener("click", function () {
    if (count.textContent > 0) {
        count.textContent--;
    }
});
