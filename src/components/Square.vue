<template>
    
    <!-- Creates each individual cell -->
    <td class="square" @click='placeMarker'>

        <!-- Will display an X or an O -->
        {{ marker }}
    </td>

</template>

<!-- This component should be only be responsible for placing a value on each square -->
<script>
    export default {

        // Pass the name to the table element as props
        props: ['number', 'marker'],

        data() {
            return {

                // Variable to represent X or O on the Board
                // marker: '',

            }
        },

        methods: {

            // click event to place a marker on a square
            placeMarker() {

                if (this.marker === '') {
                    // place an X or an O, depending on player
                    // console.log(`Current Player: ${this.$parent.currentPlayer}`)
                    // this.marker = this.$parent.currentPlayer

                    // adds a value to a square
                    Event.$emit('placeMarker', this.number)

                    // increment move counter
                    // this.$parent.incrementMoveCounter();

                    // logs
                    console.log(`----------`)

                }
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