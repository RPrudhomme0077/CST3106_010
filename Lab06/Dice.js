/* 
This is a skeleton module that manages the dice rolling aspect of the game.
It essentially rolls the dice randomly, and will keep track of their current values.
For the purpose of this lab, proper functionality has not yet been implemented.
*/


class Dice {
    constructor(numDice) {
        this.numDice = numDice;
         // Number of dice 
        this.values = Array(numDice).fill(0);
         // Initial values of the dice
    }

    roll() {
        for (let i = 0; i < this.numDice; i++) {
            this.values[i] = Math.floor(Math.random() * 6) + 1; 
            // Rolls each die
        }
        return this.values; 
        // Returns the rolled values
    }

    getCurrentValues() {
        return this.values; 
        // Returns the current values of the dice
    }
}
