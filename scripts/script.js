// Header animatie
// bron: Thomas Norden & ChatGPT
let lastScrollY = window.scrollY;
let header = document.querySelector('#Zoekbalk');

window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down, hide the header
    header.classList.remove('header-visible');
    header.classList.add('header-hidden');
  } else if (window.scrollY < lastScrollY) {
    // Scrolling up, show the header
    header.classList.remove('header-hidden');
    header.classList.add('header-visible');
  }
  lastScrollY = window.scrollY;
});



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// https://www.w3schools.com/howto/howto_css_modals.asp






// /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

// // https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp

