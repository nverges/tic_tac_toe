<template>
  <div id="app">
      
      <div id='game'>
        <h2>Tic-Tac-Toe!</h2>
      </div>
      
      <p>Total Rounds Played: <span id='rounds-counter'> {{ rounds }}</span></p>
      <!-- <p>Next Move: <span>{{ currentPlayer }}</span></p> -->
      
      <!-- Render Board component -->
      <Board :squares='squares'></Board>

      <div class='score-info'>
        <div class='wins'>
            <p>'X' Wins: <span id='p1-wins'>{{ xWins }}</span></p>
            <p>'O' Wins: <span id='p2-wins'>{{ oWins }}</span></p>
        </div>
            <p>Ties: <span id='tie-counter'>{{ tie }}</span></p>
      </div>

      <button id='start-over' @click='startOver'>Start Over</button>
      
  </div>
</template>

<!-- This component holds all state info -->
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

        // Initialize state
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
                tie: 0,

                // Initialize Player 1 to 'X'
                currentPlayer: 'X',
            }
        },

        // Listeners
        computed: {

            // Listens for the state of 'currentPlayer' and returns a value 'X' or 'O'
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

            // uses togglePlayer() listener to switch between markers
            changePlayer() {
                this.currentPlayer = this.togglePlayer;
            },

            // Reset Round
            resetRound() {
                Event.$on(console.log('Reset Round'));

                // Resets player1 value to 'X'
                this.currentPlayer = 'X';

                // Resets squares to empty
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
            },

            // 'Start Over' button - resets score counters and board
            startOver() {
                this.rounds = 0;
                this.xWins = 0;
                this.oWins = 0;
                this.tie = 0;
                this.resetRound();
            },

            // Increases win counter
            incrementWin(currentPlayer) {
                if (currentPlayer === 'X') {
                    this.xWins++;
                } else if (currentPlayer === 'O') {
                    this.oWins++;
                }
            },

            // Alerts user of Win
            alertWin(currentPlayer) {
                setTimeout(() => {

                    // Alert
                    alert(`${currentPlayer} WINS!`);

                    // Increase Win Counter
                    this.incrementWin(currentPlayer);

                    // Reset Game
                    this.resetRound();

                    // Increase total rounds played
                    this.rounds++;

                }, 50);
            },

            // Confirmed Win
            didWin(currentPlayer) {

                // Initialize 'won' to false
                var won = false;

                // Loops through array of winning conditions
                for (let i = 0; i < this.winningConditions.length; i++) {

                    // grab index of each winning condition array
                    var index1 = this.winningConditions[i][0]; //1 
                    var index2 = this.winningConditions[i][1]; //2
                    var index3 = this.winningConditions[i][2]; //3

                    // 
                    var winningSpot1 = this.squares[index1] // x or o
                    var winningSpot2 = this.squares[index2] // x or o
                    var winningSpot3 = this.squares[index3] // x or o

                    // if 3 values meet a winning condition....
                    if (currentPlayer === winningSpot1 && currentPlayer === winningSpot2 && currentPlayer === winningSpot3) {

                        // then WIN!
                        won = true;
                    }
                }

                // false by default
                return won;
            },

            // Helper to check if the 'squares' object is full
            checkIfFull() {

                // initialize full to true
                var full = true;

                // for (let i = 1; i < this.squares.length; i++) {
                //     // If there are any empty squares...
                //     if (this.squares[i] === '') {
                //         // Squares is not full
                //         full = false;
                //     }
                // }

                // return _.map(this.squares, (entry, square) => {
                //     if (index === '') {
                //         full = false;
                //     }
                // });

                // Refactor into a loop
                if (this.squares[1] === '' ||
                    this.squares[2] === '' ||
                    this.squares[3] === '' ||
                    this.squares[4] === '' ||
                    this.squares[5] === '' ||
                    this.squares[6] === '' ||
                    this.squares[7] === '' ||
                    this.squares[8] === '' ||
                    this.squares[9] === '') {
                    full = false;
                }

                // true by default
                return full
            }
        },

        // created() Lifecycle Hook
        created() {
            Event.$on('placeMarker', (marker) => {

                // push X or O to squares object
                this.squares[marker] = this.currentPlayer;

                // check for a win
                if (this.didWin(this.currentPlayer)) {

                    // winner alert
                    this.alertWin(this.currentPlayer);

                    // if there is no winner, and the 'squares' object is full...
                } else if (!this.didWin(this.currentPlayer) && this.checkIfFull()) {

                    // increment tie counter
                    this.tie++

                        // increment rounds counter
                        this.rounds++

                        // alert
                        alert('Tie! Play again for victory.');

                    // reset board
                    this.resetRound();
                }

                // Change player
                this.changePlayer();
            })
        }

    }
</script>

<style>
    #app {
        margin: 0 auto;
        color: black;
    }
    
    body {
        /* font-family: 'Indie Flower', cursive; */
        font-family: 'Gloria Hallelujah';
        background-color: #d8c3a5;
        text-align: center;
        margin: 10px;
        font-size: 24px;
    }
    
    h2 {
        /* font-family: 'Indie Flower'; */
        font-weight: bold;
        font-size: 48px;
    }
    
    button {
        padding: 15px 20px;
        font-size: 24px;
        border-radius: 8px;
    }
    
    button:hover {
        cursor: pointer;
        background: #e98074
    }
    
    span {
        color: #e98074;
        font-weight: bold;
    }
    
    .wins p {
        margin: 20px 20px;
        text-align: center;
        display: inline-block;
    }
</style>