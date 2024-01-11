;
var bloodSlider = document.getElementById("bloodRange");
var bloodOutput = document.getElementById("bValue");

var wSlider = document.getElementById("willRange");
var wOutput = document.getElementById("wValue");

var gen = document.getElementById('gen');

var strCheck = document.getElementById("str");
var dexCheck = document.getElementById("dex");
var staCheck = document.getElementById("sta");

var fortCheck = document.getElementById("fort");
var rugCheck = document.getElementById("rug");

var healthTracker = document.getElementById("healthTracker");

let DATA = {...localStorage}; // copy localStorage to DATA

window.onload = function () {
  updateWindow();
}
function saveState() {
  localStorage.setItem('blood', bloodSlider.value);
  localStorage.setItem('will', wSlider.value);
  localStorage.setItem('gen', gen.value);
  localStorage.setItem('str', strCheck.checked);
  localStorage.setItem('dex', dexCheck.checked);
  localStorage.setItem('sta', staCheck.checked);
  localStorage.setItem('fort', fortCheck.checked);
  localStorage.setItem('rug', rugCheck.checked);
}

function updateWindow() {
  if (localStorage.length == 0) {
    bloodOutput.innerHTML = bloodSlider.value;
    wOutput.innerHTML = wSlider.value;

    saveState();
  } else {
    setBloodMax(gen.value, true);
    wSlider.value = localStorage.getItem('will');

    if (localStorage.getItem('str') === 'true') {strCheck.checked = true;}
    if (localStorage.getItem('dex') === 'true') {dexCheck.checked = true;}
    if (localStorage.getItem('sta') === 'true') {staCheck.checked = true;}
    if (localStorage.getItem('fort') === 'true') {fortCheck.checked = true;}
    if (localStorage.getItem('rug') === 'true') {rugCheck.checked = true;}

    if (fortCheck.checked && staCheck.checked) {
      healthTracker.classList.add('hasFortSta');
    } else {
      healthTracker.classList.remove('hasFortSta');
    }
    if (rugCheck.checked) {
      healthTracker.classList.add('hasRug');
    } else {
      healthTracker.classList.remove('hasRug');
    }

  }
}

bloodSlider.onchange = function() {
  setblood();
}

wSlider.onchange = function() {
  setWill();
}

gen.onchange = function() {
  setBloodMax(gen.value);
}

strCheck.onchange = function() {
  saveState();
  updateWindow();
}
dexCheck.onchange = function() {
  saveState();
  updateWindow();
}
fortCheck.onchange = function() {
  saveState();
  updateWindow();
}
staCheck.onchange = function() {
  saveState();
  updateWindow();
}
rugCheck.onchange = function() {
  saveState();
  updateWindow();
}


function setblood(skipSave) {
  bloodOutput.innerHTML = bloodSlider.value;
  if(!skipSave)saveState();
}

function setWill() {
  wOutput.innerHTML = wSlider.value;
  saveState();
}

function setBloodMax(gen, skipSave) {
  var max;
  switch (gen) {
    case '0':
      max = 10;
      break;
    case '1':
      max = 12;
      break;
    case '2':
      max = 15;
      break;
    case '3':
      max = 20;
      break;
    case '4':
      max = 30;
      break;
    default:
      break;
  }

  bloodSlider.max = max;
  bloodSlider.value = max;

  if(!skipSave)setblood();
}
