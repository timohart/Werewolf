;
var rageSlider = document.getElementById("rangeLVL");
var rageOutput = document.getElementById("rageValue");

var regOutput = document.getElementById("regValue");
var addDmgOutput = document.getElementById("addDmgValue");
var rageActOutput = document.getElementById("rageActValue");

var formSelect = document.getElementById("formBreed");
var formTxt = document.getElementById("formText");

var strCheck = document.getElementById("str");
var dexCheck = document.getElementById("dex");
var staCheck = document.getElementById("sta");
var rugCheck = document.getElementById("rug");

var gnosisSlider = document.getElementById("gnosisRange");
var gnosisOutput = document.getElementById("gValue");

var wSlider = document.getElementById("willRange");
var wOutput = document.getElementById("wValue");

var healthTracker = document.getElementById("healthTracker");

var dodgeT = document.getElementById('dodgeT');
var dodgeW = document.getElementById('dodgeW');
var mentelT = document.getElementById('mentelT');
var socialT = document.getElementById('socialT');

var brawlT = document.getElementById('brawlT');
var brawlW = document.getElementById('brawlW');
var meleeT = document.getElementById('meleeT');
var meleeW = document.getElementById('meleeW');

var phyV = document.getElementById('phyV');
var menV = document.getElementById('menV');
var socV = document.getElementById('socV');

var dodgeV = document.getElementById('dodgeV');
var brawlV = document.getElementById('brawlV');
var meleeV = document.getElementById('meleeV');
var firearmsV = document.getElementById('firearmsV');

let DATA = {...localStorage};

window.onload = function () {
  updateWindow();
}

function saveState() {
  localStorage.setItem('gnosis', gnosisSlider.value);
  localStorage.setItem('rage', rageSlider.value);
  localStorage.setItem('will', wSlider.value);
  localStorage.setItem('str', strCheck.checked);
  localStorage.setItem('dex', dexCheck.checked);
  localStorage.setItem('sta', staCheck.checked);
  localStorage.setItem('form', formSelect.value);
  localStorage.setItem('rug', rugCheck.checked);
  localStorage.setItem('phy', phyV.value);
  localStorage.setItem('menV', menV.value);
  localStorage.setItem('socV', socV.value);
  localStorage.setItem('dodgeV', dodgeV.value);
  localStorage.setItem('brawlV', brawlV.value);
  localStorage.setItem('meleeV', meleeV.value);
  localStorage.setItem('firearmsV', firearmsV.value);
}

function updateWindow() {
  if (localStorage.length == 0) {
    rageOutput.innerHTML = rageSlider.value; 
    gnosisOutput.innerHTML = gnosisSlider.value;
    wOutput.innerHTML = wSlider.value;

    saveState();
  } else {
    gnosisSlider.value = localStorage.getItem('gnosis');
    rageSlider.value = localStorage.getItem('rage');
    wSlider.value = localStorage.getItem('will');
    formSelect.value = localStorage.getItem('form');

    if (localStorage.getItem('str') === 'true') {strCheck.checked = true;}
    if (localStorage.getItem('dex') === 'true') {dexCheck.checked = true;}
    if (localStorage.getItem('sta') === 'true') {staCheck.checked = true;}
    if (localStorage.getItem('rug') === 'true') {rugCheck.checked = true;}

    setForm();
    setGnosis();
    setRage();
    setWill();

    if (staCheck.checked && formSelect.value == "3") {
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

formSelect.onchange = function() {
  setForm();
  updateWindow();
}

rageSlider.onchange = function() {
  setRage();
} 

gnosisSlider.onchange = function() {
  setGnosis();
}

wSlider.onchange = function() {
  setWill();
}

strCheck.onclick = function() {
  setForm();
}

dexCheck.onclick = function() {
  setForm();
}

staCheck.onclick = function() {
  setForm();
  updateWindow();
}

rugCheck.onchange = function() {
  saveState();
  updateWindow();
}

phyV.onchange = function() {
  setPools();
}

menV.onchange = function() {
  setPools();
}

socV.onchange = function() {
  setPools();
}

dodgeV.onchange = function() {
  setPools();
}

brawlV.onchange = function() {
  setPools();
}

meleeV.onchange = function() {
  setPools();
}

firearmsV.onchange = function() {
  setPools();
}

dodgeW.onchange = function() {
  setPools();
}

brawlW.onchange = function() {
  setPools();
}

meleeW.onchange = function() {
  setPools();
}

function setForm() {
  var bonusTxt;
  
  switch (formSelect.value) {
    case "0":
      formTxt.innerHTML = 
        "Hands <br>" +
        "Homid Breess can decrease Rage";
      break;
    case "1":
      if (dexCheck.checked) {
        bonusTxt = "Plus 5 to Dodge";
      } else {
        bonusTxt = "Plus 3 to Dodge";
      }

      formTxt.innerHTML =  
        "A Damage with Claw<br>" +
        "Plus 1 bonus to Brawl, Melee, and Firearms<br>" +
        bonusTxt;
      break;
    case "2":
      if (strCheck.checked) {
        bonusTxt = "Plus 6 to Brawl and Melee";
      } else {
        bonusTxt = "Plus 4 to Brawl and Melee";
      }

      formTxt.innerHTML =  
        "A Damage with Claw and Tooth<br>" +
        "Can bite without grappling<br>" +
        bonusTxt;
      break;
    case "3":
      if (staCheck.checked) {
        bonusTxt = "<br>3 additional Health Levels";
      } else {
        bonusTxt = "";
      }

      formTxt.innerHTML =  
        "A Damage with Claw and Tooth<br>" +
        "Can bite without grappling<br>" +
        "Plus 4 to brawl" +
        bonusTxt;
      break;
    case "4":
      formTxt.innerHTML =  
        "Can track using scent<br>" +
        "Can bite without grappling<br>" + 
        "Lupas Breed: can decrease Rage";
      break;
    default:
      break;
  }

  setPools();
  saveState();
}

function setRage() {
  rageOutput.innerHTML = rageSlider.value;
  
  switch (rageSlider.value) {
    case "0":
      regOutput.innerHTML = 0;
      addDmgOutput.innerHTML = 0;
      rageActOutput.innerHTML = 0;
      break;
    case "1":
      regOutput.innerHTML = "I";
      addDmgOutput.innerHTML = 0;
      rageActOutput.innerHTML = 0;
      break;
    case "2":
      regOutput.innerHTML = "I";
      addDmgOutput.innerHTML = "I";
      rageActOutput.innerHTML = 0;
      break;
    case "3":
      regOutput.innerHTML = "I";
      addDmgOutput.innerHTML = "I";
      rageActOutput.innerHTML = "I";
      break;
    case "4":
      regOutput.innerHTML = "II";
      addDmgOutput.innerHTML = "I";
      rageActOutput.innerHTML = "I";
      break;
    case "5":
      regOutput.innerHTML = "II";
      addDmgOutput.innerHTML = "II";
      rageActOutput.innerHTML = "I";
      break;
    case "6":
      regOutput.innerHTML = "II";
      addDmgOutput.innerHTML = "II";
      rageActOutput.innerHTML = "II";
      break;
    case "7":
      regOutput.innerHTML = "III";
      addDmgOutput.innerHTML = "II";
      rageActOutput.innerHTML = "II";
      break;
    case "8":
      regOutput.innerHTML = "III";
      addDmgOutput.innerHTML = "III";
      rageActOutput.innerHTML = "II";
      break;
    case "9":
      regOutput.innerHTML = "III";
      addDmgOutput.innerHTML = "III";
      rageActOutput.innerHTML = "III";
      break;
    case "10":
      regOutput.innerHTML = "IV";
      addDmgOutput.innerHTML = "III";
      rageActOutput.innerHTML = "III";
      break;
    default:
      break;
  }

  saveState();
}

function setGnosis() {
  gnosisOutput.innerHTML = gnosisSlider.value;
  saveState();
}

function setWill() {
  wOutput.innerHTML = wSlider.value;
  setPools();
  saveState();
}

function setPools() {
  if (formSelect.value == '1') {
    if (dexCheck.checked) {
      dodgeT.innerHTML = parseInt(phyV.value) + parseInt(dodgeV.value) + parseInt(dodgeW.value) + 5;
    } else {
      dodgeT.innerHTML = parseInt(phyV.value) + parseInt(dodgeV.value) + parseInt(dodgeW.value) + 3;
    }
    
  } else {
    dodgeT.innerHTML = parseInt(phyV.value) + parseInt(dodgeV.value) + parseInt(dodgeW.value);
  }
  
  if (formSelect.value == '2') {
    if (strCheck.checked) {
      brawlT.innerHTML = parseInt(phyV.value) + parseInt(brawlV.value) + parseInt(brawlW.value) + 6;
      meleeT.innerHTML = parseInt(phyV.value) + parseInt(meleeV.value) + parseInt(meleeW.value) + 6;
    } else {
      brawlT.innerHTML = parseInt(phyV.value) + parseInt(brawlV.value) + parseInt(brawlW.value) + 4;
      meleeT.innerHTML = parseInt(phyV.value) + parseInt(meleeV.value) + parseInt(meleeW.value) + 4;
    }
    
  } else  if (formSelect.value == '3') {
    brawlT.innerHTML = parseInt(phyV.value) + parseInt(brawlV.value) + parseInt(brawlW.value) + 4;
  } else {
    brawlT.innerHTML = parseInt(phyV.value) + parseInt(brawlV.value) + parseInt(brawlW.value);
    meleeT.innerHTML = parseInt(phyV.value) + parseInt(meleeV.value) + parseInt(meleeW.value);
  }

  mentelT.innerHTML = parseInt(menV.value) + parseInt(wSlider.value);
  socialT.innerHTML = parseInt(socV.value) + parseInt(wSlider.value);

  saveState();
}