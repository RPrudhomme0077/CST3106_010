/*This is a skeleton module that manages the state of the game, and keeps track of each turn/round. 
A player is created, there is a method for starting a new game, a method for ending your turn, and a method that ends the game.
For the purpose of this lab, much of the logic will be provided at a later date. This is to show the general structure/plan for the game.
*/

class YatzyGame {
    constructor() {
        this.currentPlayer = 'Player 1';
         // Tracks active player. May implement an option to name your player at a later date.
        this.currentRound = 1;
         // Tracks current round
        this.totalScore = 0;
         // Total score for the player
        this.dice = new Dice(5);
         // Instantiates the Dice class
        this.engine = new YatzyEngine();
         // Instantiates the YatzyEngine class
    }

    startNewGame() {
        this.currentRound = 1;
         // Resets the round
        this.totalScore = 0;
         // Resets the total score
        this.dice = new Dice(5);
         // Reinitializes the dice
        this.engine = new YatzyEngine();
         // Reinitializes the engine
    }

    endTurn() {
        // Logic to end the turn will be implemented here, such as scoring, round increments, etc.
        this.currentRound++;
    }

    endGame() {
        // Logic to finalize the game will be implemented here, such as total score, displaying winner/loser, etc.
        console.log(`Game Over! You Win/Lose! Your score/Opponent score ${this.totalScore}`);
        // Example end game console display
    }
}
