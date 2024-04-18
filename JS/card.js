const service_list = document.querySelectorAll(".service_list li");
const card = document.querySelector(".card");
const service_pic = document.querySelector(".service-pic");
const service_title = document.querySelector(".service_title");
const service_description = document.querySelector(".service_description");

service_list.forEach(function (service_listSingle) {
  service_listSingle.addEventListener("click", function () {
    const BgImg = this.style.backgroundImage;
    const dataTitle = this.getAttribute("data-title");
    const dataDescription = this.getAttribute("data-description");
    // alert(dataTitle);
    this.classList.add("selected");

    let bg_radius1 = Math.floor(Math.random() * (70 - 1) + 1);
    document.getElementById("radius1").style.left = bg_radius1 + "vh";
    let bg_radius2 = Math.floor(Math.random() * (70 - 1) + 1);
    document.getElementById("radius2").style.left = bg_radius2 + "vh";
    let bg_radius3 = Math.floor(Math.random() * (70 - 1) + 1);
    document.getElementById("radius3").style.left = bg_radius3 + "vh";
    let bg_radius4 = Math.floor(Math.random() * (70 - 1) + 1);
    document.getElementById("radius4").style.right = bg_radius4 + "vh";
    let bg_radius5 = Math.floor(Math.random() * (70 - 1) + 1);
    document.getElementById("radius5").style.right = bg_radius5 + "vh";
    let bg_radius6 = Math.floor(Math.random() * (70 - 1) + 1);
    document.getElementById("radius6").style.right = bg_radius6 + "vh";
    card.classList = "card card_animated";
    setTimeout(function () {
      service_pic.style.backgroundImage = BgImg;
      service_title.innerHTML = dataTitle;
      service_description.innerHTML = dataDescription;
    }, 700);
    setTimeout(function(){
      card.classList.remove("card_animated");
    },1500)
  });
});
