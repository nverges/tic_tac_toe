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
    import Square from './Square.vue'

    export default {
        components: {
            Square
        },
        data() {
            return {

                // Set value of each square to an empty string

                // Initialize player

                // Declare moveStatus - whether move, win, or tie

                // Counter to determine what # move it is. 9 Possible moves per game.

                // If 9 moves are hit and a winCondition has not been met, declare game a Draw. Increment Draw counter

                // Need an array to hold the possible winning conditions in all directions

                // Counter to display win, loss, or tie is present in 'App' Component

            }
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