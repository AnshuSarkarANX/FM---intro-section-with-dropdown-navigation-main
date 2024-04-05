const featureDropdown = document.querySelector("#feature-dropdown-wrapper");
const companyDropdown = document.querySelector("#company-dropdown-wrapper");

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

