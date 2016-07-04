var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1
var hit1 = hit2 = hit3 = -1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
var hit;
while (!isSunk) { 
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) { 
        alert("Please enter a valid cell number!");
    } else { 
        guesses++;
        if (guess == location1 || guess == location2 || guess == location3) {
            hit = false;
            if ((guess == location1) && (hit1 == -1)) {
                hit1 = guess;
                hit = true;
            }
            if ((guess == location2) && (hit2 == -1)) {
                hit2 = guess;
                hit = true;
            }
            if ((guess == location3) && (hit3 == -1)) {
                hit3 = guess;
                hit = true;
            }
            if (hit) {
                alert("HIT!");
                hits++;
                if (hits == 3) {
                    isSunk = true;
                    alert("You sank my battleship!");
                }
            } else {
                alert("HIT in the SAME PLACE!");
            }
        } else {
            alert("MISS");
        }
    }
} 
var stats = "You took " + guesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/guesses);
alert(stats);