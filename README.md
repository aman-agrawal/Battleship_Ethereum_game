# battlesheep

Classic Battleship game backed by ethereum

## What does it do?

- Player A can create a Battleship game (+ submit `secret` of Player A ships positions)
- Player B can join an open Battleship game (+ submit `secret` of Player B ships positions)
- Player A attacks Player B at position "C1" (example)
- Player B provides feedback on attack (can cheat)
- Player B attacks Player A at position "E1"...
- ... And so on.
- Player A wins the game / sinks entire fleet of Player B
- Player A "reveals" its initial ships positions
- Player A has cheated, it appears he misreported some of Player B attacks
- Player B is the new winner of the game


## Setup

### Requirements

In order to run this project locally, you will need:

- [Truffle](https://truffleframework.com/truffle)
- [Ganache](https://truffleframework.com/ganache)

### Install

```
$ git clone https://github.com/sanidhayarora/battlesheep.git
$ cd battlesheep
$ npm install
$ run ganache gui
$ truffle compile
$ truffle migrate --network ganache --reset

// NOTE: All compile warnings come from external libraries/contracts

# Run tests
$ `truffle console`
$ `test`
```

### Run

```
// Assuming Ganache is running...

$ npm run start

// Head to http://localhost:3000
```

### Typical Test workflow

1. Open Chrome private window: http://localhost:3000/?account=0
1. Open another Chrome private window: http://localhost:3000/?account=1
1. Resize 50% width each window side-by-side
1. Create a game in `account=0` window (with size 10x10 / 5x5 / 3x3)
1. Join game in `account=1` window
1. Play as normal !

