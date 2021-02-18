// Write all of your Javascript Code in Here.
function changeNavbarOnScroll() {
  if (window.scrollY > 100) {
    document.getElementById("navbar").classList.add("sticky-top");
    document.getElementById("navbar").classList.add("shadow-sm");
  } else {
    document.getElementById("navbar").classList.remove("shadow-sm");
    document.getElementById("navbar").classList.remove("sticky-top");
  }
}

window.onscroll = changeNavbarOnScroll;
