<template>
  <div id="app">
      
      <div id='game'>
        <h2>Tic Tac Toe!</h2>
      </div>
      
      <!-- Render Board component -->
      <Board></Board>

      <div class='score-info'>
        <p>Total Rounds Played: <span id='rounds-counter'> {{ rounds }}</span></p>
        <p>Player 1 Wins: <span id='p1-wins'>{{ winCounter.x }}</span></p>
        <p>Player 2 Wins: <span id='p2-wins'>{{ winCounter.o }}</span></p>
        <p>Draw Counter: <span id='draw-counter'>{{ winCounter.draw }}</span></p>
      </div>

      <button id='reset-game' @click='resetGame'>Reset Game</button>
      <button id='reset-counters' @click='resetCounters'>Reset Score Counters</button>
      
  </div>
</template>

<script>
    // Require the Board component into App component
    import Board from './components/Board.vue'

    // I only want the parent element to hold counter data and Reset button functionality //
    export default {
        // Register components
        components: {
            Board
        },
        // Declares entry into 'app' div
        name: 'app',
        data() {
            return {

                // Initialize game with '0' rounds played
                rounds: 0,

                // Initialize all counters to '0'
                winCounter: {
                    x: 0,
                    o: 0,
                    draw: 0
                }
            }
        },

        // Logic
        methods: {
            resetGame() {
                Event.$on(console.log('Reset Game Click Handler'))
            },

            resetCounters() {
                Event.$on(console.log('Reset Counters Click Handler'))
            }
        }
    }
</script>

<style>
    #app {
        margin: 0 auto;
        color: #f3f3f3;
    }
    
    body {
        background-color: rgb(65, 65, 65);
        text-align: center;
        margin: 10px;
    }
    
    h2 {
        font-weight: bold;
        font-size: 28px;
    }
</style>