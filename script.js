addEventListener("load", loaded);

function loaded() {
  console.log("siden er loaded");
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

/*if ((document.querySelector(".tema").classList = "show")) {
  document.querySelector(".lært").classList.add("plads");
}*/
