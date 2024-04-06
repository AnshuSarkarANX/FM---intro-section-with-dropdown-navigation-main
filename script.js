const featureDropdown = document.querySelector("#feature-dropdown-wrapper");
const companyDropdown = document.querySelector("#company-dropdown-wrapper");
const menubtn = document.querySelector("#burgerButton");
const closebtn = document.querySelector("#crossButton");
const sidebar = document.querySelector("#sidenavbar");
menubtn.addEventListener("click", function () {
  this.classList.add("is-active");
  closebtn.classList.add("is-active");
  sidebar.classList.add("is-active");
});
closebtn.addEventListener("click", function () {
  this.classList.remove("is-active");
  menubtn.classList.remove("is-active");
  sidebar.classList.remove("is-active");
});

featureDropdown.addEventListener("mouseover", function () {
  this.classList.add("is-active");
});

featureDropdown.addEventListener("mouseout", function () {
  this.classList.remove("is-active");
});
companyDropdown.addEventListener("mouseover", function () {
  this.classList.add("is-active");
});
companyDropdown.addEventListener("mouseout", function () {
  this.classList.remove("is-active");
});

