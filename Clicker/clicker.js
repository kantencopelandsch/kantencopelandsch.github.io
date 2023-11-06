var Mscore = 15000
var hands = 0
var helpers = 0
var food = false
var foodN = 1
var pp = 0
var clean = false
var cleanN = 5
var qSpell = 0
var sacraficed = false
var qSpellN = 25





function print() {
    Mscore = Mscore + (1 + hands)
    document.getElementById("score").innerHTML = Mscore;
}





function print2() {
   if (Mscore >= 10 + (10 * (hands * 0.5))) {
      Mscore = Math.round(Mscore - (10 + 10 * (hands * 0.5)))
      hands = hands + 1
      document.getElementById("score").innerHTML = Mscore;
      document.getElementById("handCost").innerHTML = Math.abs(Math.round(10 + 10 * (hands * 0.5)));
      document.getElementById("handAmount").innerHTML = "(" + hands + ")"
        }
}





function autoPrintBuy() {
   if (Mscore >= 75 + (75 * (helpers * 0.5))) {
      Mscore = Math.round(Mscore - (75 + (75 * (helpers * 0.5))))
      helpers = helpers + 1
      document.getElementById("score").innerHTML = Mscore;
      document.getElementById("helperCost").innerHTML = Math.abs(Math.round(75 + 75 * (helpers * 0.5)));
      document.getElementById("helperAmount").innerHTML = "(" + helpers + ")"
      document.getElementById("QPS").innerHTML = "Quran Per Second (" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) + ")"
      document.getElementById("QPM").innerHTML = "Quran Per Minute(" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) * 60 + ")"
   }
        if(helpers >= 1) {
          setInterval(autoPrint, 1000);
      }
}

function autoPrint() {
 if(food === false) {
   Mscore = Mscore + 1
   document.getElementById("score").innerHTML = Mscore;
 } else {
   Mscore = Mscore + 2
   document.getElementById("score").innerHTML = Mscore;
 }
}


function autoPrintUpgrade() {
  if (Mscore >= 100) {
      Mscore = Mscore - 100
      food = true
      document.getElementById("score").innerHTML = Mscore;
      document.getElementById("autoPrintUpgradeButton").innerHTML = "Purchased";
}
  if (food = true) {
    foodN = 2
    document.getElementById("QPS").innerHTML = "Quran Per Second (" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) + ")"
      document.getElementById("QPM").innerHTML = "Quran Per Minute(" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) * 60 + ")"
  }
}





function ppUpgrade() {
  if (Mscore >= 500) {
      Mscore = Mscore - 500
      clean = true
      document.getElementById("score").innerHTML = Mscore;
      document.getElementById("ppUpgradeButton").innerHTML = "Purchased";
}
  if (clean = true) {
    cleanN = 10
    document.getElementById("QPS").innerHTML = "Quran Per Second (" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) + ")"
      document.getElementById("QPM").innerHTML = "Quran Per Minute(" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) * 60 + ")"
  }
}


function ppBuy() {
  if (Mscore >= 300 + (300 * (pp * 0.5))) {
      Mscore = Math.round(Mscore - (300 + (300 * (pp * 0.5))))
      pp = pp + 1
      document.getElementById("score").innerHTML = Mscore;
      document.getElementById("ppCost").innerHTML = Math.abs(Math.round(300 + 300 * (pp * 0.5)));
      document.getElementById("ppAmount").innerHTML = "(" + pp + ")"
      document.getElementById("QPS").innerHTML = "Quran Per Second (" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) + ")"
      document.getElementById("QPM").innerHTML = "Quran Per Minute(" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) * 60 + ")"
        }
        if(pp >= 1) {
          setInterval(autoPrintPP, 1000);
      }
}


function autoPrintPP() {
    if(clean === false) {
   Mscore = Mscore + 5
   document.getElementById("score").innerHTML = Mscore;
 } else {
   Mscore = Mscore + 10
   document.getElementById("score").innerHTML = Mscore;
 }
}





function qSpellBuy() {
  if (Mscore >= 1500 + (1500 * (qSpell * 0.5))) {
      Mscore = Math.round(Mscore - (1500 + (1500 * (qSpell * 0.5))))
      qSpell = qSpell + 1
      document.getElementById("score").innerHTML = Mscore;
      document.getElementById("qSpellCost").innerHTML = Math.abs(Math.round(1500 + 1500 * (qSpell * 0.5)));
      document.getElementById("qSpellAmount").innerHTML = "(" + qSpell + ")"
      document.getElementById("QPS").innerHTML = "Quran Per Second (" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) + ")"
      document.getElementById("QPM").innerHTML = "Quran Per Minute(" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) * 60 + ")"
        }
        if(qSpell >= 1) {
          setInterval(autoPrintQSpell, 1000);
      }
}

function qSpellUprade() {
   if (Mscore >= 1500) {
      Mscore = Mscore - 1500
      sacraficed = true
      document.getElementById("score").innerHTML = Mscore;
      document.getElementById("qSpellUpgradeButton").innerHTML = "Purchased!";
     document.getElementById("QPS").innerHTML = "Quran Per Second (" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) + ")"
      document.getElementById("QPM").innerHTML = "Quran Per Minute(" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) * 60 + ")"
}
  if (sacraficed = true) {
    qSpellN = 50
    document.getElementById("QPS").innerHTML = "Quran Per Second (" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) + ")"
      document.getElementById("QPM").innerHTML = "Quran Per Minute(" + ((helpers * foodN) + (pp * cleanN) + (qSpell * qSpellN)) * 60 + ")"
  }
}

function autoPrintQSpell() {
  if(sacraficed === false) {
   Mscore = Mscore + 25
   document.getElementById("score").innerHTML = Mscore;
 } else {
   Mscore = Mscore + 50
   document.getElementById("score").innerHTML = Mscore;
 }
}





function gambling() {
 var hh = Math.random()
 if(hh <= 0.5   ) {
   Mscore = Mscore * 2
    document.getElementById("score").innerHTML = Mscore;
    document.getElementById("gambleMessage").innerHTML = "Hoooray!!!"
    setTimeout(gambleMessageClear, 1000)
 } else {
   Mscore = Mscore * 0
    document.getElementById("score").innerHTML = Mscore;
    document.getElementById("gambleMessage").innerHTML = "Sucks to suck, idiot."
    setTimeout(gambleMessageClear, 1000)
 }
 
}


function gambleMessageClear() {
    document.getElementById("gambleMessage").innerHTML = ""
}