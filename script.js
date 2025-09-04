var input, checkComplete, checkCorrect;
var guesses = 0, guessesMissed = 0;
var allowKeys = false;

var tally = new Tally("tries", "300px")
tally.toggleBorder()

$(".winBox").hide();$(".loseBox").hide();$("#letters").hide();$(".tryBox").hide()

document.getElementById("phraseInputBox").style.opacity = 1

document.body.onkeyup = function(e) {
  if (e.keyCode == 13) {
    if (document.getElementById("phraseInputBox").style.opacity == 1) {enter()}
    if ($(".tryBox").css("opacity") == 1) {tryCompleteGuess()}
    $(".tryBox").css("opacity", 0)
  }
}

function enter() {
  input = document.getElementById("phraseInput").value
  for (var i = 0; i < input.length;i++) {
    if (input.charAt(i) != " " && input.charAt(i) != "!" && input.charAt(i) != "." && input.charAt(i) != "?" && input.charAt(i) != "," && input.charAt(i) != "'" && input.charAt(i) != "-" && input.charAt(i) != "0" &&input.charAt(i) != "1" && input.charAt(i) != "2" && input.charAt(i) != "3" && input.charAt(i) != "4" && input.charAt(i) != "5" && input.charAt(i) != "6" && input.charAt(i) != "7" && input.charAt(i) != "8" && input.charAt(i) != "9" && input.charAt(i) != ":" && input.charAt(i) != ";" && input.charAt(i) != "(" && input.charAt(i) != ")" && input.charAt(i) != "*" && input.charAt(i) != "~" && input.charAt(i) != "-") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>_</div>")
    } else if (input.charAt(i) == " ") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "' style='margin: 0 15px 0 15px'> </div>")
    } else if (input.charAt(i) == "!") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>!</div>")
    } else if (input.charAt(i) == ".") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>.</div>")
    } else if (input.charAt(i) == "?") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>?</div>")
    } else if (input.charAt(i) == ",") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>,</div>")
    } else if (input.charAt(i) == "'") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>'</div>")
    } else if (input.charAt(i) == "0") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>0</div>")
    } else if (input.charAt(i) == "1") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>1</div>")
    } else if (input.charAt(i) == "2") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>2</div>")
    } else if (input.charAt(i) == "3") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>3</div>")
    } else if (input.charAt(i) == "4") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>4</div>")
    } else if (input.charAt(i) == "5") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>5</div>")
    } else if (input.charAt(i) == "6") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>6</div>")
    } else if (input.charAt(i) == "7") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>7</div>")
    } else if (input.charAt(i) == "8") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>8</div>")
    } else if (input.charAt(i) == "9") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>9</div>")
    } else if (input.charAt(i) == ":") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>:</div>")
    } else if (input.charAt(i) == ";") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>;</div>")
    } else if (input.charAt(i) == "(") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>(</div>")
    } else if (input.charAt(i) == ")") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>)</div>")
    } else if (input.charAt(i) == "*") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>*</div>")
    } else if (input.charAt(i) == "~") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>~</div>")
    } else if (input.charAt(i) == "-") {
      $("#phraseOutput").append("<div class='letter' id='letter" + i  + "'>-</div>")
    }
  }
  
  $("#phraseInputBox").animate({opacity: 0, bottom: "-100px"}, "slow")
  $("#letters").show()
  $("#letters").animate({opacity:1}, "slow")
  $(".triesText").animate({opacity:1}, "slow")
}

function guess(letter) {
  $("#"+letter).animate({opacity: 0.5})
  tally.add()
  document.getElementById(letter).disabled = true
  guesses++;
  document.getElementById("guesses").innerHTML = "Guesses: " + guesses
  
  checkCorrect = false
  for (var i = 0; i < input.length;i++) {
    if (input.charAt(i).toLowerCase() == letter) {
      document.getElementById("letter"+i).innerHTML = input.charAt(i)
      checkCorrect = true
    }
  }
  if (checkCorrect == false) {
    $("#pic"+guessesMissed).animate({opacity:0}, "fast")
    guessesMissed++
    $("#pic"+guessesMissed).animate({opacity:1}, "slow")
    document.getElementById("missGuesses").innerHTML = "Missed Guesses: " + guessesMissed + " of 6"
    document.getElementById("loseAnswer").innerHTML = "<i>" + input + "</i>"
    if (document.getElementById("pic5").style.opacity != 0) {
      $(".loseBox").show()
      $(".loseBox").animate({opacity:1})
      $("#letters").hide()
    }
  }
  
  checkComplete = false
  for (var i = 0; i < input.length;i++) {
    if (document.getElementById("letter"+i).innerHTML != input.charAt(i)) {
      checkComplete = true
    }
  }
  if (checkComplete == false) {
    document.getElementById("winGuesses").innerHTML = "You solved the phrase in <b>" + guesses + "</b> guesses, and got <b>" + guessesMissed + "</b> guess(es) wrong!"
    document.getElementById("winInput").innerHTML = "<i>" + input + "<i>"
    $(".winBox").show()
    $(".winBox").animate({opacity:1})
    $("#letters").hide()
  }
}

function tryComplete() {
  $(".tryBox").show()
  $(".tryBox").animate({opacity: 1})
  $("#letters").hide()
}

function tryCompleteGuess() {
  guesses++
  $(".tryBox").hide()
  $(".tryBox").css("opacity", 0)
  if (document.getElementById("tryTxt").value.toLowerCase() == input.toLowerCase()) {
    document.getElementById("winGuesses").innerHTML = "You solved the phrase in <b>" + guesses + "</b> guesses, and got <b>" + guessesMissed + "</b> guess(es) wrong!"
    document.getElementById("winInput").innerHTML = "<i>" + input + "<i>"
    $(".winBox").show()
    $(".winBox").animate({opacity:1})
    $("#letters").hide()
    for (var i = 0; i < input.length;i++) {document.getElementById("letter"+i).innerHTML = input.charAt(i)}
  } else {
    $("#pic"+guessesMissed).animate({opacity:0}, "fast")
    guessesMissed++
    $("#pic"+guessesMissed).animate({opacity:1}, "slow")
    $("#letters").show()
    document.getElementById("missGuesses").innerHTML = "Missed Guesses: " + guessesMissed + " of 6"
    document.getElementById("loseAnswer").innerHTML = "<i>" + input + "</i>"
    if (document.getElementById("pic5").style.opacity != 0) {
      $(".loseBox").show()
      $(".loseBox").animate({opacity:1})
      $("#letters").hide()
    }
  }
  document.getElementById("guesses").innerHTML = "Guesses: " + guesses
  document.getElementById("missGuesses").innerHTML = "Missed Guesses: " + guessesMissed + " of 6"
  document.getElementById("tryTxt").value = ""
}