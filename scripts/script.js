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

// Header animatie die verdwijnt en weer verschijnt met scrollen --> bron: Thomas Norden & ChatGPT 


// -------------------- KLEURPICKER --------------------
const colorPicker = document.getElementById('colorPicker');
const applyColorBtn = document.getElementById('applyColorBtn');

// Kleur toepassen bij klikken
applyColorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = colorPicker.value;
});

// https://stackoverflow.com/questions/68062443/how-to-change-background-color-using-color-picker-without-click-on-button


// -------------------- LOGO ANIMATIE --------------------
const logo = document.querySelector('.logo');

logo.addEventListener('click', function() {
  logo.style.transition = 'transform 0.3s ease';
  logo.style.transform = 'translateY(-30px)'; 

  setTimeout(() => {
    logo.style.transform = 'translateY(0)';
  }, 300);
});

//lesstof week 4 animatie + inleiding programmeren & chatgpt


// -------------------- MODAL --------------------
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Open modal bij klikken
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// https://www.w3schools.com/howto/howto_css_modals.asp




// -------------------- DROPDOWNMENU --------------------
var deButton = document.querySelector("nav button");

deButton.onclick = toggleMenu;

function toggleMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");
}

// https://codepen.io/shooft/pen/GRbxLYV?editors=0100 


// -------------------- DARK MODE --------------------
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp


// -------------------- BOODSCHAPPENLIJSTJE --------------------
function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');
  
  var taskItem = document.createElement('li');
  taskItem.textContent = taskInput.value;
  taskList.appendChild(taskItem);
  taskInput.value = '';
}

// Bron chatgpt //