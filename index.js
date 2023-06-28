const ryzen = document.querySelector(".ryzen"),
  intel = document.querySelector(".intel"),
  cjaRyzen = document.getElementById("ryzen-caja"),
  cjaIntel = document.getElementById("intel-caja");

cjaRyzen.addEventListener("mouseover", () => {
  ryzen.classList.add("active");
});
cjaRyzen.addEventListener("mouseout", () => {
  ryzen.classList.remove("active");
});
cjaIntel.addEventListener("mouseover", () => {
  intel.classList.add("active");
});
cjaIntel.addEventListener("mouseout", () => {
  intel.classList.remove("active");
});
