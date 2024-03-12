let nav =document.querySelector("#navArea");
let mask =document.querySelector("#mask");
let btn =document.querySelector(".toggle");

btn.addEventListener('click', () => {
  nav.classList.toggle("open");
});
mask.addEventListener("click",()=>{
  nav.classList.toggle("open");
});