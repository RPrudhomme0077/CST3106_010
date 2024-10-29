/*
This is a skeleton module that manages the scoring logic and checks if category selections are valid based off dice values.
There is a standard score table representing each category, and two methods that handle the score calculating and category selections.
For the purpose of this lab, an example of calculateScore is provided. Remaining logic will be added at a later date.
*/

class YatzyEngine {
    constructor() {
        this.scoreTable = {
            Aces: 0,
            Twos: 0,
            Threes: 0,
            Fours: 0,
            Fives: 0,
            Sixes: 0,
            'Three of a Kind': 0,
            'Four of a Kind': 0,
            'Full House': 0,
            'Small Straight': 0,
            'Large Straight': 0,
            Yatzy: 0,
            Chance: 0,
        };
        // This is a score table that represents all possible standard categories that the player can score in
    }

    calculateScore(category, diceValues) {
        // This is where the scores will be calculated and returned based off possible categories 
        if (category === 'Aces') {
            return diceValues.filter(value => value === 1).length; // Count 1s
        }
        // This is an example of how the Aces category is calculated. The remaining categories will be implemented later on
        return 0; // Default return for other categories
    }

    isValidSelection(category, diceValues) {
        // This checks if scoring is possible in specific categories. Logic for categories will be implemented later on
        return true;
    }
}
