addEventListener("load", loaded);

function loaded() {
  console.log("siden er loaded");
  document.querySelector(".burger").addEventListener("click", burger);
}

function burger() {
  document.querySelector(".burger").classList.toggle("skjul");
  document.querySelector(".xmark").classList.toggle("skjul");
  document.querySelector(".burgerlist").classList.toggle("skjul");

  document.querySelector(".xmark").addEventListener("click", burger);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.remove("hide");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.add("hide");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));
