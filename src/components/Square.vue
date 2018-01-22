<template>
    
    <!-- Creates each individual cell -->
    <td class="square">

        <!-- Will display an X or an O -->
        {{ marker }}
    </td>

</template>


<script>
    export default {

        // Pass the name from the table element as props
        props: ['number'],

        data() {
            return {

                // Variable to represent X or O
                marker: 'x'
            }
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