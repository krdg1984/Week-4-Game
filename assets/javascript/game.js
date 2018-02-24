// Instructions
$( "#instructions" ).click(function() {
	alert( "Copy from Demo");
});

// Crystal Variables
var crystal1 = {
  crystal1:
  {
    name: "crystal1",
    value: 0
  },
  crystal2:
  {
    name: "crystal2",
    value: 0
  },
  crystal3:
  {
    name: "crystal3",
    value: 0
  },
  crystal4:
  {
    name: "crystal4",
    value: 0
  }
};

// Score
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var win = 0;
var loss = 0;

// Starts the Game (and restarts the game)
var startGame = function() {

  // Reset the Current Score
  currentScore = 0;

  // Set a new Target Score (between 19 and 120)
  targetScore = getRandom(19, 120);

  // Set different values for each of the crystals (between 1 and 12)
  crystal.crystal1.value = getRandom(1, 12);
  crystal.crystal3.value = getRandom(1, 12);
  crystal.crystal2.value = getRandom(1, 12);
  crystal.crystal4.value = getRandom(1, 12);

} 