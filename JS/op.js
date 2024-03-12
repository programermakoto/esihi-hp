document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.getElementById("preloader-wrapper");
  preloader.addEventListener("animationend", function() {
    preloader.style.display = "none"; // アニメーションが終了したらプリローダーを非表示にします。
    document.getElementById("content").classList.remove("hidden"); // コンテンツを表示します。
  });
});
