;
var formSelect = document.getElementById("formBreed");
var formTxt = document.getElementById("formText");

var strCheck = document.getElementById("str");
var dexCheck = document.getElementById("dex");
var staCheck = document.getElementById("sta");

formSelect.onchange = function() {
  var bonusTxt;
  
  switch (this.value) {
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
}