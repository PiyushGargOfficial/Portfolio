//Select DOM items:
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const menuBrand = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const portrait = document.querySelector(".portrait");

//Set Initial state of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu(e) {
  e.preventDefault();
  if (!showMenu) {
    menuBtn.classList.add("active");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBrand.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));
    navItems.forEach(item => item.addEventListener("click", toggleActive));
    portrait.addEventListener("click", toggleActive);
    //Set the menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("active");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBrand.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set the menu state
    showMenu = false;
  }
}

function toggleActive(e) {
  e.preventDefault();
  menuBtn.classList.remove("active");
  menu.classList.remove("show");
  menuNav.classList.remove("show");
  menuBrand.classList.remove("show");
  navItems.forEach(item => item.classList.remove("show"));

  //Set the menu state
  showMenu = false;
}

$(document).ready(function () {
  var scroll_pos = 0;
  $(".nextSec").click(function (e) {
    e.preventDefault();
    var linkHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(linkHref).offset().top
      },
      1000
    );
  });
  $(".nextSec2").click(function (e) {
    e.preventDefault();
    var linkHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(linkHref).offset().top
      },
      1000
    );
  });
  $(".nav-link").click(function (e) {
    e.preventDefault();
    var linkHref = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(linkHref).offset().top
      },
      2000
    );
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 660) {
      $(".hamburger").addClass("black");
    } else {
      $(".hamburger").removeClass("black");
    }
  });
});