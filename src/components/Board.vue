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

<!-- This component holds the layout of the board -->
<script>
    // Require child component
    import Square from './Square.vue'

    export default {

        // props
        props: ['squares'],

        // Register child components
        components: {
            Square
        },

        // Stateless
        data() {
            return {

            }
        }

    }
</script>

<style>
    .board {
        color: black;
        width: 300px;
        margin: 0 auto;
    }
    
    .square:hover {
        /* background-color: yellow; */
        cursor: pointer;
    }
</style>