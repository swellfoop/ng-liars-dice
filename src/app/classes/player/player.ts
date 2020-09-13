import { Hand } from '../hand/hand';
import { PlayerType } from 'src/app/enums/player-type.enum';

export class Player {
    name: string;
    hand: Hand = new Hand();
    type: PlayerType;
    isActive: boolean;

    constructor(name?: string) {
        this.name = name;
        this.type = PlayerType.player;
    }

    win() {

    }

    lose() {
        this.hand.lose();
    }

    reset() {
        this.hand.reset();
    }

    roll() {
        this.hand.roll();
    }

    startTurn() {
        this.isActive = true;
    }

    endTurn() {
        this.isActive = false;
    }
}
