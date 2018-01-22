# tic_tac_toe

> Tic Tac Toe using Vue

'npm run dev'

-----------------
Instructions!
- Design a Tic-Tac-Toe board using HTML, CSS, and VueJS
- As a user, I should be able to click an empty space on the board that turns into an 'X'
- After an 'X' is placed, clicking on an empty space should place an 'O' and continue to alternate between 'X' and 'O'

BONUS:
- If 3 X's or O's are in a row vertically or diagonally (directions do not specify horizontally), a toastr message will pop up letting player 1 (x's) or player 2 (o's) know they won.
---------------------


** Layout **
 - Break down into 2 components I can create one called 'Board' that will display the entire 3x3 grid, and I will create a child component called 'square' that will actually render each square and hold associated logic


** Conditions ** 
- 2 players, alternating turns to place their marker on the board
- Assign a value to each square
- Define winning conditions
- Display a Win counter for each Player
- Display a Draw counter
- Display the total number of rounds played
- Create button to restart the game - resets all 'marker' values to empty string, resets 'moveStatus'


** App flow **
- Load app with empty board
- Player 1 (P1) places an 'X'
- After P1 chooses, (P2) places an 'O'
--- Run 'checkIfWin' method after each turn to determine if a winning condition is met
- Repeat P1 turn

--- If all moves have been made, and no winning condition has been met, game is a draw
- Increase winCounter++ to appropriate Player
- Increase total rounds++ counter



** Future Additions **
- Allow user to select his/her own marker (X or O)
- Create AI functionality to play against a computer