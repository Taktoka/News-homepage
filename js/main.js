let menuIcon = document.querySelector(".menu-icon");
links = document.querySelector(".nav-links");
closeBtn = document.querySelector(".close-btn");
console.log(closeBtn);

menuIcon.onclick = function () {
  links.classList.toggle("active");
  closeBtn.style.display = "block";
};
closeBtn.onclick = function () {
  links.classList.remove("active");
  closeBtn.style.display = "none";
};
