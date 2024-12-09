// -------------------- HEADER ANIMATIE --------------------
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

// -------------------- KLEURPICKER --------------------
const colorPicker = document.getElementById('colorPicker');
const applyColorBtn = document.getElementById('applyColorBtn');

// Kleur toepassen bij klikken
applyColorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = colorPicker.value;
});

// -------------------- LOGO ANIMATIE --------------------
const logo = document.querySelector('.logo');

logo.addEventListener('click', function() {
  logo.style.transition = 'transform 0.3s ease';
  logo.style.transform = 'translateY(-30px)'; 

  setTimeout(() => {
    logo.style.transform = 'translateY(0)';
  }, 300);
});

// -------------------- MODAL --------------------
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Open modal bij klikken
btn.onclick = function() {
  modal.style.display = "block";
}

// Sluit modal bij klikken op <span> (x)
span.onclick = function() {
  modal.style.display = "none";
}

// Sluit modal bij klikken buiten de modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// -------------------- DROPDOWNMENU --------------------
var deButton = document.querySelector("nav button");

deButton.onclick = toggleMenu;

function toggleMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");
}

// -------------------- DARK MODE --------------------
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
