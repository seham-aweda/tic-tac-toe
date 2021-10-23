# Seham's TIC-TAC-TOE game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `The Task`

We are going to build a tic-tac-toe game with react hooks.\
I’ve broken down the assignment in two sections.\
Section 1 deals with the basics of the game.\
Section 2 deals with time travel.
### `Sectoin 1`

1. Get a board to be displayed on the screen.
2. How are you going to represent the board in code? Matrix?
3. First, turn each square into a X.
4. Represent that “X” into your board.
- Do not override you state. Create a new state and get a reference to the
state. Modify that new state. So section 2 will be possible.
5. Then, take turns to change the square to a O.
6. Represent that “O” to your board.
7. You cannot click on a square if it is occupied.
8. Determine if somebody won.

### `Section 2`

Not mutating state directly
Immutability makes complex features much easier to implement. Because we
created a copy of our state we can implement a “time travel” feature that
allows us to review the tic-tac-toe game’s history and “jump back” to previous
moves. This functionality isn’t specific to games — an ability to undo and redo
certain actions is a common requirement in applications. Avoiding direct data
mutation lets us keep previous versions of the game’s history intact, and reuse
them later.
Each time we make a move, store the board data in a state called “history” for
example, that will represent all board states, from the first to the last move.
And anytime you want reference to a particular move you can fetch it from
the “history” state.

## How To Play

just an X O game. \
one time it is turn X and then the turn is O.\
when there is a winner you will not be able to click any more on the board so press restart
you can go pack with your move and go ahead with your moves with you HISTORY.\
ENJOY :)

### THOUGHTS OF WORKING ON IT

first i started by displaying the board on the screen with all the css, then i started dividing the task to components:\
1.square.\
2.board.\
3.game.\
i tried to loop on the square component with a map so i can show me 9 squares on the board, so i thought i should initilaize an empty array with length 9.\
so in this aray i will but the result(X OR O) in the index the it belongs to the square.\
anf the truthy state is for telling the player how will play now with a terenary operator.\ 
with the on clickshow function we will update the state with each click on the squares, so we had to transport info from the son(square) to the grandpa(game).\
