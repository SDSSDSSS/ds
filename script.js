let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
var back = document.getElementById("back-home");
let backEng = document.getElementById("back-home-eng");
let dark = document.getElementById("dark");
let light = document.getElementById("light");
let page = document.getElementById("page");
let mobile = document.getElementById("Mobile-services");
let services = document.getElementById("services");
let pages = document.getElementById("pages");
let nav = document.getElementById("nav");
let mobEng = document.getElementById("mobile-servicesEng");
arabic.addEventListener("click", () => {
  $(".home").hide();
  $(".services-arabic").show();
  $(services).show();
  $(".arabic-nav").show();
  show();
});
english.addEventListener("click", () => {
  window.alert("sorry");
});

back.addEventListener("click", () => {
  $(".home").fadeIn();
  $(".services-arabic").hide();
  $("#pages").hide();
  hide();
});
backEng.addEventListener("click", () => {
  $(".home").fadeIn();
  $(".services-english").hide();
  hide();
});

dark.addEventListener("click", () => {
  $("body").css("background-color", "#1d3955");
  $("p").css("color", "white");
  $(".num").css("background", "#f37631");
  $("span").css("color", "white");
  $(".dark").hide();
  $(".light").fadeIn();
  $(".CC-info").css("background", "#1d3955");
  arabic.style.backgroundColor = "#f37631";
  document.getElementById("logo-main").src =
    "imgs/296086906_5325494487537129_184201910671316763_n.png";
  document.getElementById("logo-arabic").src =
    "imgs/296086906_5325494487537129_184201910671316763_n.png";
  document.getElementById("logo-english").src =
    "imgs/296086906_5325494487537129_184201910671316763_n.png";
  stop();
});

light.addEventListener("click", () => {
  $("body").css("background-color", "white");
  $("p").css("color", "#1d3955");
  $("span").css("color", "#1d3955");
  $(".dark").fadeIn();
  $(".light").hide();

  $("#number-phone").css("color", "#1d3955");
  arabic.style.backgroundColor = "#1d3955";
  document.getElementById("logo-main").src = "imgs/Capture.JPG";
  document.getElementById("logo-arabic").src = "imgs/Capture.JPG";
  document.getElementById("logo-english").src = "imgs/Capture.JPG";
  stop();
});

function show() {
  $(".nyaba1").delay(500).slideDown().fadeIn();
  $(".nyaba2").delay(1000).slideDown().fadeIn();
  $(".nyaba3").delay(1500).slideDown().fadeIn();
  $(".nyaba4").delay(2000).slideDown().fadeIn();
  $(".nyaba5").delay(2500).slideDown().fadeIn();
  $(".nyaba6").delay(3000).slideDown().fadeIn();
  $(".nyaba7").delay(3500).slideDown().fadeIn();
  $(".nyaba8").delay(4000).slideDown().fadeIn();
}

function hide() {
  $(".nyaba").hide();
}

mobile.addEventListener("click", () => {
  $(services).hide();
  $(pages).show();
  $(nav).hide();
});

mobEng.addEventListener("click", () => {
  $(".services").hide();
  $(".page-task-eng").fadeIn();
});
