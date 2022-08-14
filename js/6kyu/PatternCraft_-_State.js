/*
The State Design Pattern can be used, for example, to manage the state of a tank in the StarCraft game.

The pattern consists in isolating the state logic in different classes rather than having multiple ifs to determine what should happen.

Your Task
Complete the code so that when a Tank goes into SiegeMode it cannot move and its damage goes to 20. When it goes to TankMode it should be able to move and the damage should be set to 5.

You have 3 classes:

Tank: has a state, canMove and damage properties
SiegeState and TankState: has canMove and damage properties
Note: The tank initial state should be TankState.
*/

class TankState {
    constructor(damage = 5, canMove = true) {
	this.damage = damage;
	this.canMove = canMove;
    }
}

class SiegeState {
    constructor(damage = 20, canMove = false) {
	this.damage = damage;
	this.canMove = canMove;
    }
}

class Tank {
    constructor() {
        this.state = new TankState();
    }
    get canMove() { return this.state.canMove; } 
    get damage() { return this.state.damage; }
}
