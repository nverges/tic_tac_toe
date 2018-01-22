<template>
    
    <!-- Creates each individual cell -->
    <td class="square" @click='choose'>

        <!-- Will display an X or an O -->
        {{ marker }}
    </td>

</template>

<!-- This component should be only be responsible for placing a value on each square -->
<script>
    export default {

        // Pass the name to the table element as props
        props: ['number'],

        data() {
            return {

                // Variable to represent X or O on the Board
                marker: ''
            }
        },

        methods: {

            // click event to place a marker on a square
            choose() {

                // place an X or an O, depending on player
                this.marker = this.$parent.playerTurn

                // adds a value to a square
                Event.$emit('choose', this.number)

                // console logs
                // check current player turn
                console.log(this.$parent.playerTurn)

                // increment move counter
                this.$parent.incrementMoveCounter();

            },

        }
    }
</script>

<style>
    .square {
        height: 100px;
        width: 50px;
        border: 4px black;
        font-size: 48px;
        background: white;
    }
</style>