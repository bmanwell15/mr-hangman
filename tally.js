function Tally(paraID, paraWidth) {
  this.textID = paraID;
  this.ID = document.getElementById(paraID);
  
  if (paraWidth == undefined) {
    this.ID.style.width = "400px"
  } else {
    this.ID.style.width = paraWidth
  }
  this.ID.style.padding = "7px"
  this.ID.style.display = "flex"
  this.ID.style.flexWrap = "wrap"
  this.ID.style.border = "1px solid black"
  
  while (Number(this.ID.style.width.slice(0,-2)) % 75 != 0) {this.ID.style.width = Number(this.ID.style.width.slice(0,-2)) + 1 + "px"}
  
  this.value = 0;
  var size = 1;
  
  
  this.add = (x) => {
    if (x == undefined) {x = 1}
    this.value += x;
    this.update(x);
  }
  
  this.subtract = (x) => {
    if (x == undefined) {x = 1}
    this.value -= x;
    this.update(-x);
  }
  
  this.reset = () => {this.subtract(this.value)}
  
  this.update = (x) => {
    if (this.value < 0) {this.value = 0}
    
    if (x > 0) {
      for (var i = 0;i < x;i++) {
        if (((this.value - x + i + 1) % 5) != 0) {
          $("#" + this.textID).append("<div class='TALLYMARKER' id='TALLYMARKER_" + (this.value - x + i) + "' style='width:" + (8*size) + "px;height:0px;background-color:#000;margin-left:" + (7*size) + "px;opacity:0;'></div>");
        
          $("#TALLYMARKER_" + (this.value - x + i)).animate({opacity: 1, height: (30*size) + "px"}, "slow")
        } else {
          //$log((this.value - x + i + 1) + " " + this.value)
          $("#" + this.textID).append("<div class='TALLYMARKER' id='TALLYMARKER_" + (this.value - x + i) + "' style='width:" + (8*size) + "px;height:0px;background-color:#000;margin-left:" + (7*size) + "px;opacity:0;transform: rotate(-75deg);transform-origin: 20% 40%;position:relative;right:" + (40*size) + "px;bottom:" + (10*size) + "px'></div>");
          $("#TALLYMARKER_" + (this.value - x + i)).animate({opacity: 1, height: (60*size) + "px"}, "slow")
        }
      }
    } else {
      $(".TALLYMARKER").remove()
      for (var i = 0;i < this.value;i++) {
        $("#" + this.textID).append("<div class='TALLYMARKER' style='width:" + (8*size) + "px;height:" + (30*size) + "px;background-color:#000;margin-left:" + (7*size) + "px'></div>");
      }
    }
  }
  
  this.setSize = (s) => {
    if (s <= 0) {s = 1}
    size = s;
    $(".TALLYMARKER").remove()
      for (var i = 0;i < this.value;i++) {
        if (((this.value + i + 1) % 5) != 0) {
          $("#" + this.textID).append("<div class='TALLYMARKER' id='TALLYMARKER_" + (i) + "' style='width:" + (8*size) + "px;height:0px;background-color:#000;margin-left:" + (7*size) + "px;opacity:0;'></div>");
        
          $("#TALLYMARKER_" + (i)).animate({opacity: 1, height: (30*size) + "px"}, "slow")
        } else {
          $("#" + this.textID).append("<div class='TALLYMARKER' id='TALLYMARKER_" + (i) + "' style='width:" + (8*size) + "px;height:0px;background-color:#000;margin-left:" + (7*size) + "px;opacity:0;transform: rotate(-75deg);transform-origin: 20% 40%;position:relative;right:" + (40*size) + "px;bottom:" + (10*size) + "px'></div>");
          $("#TALLYMARKER_" + (i)).animate({opacity: 1, height: (60*size) + "px"}, "slow")
        }
      }
  }
  
  
  this.toggleBorder = () => {
    if (this.ID.style.border != "1px solid black") {
      this.ID.style.border = "1px solid black"
    } else {
      this.ID.style.border = "0px solid black"
    }
  }
  
  this.toString = () => {
    if (this.value != 1) {
      return this.value + " tallies"
    } else {
      return this.value + " tally"
    }
  }
}