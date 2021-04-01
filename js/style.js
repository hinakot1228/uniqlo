var btn = document.getElementsByClassName("btn");
var i;
for(i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click",function(){
    var panel = this.nextElementSibling;
    if(panel.style.display == "block") {
      $(panel).slideUp(300);
    }else {
      $(panel).slideDown(300);
    }
  })
}

$(function(){
	$('.toggle_title').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});

$(function(){
  $('.single-item').slick({
    // accessibility: true,
    autoplay: false,
    autoplaySpeed: 1000,
    dots: true,
    // fade: true,
    slidesToShow:4,
    slidesToScroll:4
  });
});

// $(document).ready(function () {
//   $('.side-bar-btn').click(function (event) {
//       $(event).find('i').toggleClass('far fa-eye far fa-eye-slash');
//   });
// });
// function fontawesomeChange( element, changeClassName ) {
//   element.classList.toggle(changeClassName);
// }

$(function(){
	$('.toggle_title').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});

// ハンバーガーメニュー
$(function() {
  $('.hamburger, .hamburger2').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});

// ハンバーガーメニューのボタンを押すと「アカウントボタン」が消え、「閉じるボタン」が表れる
var hamburger2 = document.getElementById("hamburger2");
document.getElementById("hamburger").onclick = function() {
  this.classList.toggle("hamburger-close");
  hamburger2.classList.toggle("hamburger2-open");
};
// ハンバーガーメニューのボタンを押すと「閉じるボタン」が表れる
var hamburger = document.getElementById("hamburger");
document.getElementById("hamburger2").onclick = function() {
  this.classList.toggle("hamburger2-close");
  hamburger.classList.toggle("hamburger-open");
};
