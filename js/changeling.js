var glamerSlider = document.getElementById("glamerRange");
var glamerOutput = document.getElementById("gValue");

var wSlider = document.getElementById("willRange");
var wOutput = document.getElementById("wValue");

var seeming = document.getElementById('seeming');

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
  localStorage.setItem('glamer', glamerSlider.value);
  localStorage.setItem('will', wSlider.value);
  localStorage.setItem('seeming', seeming.value);
  localStorage.setItem('str', strCheck.checked);
  localStorage.setItem('dex', dexCheck.checked);
  localStorage.setItem('sta', staCheck.checked);
  localStorage.setItem('fort', fortCheck.checked);
  localStorage.setItem('rug', rugCheck.checked);
}

function updateWindow() {
  if (localStorage.length == 0) {
    glamerOutput.innerHTML = glamerSlider.value;
    wOutput.innerHTML = wSlider.value;

    saveState();
  } else {
    setGlamerMax(seeming.value, true);
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

glamerSlider.onchange = function() {
  setGlamer();
}

wSlider.onchange = function() {
  setWill();
}

seeming.onchange = function() {
  setGlamerMax(seeming.value);
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

function setGlamer(skipSave) {
  glamerOutput.innerHTML = glamerSlider.value;
  if (!skipSave) saveState();
}

function setWill() {
  wOutput.innerHTML = wSlider.value;
  saveState();
}

function setGlamerMax(seeming, skipSave) {
  var max;
  switch (seeming) {
    case '1':
      max = 14;
      break;
    case '2':
      max = 13;
      break;
    case '3':
      max = 12;
      break;
    case '4':
      max = 11;
      break;
    case '5':
      max = 10;
      break;
    default:
      break;
  }

  glamerSlider.max = max;
  glamerSlider.value = max;

  if (!skipSave) setGlamer();
}
