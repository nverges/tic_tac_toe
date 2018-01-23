<template>
  <div id="app">
      
      <div id='game'>
        <h2>Tic Tac Toe!</h2>
      </div>
      
      <!-- Render Board component -->
      <Board :squares='squares'></Board>

      <div class='score-info'>
        <p>Total Rounds Played: <span id='rounds-counter'> {{ rounds }}</span></p>
        <p>Player 1 Wins: <span id='p1-wins'>{{ winCounter.x }}</span></p>
        <p>Player 2 Wins: <span id='p2-wins'>{{ winCounter.o }}</span></p>
        <p>Draw Counter: <span id='draw-counter'>{{ winCounter.draw }}</span></p>
        <p>Moves Counter: <span id='moves-counter'>{{ moves }}</span></p>
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

                // Initialize game with '0' rounds played
                rounds: 0,

                // Initialize all win counters to '0'
                winCounter: {
                    x: 0,
                    o: 0,
                    draw: 0
                },

                // Total moves made
                moves: 0,

                // Total games played
                gamesPlayed: 0,

                currentPlayer: 'X',
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


        // Logic
        methods: {

            changePlayer() {
                this.currentPlayer = this.togglePlayer;
            },

            resetGame() {
                Event.$on(console.log('Reset Game Click Handler'));

                this.marker = '';

                console.log(this.squares);
                console.log('reset board firing');

                // reset Moves
                this.resetMoves();
            },

            resetMoves() {
                this.moves = 0;
                this.squares = {
                    1: '',
                    2: '',
                    3: '',
                    4: '',
                    5: '',
                    6: '',
                    7: '',
                    8: '',
                    9: ''
                }
                this.currentPlayer = 'X';
            },

            resetCounters() {
                Event.$on(console.log('Reset Counters Click Handler'));
                this.winCounter.x = 0;
                this.winCounter.o = 0;
            },

            incrementMoves() {
                this.moves++;
                console.log(`Number of Moves: ${this.moves}`);
            }
        },

        created() {
            Event.$on('placeMarker', (square) => {
                console.log(square);
                console.log(this.squares);
                console.log('asdfasdf:' + this.currentPlayer);

                // push X or O to squares array
                this.squares[square] = this.currentPlayer;

                // increment move counter
                this.incrementMoves();

                // Change player
                this.changePlayer();

                console.log(this.squares);
            })
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