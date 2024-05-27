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

var dodgeT = document.getElementById('dodgeT');
var mentelT = document.getElementById('mentelT');
var socialT = document.getElementById('socialT');
var brawlT = document.getElementById('brawlT');
var meleeT = document.getElementById('meleeT');
var phyV = document.getElementById('phyV');
var menV = document.getElementById('menV');
var socV = document.getElementById('socV');
var dodgeV = document.getElementById('dodgeV');
var brawlV = document.getElementById('brawlV');
var meleeV = document.getElementById('meleeV');

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
  localStorage.setItem('dodgeV', dodgeV.value);
  localStorage.setItem('brawlV', brawlV.value);
  localStorage.setItem('meleeV', meleeV.value);
  localStorage.setItem('phyV', phyV.value);
  localStorage.setItem('menV', menV.value);
  localStorage.setItem('socV', socV.value);
}

function updateWindow() {
  if (localStorage.length == 0) {
    glamerOutput.innerHTML = glamerSlider.value;
    wOutput.innerHTML = wSlider.value;

    saveState();
  } else {
    setGlamerMax(seeming.value, true);
    wSlider.value = localStorage.getItem('will');

    dodgeV.value = localStorage.getItem('dodgeV');
    brawlV.value = localStorage.getItem('brawlV');
    meleeV.value = localStorage.getItem('meleeV');
    phyV.value = localStorage.getItem('phyV');
    menV.value = localStorage.getItem('menV');
    socV.value = localStorage.getItem('socV');

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
    // Calculate and update pool values here
    var totalDodge = parseInt(phyV.value) + parseInt(dodgeV.value);
    var totalBrawl = parseInt(phyV.value) + parseInt(brawlV.value);
    var totalMelee = parseInt(phyV.value) + parseInt(meleeV.value);

    dodgeT.innerHTML = totalDodge;
    mentelT.innerHTML = parseInt(menV.value);
    socialT.innerHTML = parseInt(socV.value);
    brawlT.innerHTML = totalBrawl;
    meleeT.innerHTML = totalMelee;
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

phyV.onchange = function() {
  saveState();
  updateWindow();
}

menV.onchange = function() {
  saveState();
  updateWindow();
}

socV.onchange = function() {
  saveState();
  updateWindow();
}

dodgeV.onchange = function() {
  saveState();
  updateWindow();
}

brawlV.onchange = function() {
  saveState();
  updateWindow();
}

meleeV.onchange = function() {
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
