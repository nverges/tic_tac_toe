<template>
    
    <!-- Creates each individual cell -->
    <td class="square" @click='placeMarker'>

        <!-- Will display an X or an O -->
        {{ marker }}
    </td>

</template>

<!-- Simple component. Only be responsible for placing a value on each square -->
<script>
    export default {

        // Pass the name to the table element as props
        props: ['number', 'marker'],

        // Stateless
        data() {
            return {

                // moved square state upstream

            }
        },

        methods: {

            // click event to place a marker on a square
            placeMarker() {

                // if there is no marker on a square...
                if (this.marker === '') {

                    // adds a value to a square
                    Event.$emit('placeMarker', this.number)

                }
            },

        }
    }
</script>

<style>
    .square {
        height: 100px;
        width: 100px;
        border: 4px black;
        font-size: 48px;
        background: #eae7dc
    }
</style>