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

var gnosisSlider = document.getElementById("gnosisRange");
var gnosisOutput = document.getElementById("gValue");

var wSlider = document.getElementById("willRange");
var wOutput = document.getElementById("wValue");

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

    setForm();
    setGnosis();
    setRage();
    setWill();
  }
}

formSelect.onchange = function() {
  setForm();
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
        "Aggravated Damage with Claw<br>" +
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
        "Aggravated Damage with Claw and Tooth<br>" +
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
        "Aggravated Damage with Claw and Tooth<br>" +
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
  saveState();
}