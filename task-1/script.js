let line = Array.from(document.querySelectorAll(".parent-affter"));

let home = document.getElementById("back-home");

let parentAffterTwo;

let containerOne = document.querySelector(".container-one");

let containerTwo = document.querySelector(".container-two");

let containerThree = document.querySelector(".container-three");

let inConBottom2 = document.querySelector(".in-con-bottom-1-1");

let inRit2 = document.querySelector(".in-rit-2");

let backs = document.querySelector(".back");

let submit = document.getElementById("subm");

let number = document.getElementById("number-phone");

let cc = document.getElementById("ccInfo");

let HomeCC = document.getElementById("HomeCC");

containerOne.classList.remove("disp-none");

containerOne.style.display = "flex";

line.forEach((element, index) => {
  let cartona = ``;

  let cartonaTwo;

  let word = ``;

  element.addEventListener("click", (e) => {
    cartona = `${element.innerHTML}`;

    word = element.parentElement.children[index].outerText;

    containerTwo.children[1].innerHTML = cartona;

    containerOne.style.display = "none";

    $(".container-boutm").hide();

    containerOne.classList.add("disp-none");

    containerTwo.classList.remove("disp-none");

    containerOne.style.display = "flex";

    inRit2.innerHTML = `<div class="w200px parent-affter"> ${cartona} </div>`;

    cartonaTwo = `

    <div class="parent-affter-2">
      <div class="serves" >
        <p>فواتير ${word} </p>
      </div>
    </div>

    <div class="parent-affter-2">
      <div class="serves" >
        <p> ${word} ADSL </p>
      </div>
    </div>

    <div class="parent-affter-2">
      <div class="serves" >
        <p> ${word} بطاقات </p>
      </div>
    </div>

    <div class="parent-affter-2" id="goo">
      <div class="serves" >
        <p>شحن ${word}</p>
      </div>
    </div>
 
 

    `;

    inConBottom2.innerHTML = cartonaTwo;

    parentAffterTwo = Array.from(document.querySelectorAll(".parent-affter-2"));

    functionName();

    //  functionName();
  });
});

async function functionName() {
  await parentAffterTwo.forEach((element) => {
    element.addEventListener("click", () => {
      containerTwo.classList.add("disp-none");

      containerThree.classList.remove("disp-none");

      inRit2.innerHTML += element.innerHTML;
    });
  });
}

backs.addEventListener("click", () => {
  containerOne.style.display = "flex";

  containerOne.classList.remove("disp-none");

  containerTwo.classList.add("disp-none");
});

let numbers = document.querySelectorAll(".num");

let input = document.querySelector("#input");

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    input.value += num.innerText;

    var phoneno = /^[0-9]{11}$/;

    input.style.border = "none";
  });
});

let dle = document.querySelector(".dle");

dle.addEventListener("click", () => {
  input.value = "";
});

home.addEventListener("click", () => {
  containerTwo.classList.add("disp-none");
  containerThree.classList.add("disp-none");
  containerOne.classList.remove("disp-none");
});

let regex = /01[0125][0-9]{8}$/;
let checkphone = document.querySelector(".checkphone");

submit.addEventListener("click", () => {
  if (regex.test(checkphone.value)) {
    cc.style.display = "flex";
    console.log("aa");
  } else {
    number.innerText = "من فضلك ادخل رقمك بشكل صحيح";
  }
});

HomeCC.addEventListener("click", () => {
  cc.style.display = "none";
});
