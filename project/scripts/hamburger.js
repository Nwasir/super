function toggleMenu() {
  document.querySelector("#primaryNav").classList.toggle("open");
  document.querySelector("#hamburgerBtn").classList.toggle("open");
}

document.querySelector("#hamburgerBtn").addEventListener("click", toggleMenu);
