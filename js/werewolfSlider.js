;
//Rage
var rageSlider = document.getElementById("rangeLVL");
var rageOutput = document.getElementById("rageValue");

var regOutput = document.getElementById("regValue");
var addDmgOutput = document.getElementById("addDmgValue");
var rageActOutput = document.getElementById("rageActValue");

rageOutput.innerHTML = rageSlider.value; 

rageSlider.onchange = function() {
  rageOutput.innerHTML = this.value;
  
  switch (this.value) {
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
} 

//Spendables
var gnosisSlider = document.getElementById("gnosisRange");
var gnosisOutput = document.getElementById("gValue");

gnosisOutput.innerHTML = gnosisSlider.value; 

gnosisSlider.onchange = function() {
  gnosisOutput.innerHTML = this.value;
}

var wSlider = document.getElementById("willRange");
var wOutput = document.getElementById("wValue");

wOutput.innerHTML = wSlider.value; 

wSlider.onchange = function() {
  wOutput.innerHTML = this.value;
}