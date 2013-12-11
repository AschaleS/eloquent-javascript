function registerEventHandler(node, event, handler) {
  if (typeof node.addEventListener == "function")
    node.addEventListener(event, handler, false);
  else
    node.attachEvent("on" + event, handler);
}

registerEventHandler($("button"), "click",
                     function(){print("Click (2)");});
                     
                     
if (typeof document.addEventListener == "function")
  var registerEventHandler = function(node, event, handler) {
    node.addEventListener(event, handler, false);
  };
else
  var registerEventHandler = function(node, event, handler) {
    node.attachEvent("on" + event, handler);
  };
  
  
Square.moveContent = function(target) {
  target.content = this.content;
  this.content = null;
  target.tableCell.appendChild(this.tableCell.lastChild);
};
Square.clearContent = function() {
  this.content = null;
  removeElement(this.tableCell.lastChild);
};


SokobanField.move = function(direction) {
  var playerSquare = this.getSquare(this.playerPos);
  var targetPos = this.playerPos.add(direction);
  var targetSquare = this.getSquare(targetPos);

  // Possibly pushing a boulder
  if (targetSquare.hasBoulder()) {
    var pushTarget = this.getSquare(targetPos.add(direction));
    if (pushTarget.isEmpty()) {
      targetSquare.moveContent(pushTarget);
    }
    else if (pushTarget.isExit()) {
      targetSquare.moveContent(pushTarget);
      pushTarget.clearContent();
      this.bouldersToGo--;
      this.updateScore();
    }
  }
  // Moving the player
  if (targetSquare.isEmpty()) {
    playerSquare.moveContent(targetSquare);
    this.playerPos = targetPos;
  }
};


SokobanGame.keyDown = function(event) {
  if (arrowKeyCodes.contains(event.keyCode)) {
    event.stop();
    this.field.move(arrowKeyCodes.lookup(event.keyCode));
    if (this.field.won()) {
      if (this.level < sokobanLevels.length - 1) {
        alert("Excellent! Going to the next level.");
        this.level++;
        this.reset();
      }
      else {
        alert("You win! Game over.");
        this.newGame();
      }
    }
  }
};


Square.clearContent = function() {
  self.content = null;
  var image = this.tableCell.lastChild;
  var size = 100;

  var animate = setInterval(function() {
    size -= 10;
    image.style.width = size + "%";
    image.style.height = size + "%";

    if (size < 60) {
      clearInterval(animate);
      removeElement(image);
    }
  }, 70);
};