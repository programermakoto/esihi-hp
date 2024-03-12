"use strict";
{
  document.addEventListener('DOMContentLoaded', function() {
    // アニメーションが終了したとみなされるタイミングを設定
    setTimeout(function() {
        // アニメーション用要素をフェードアウト
        document.getElementById('animation').style.opacity = '0';
        
        // アニメーション用要素を非表示にする
        setTimeout(function() {
            document.getElementById('animation').style.display = 'none';
            // 本体コンテンツを表示
            document.getElementById('main-content').style.display = 'block';
        }, 500); // この時間はアニメーション用要素がフェードアウトするのに十分なものにする
    }, 3000); // ここで指定した時間がアニメーションの継続時間
});
// スクロールを再び有効にする関数
function enableScroll() {
  window.onscroll = null;
}


  
  function callback(entries) {
    entries.forEach(entry =>{
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("appear");
    });
  }

  const observer = new IntersectionObserver(callback,{
    threshold:0.5,
  });
  
  document.querySelectorAll(".animate").forEach(target => {
    observer.observe(target);
  });

//************************************/


  function scrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        toTop.classList.add("scrolled");
      } else {
        toTop.classList.remove("scrolled");
      }
    });
  }


  const toTop =document.getElementById("to_top");

  toTop.addEventListener("click",e=>{
    e.preventDefault();
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  })
  const scrollObserver = new IntersectionObserver(scrollCallback);
  scrollObserver.observe(document.getElementById("target-2"));//observで何か動きがあった時に知らせ捕らう
}
//************************************/
{
  document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY*10;//現在のスクロール位置
  
    // scrollPositionは現在のスクロール位置（ビューポートの上部からの距離）
    // heightはスクロール可能な残りのページの高さ。
    // ドキュメント全体の高さ(document.documentElement.scrollHeight)から現在のビューポートの高さ(window.innerHeight)を引いたもの。
    
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let scrollRatio = scrollPosition / height;
  
    // 背景色を黒から白に徐々に変化させる
    let bgColor = `rgb(${scrollRatio * 255}, ${scrollRatio * 255}, ${scrollRatio * 255})`;
    document.querySelector(".services").style.backgroundColor = bgColor;
  });
  
}
//************************************/
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".animated-element");
  elements.forEach(element => {
    // アニメーションを適用するためには、ここで何か特定の操作を行うこともできますが、
    // CSSのアニメーションは自動的に開始されるため、この例では必要ありません。
  });
});