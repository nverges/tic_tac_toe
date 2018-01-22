<template>
    
    <table class="board">
        <tr>
            <square number='1'></square>
            <square number='2'></square>
            <square number='3'></square>
        </tr>
        <tr>
            <square number='4'></square>
            <square number='5'></square>
            <square number='6'></square>
        </tr>
        <tr>
            <square number='7'></square>
            <square number='8'></square>
            <square number='9'></square>
        </tr>
    </table>

</template>


<script>
    // Require child component
    import Square from './Square.vue'

    export default {
        // Register components
        components: {
            Square
        },

        data() {
            return {

                // Set value of each square to an empty string. Will be replaced with an X or an O
                squares: {
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                    5: '',
                    6: '',
                    7: '',
                    8: '',
                    9: ''
                },

                // Need an array to hold the possible square combinations to meet a winning condition
                winningConditions: [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                    [1, 4, 7],
                    [2, 5, 8],
                    [3, 6, 9],
                    [1, 5, 9],
                    [3, 5, 7]
                ],

                // Initialize starting player - X
                playerTurn: 'X',

                // Declare gameStatus - move, win, or tie
                gameStatus: 'move',

                // Counter to determine what # move it is. 9 Possible moves per game.
                moves: 0,

                // If 9 moves are hit and a winCondition has not been met, declare game a Draw. Increment Draw counter
                draw: 0,

                // Counter to display win, loss, or tie is present in 'App' Component

            }
        },

        methods: {

            incrementMoveCounter() {
                this.moves++;
                console.log(this.moves)
            },


            // listen for click

            // Alternate player

            // Check for a winning condition

            // Push value of click to 'squares' array, respective to player

            // need an on click event bus handler to listen for a move from the square component


            // clear squares


        }

    }
</script>

<style>
    .board {
        color: black;
        width: 50%;
        margin: 0 auto;
    }
    
    .square:hover {
        background-color: yellow;
    }
</style>