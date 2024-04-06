const featureDropdown = document.querySelector("#feature-dropdown-wrapper");
const companyDropdown = document.querySelector("#company-dropdown-wrapper");
const mobilefeatureDropdown = document.querySelector("#mobile-feature-dropdown-wrapper");
const mobilecompanyDropdown = document.querySelector("#mobile-company-dropdown-wrapper");
const menubtn = document.querySelector("#burgerButton");
const closebtn = document.querySelector("#crossButton");
const sidebar = document.querySelector('.sidebar');
const blocker = document.querySelector('.blocker');
 blocker.onclick = toggle;
 function listToggle(e){
    e.classList.contains("is-active")
      ? e.classList.remove("is-active")
      : e.classList.add("is-active");
 }
function toggle() {
  function show() {
    sidebar.classList.add("visible");
    document.body.style.overflow = "hidden";
  }
  function hide() {
    sidebar.classList.remove("visible");
      closebtn.classList.remove("is-active");
      menubtn.classList.remove("is-active");
      mobilefeatureDropdown.classList.remove("is-active");
      mobilecompanyDropdown.classList.remove("is-active");
    document.body.style.overflow = "";
  }
  sidebar.classList.contains('visible') ? hide() : show();
}
menubtn.addEventListener("click", function () {
  this.classList.add("is-active");
  closebtn.classList.add("is-active");
  toggle();
});
closebtn.addEventListener("click", function () {
  this.classList.remove("is-active");
  menubtn.classList.remove("is-active");
  toggle();   
});

featureDropdown.addEventListener("mouseover", function () {
  listToggle(this);
});

featureDropdown.addEventListener("mouseout", function () {
  listToggle(this);
});
companyDropdown.addEventListener("mouseover", function () {
  listToggle(this);
});
companyDropdown.addEventListener("mouseout", function () {
  listToggle(this);
});
mobilefeatureDropdown.addEventListener("click", function () {
listToggle(this);
});
mobilecompanyDropdown.addEventListener("click", function () {
listToggle(this);
});