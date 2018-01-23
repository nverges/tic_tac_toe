<template>
  <div id="app">
      
      <div id='game'>
        <h2>Tic Tac Toe!</h2>
      </div>
      
      <!-- Render Board component -->
      <Board :squares='squares'></Board>

      <div class='score-info'>
        <p>Total Rounds Played: <span id='rounds-counter'> {{ rounds }}</span></p>
        <p>Player 1 Wins: <span id='p1-wins'>{{ xWins }}</span></p>
        <p>Player 2 Wins: <span id='p2-wins'>{{ oWins }}</span></p>
        <p>Draw Counter: <span id='draw-counter'>{{ draw }}</span></p>
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

                // Initialize game with '0' rounds played
                rounds: 0,

                // Initialize all win counters to '0'
                xWins: 0,
                oWins: 0,
                draw: 0,

                // Total moves made
                moves: 0,

                // Total games played
                gamesPlayed: 0,

                currentPlayer: 'X',
            }
        },

        // Listeners
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
                Event.$on(console.log('Reset Game'));

                this.marker = '';

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
            },

            incrementWin(currentPlayer) {
                if (currentPlayer === 'X') {
                    this.xWins++;
                } else if (currentPlayer = 'O') {
                    this.oWins++
                }
            },

            checkIfWin(currentPlayer) {
                for (let i = 0; i < this.winningConditions.length; i++) {
                    var index1 = this.winningConditions[i][0]; //1
                    var index2 = this.winningConditions[i][1]; //2
                    var index3 = this.winningConditions[i][2]; //3

                    var winningSpot1 = this.squares[index1] // x or o
                    var winningSpot2 = this.squares[index2] // x or o
                    var winningSpot3 = this.squares[index3] // x or o

                    if (currentPlayer === winningSpot1 && currentPlayer === winningSpot2 && currentPlayer === winningSpot3) {
                        setTimeout(() => {
                            console.log('WIN')
                            alert(`${currentPlayer} WINS!`)
                            this.incrementWin(currentPlayer);
                            this.resetMoves();
                        }, 50);
                    }

                }

            }
        },

        created() {
            Event.$on('placeMarker', (square) => {
                // console.log(square);
                // console.log(this.squares);
                // console.log('asdfasdf:' + this.currentPlayer);

                // push X or O to squares array
                this.squares[square] = this.currentPlayer;

                // increment move counter
                this.incrementMoves();

                // check for a win
                this.checkIfWin(this.currentPlayer);

                // Change player
                this.changePlayer();

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