<template>
    
    <table class="board">
        <tr>
            <square number='1' :marker='squares[1]'></square>
            <square number='2' :marker='squares[2]'></square>
            <square number='3' :marker='squares[3]'></square>
        </tr>
        <tr>
            <square number='4' :marker='squares[4]'></square>
            <square number='5' :marker='squares[5]'></square>
            <square number='6' :marker='squares[6]'></square>
        </tr>
        <tr>
            <square number='7' :marker='squares[7]'></square>
            <square number='8' :marker='squares[8]'></square>
            <square number='9' :marker='squares[9]'></square>
        </tr>
    </table>

</template>


<script>
    // Require child component
    import Square from './Square.vue'

    export default {

        props: ['squares'],

        // Register components
        components: {
            Square
        },

        data() {
            return {

                // Set value of each square to an empty string. Will be replaced with an X or an O

                // Need an array to hold the possible square combinations to meet a winning condition
                winningConditions: [
                    // Horizontal possibilities
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                    // Vertical possibilities
                    [1, 4, 7],
                    [2, 5, 8],
                    [3, 6, 9],
                    // Diagonal possibilities
                    [1, 5, 9],
                    [3, 5, 7]
                ],

                // Initialize starting player - X
                currentPlayer: 'X',

                // Declare gameStatus - move, win, or tie
                // gameStatus: 'move',

                // Counter to determine what # move it is. 9 Possible moves per game.
                moves: 0,

                // Counter to display win, loss, or tie is present in 'App' Component

            }
        },

        computed: {
            togglePlayer() {
                if (this.currentPlayer === 'X') {
                    return 'O';
                } else {
                    return 'X';
                }
            }
        },

        methods: {

            changePlayer() {

                this.currentPlayer = this.togglePlayer;
            },

            // listen for click

            // Alternate player

            // Check for a winning condition

            // Push value of click to 'squares' array, respective to player

            // clear squares

        },

        // need an on click event bus handler to listen for a move from the square component
        // created() {changepla
        //     Event.$on('placeMarker', (square) => {

        //         // push X or O to squares array
        //         this.squares[square] = this.currentPlayer;

        //         // increment move counter
        //         this.$parent.incrementMoves();

        //         // Change player
        //         this.changePlayer();

        //         console.log(this.squares);
        //     })
        // }

    }
</script>

<style>
    .board {
        color: black;
        width: 300px;
        margin: 0 auto;
    }
    
    .square:hover {
        background-color: yellow;
    }
</style>