import { MAX_HAND_SIZE } from 'src/app/constants/constants';
import { Die } from '../die/die';

export class Hand {
    maxSize: number = MAX_HAND_SIZE;
    dice: Die[];
    get size(): number { return this.dice.length };

    constructor() {
        this.create();
    }

    create(maxSize: number = this.maxSize) {
        this.dice = [];
        for (let i = 1; i <= maxSize; i++) {
            this.dice.push(new Die());
        }
    }

    roll() {
        this.dice.forEach(die => die.roll());
    }

    lose() {
        if (this.size > 1) {
            this.create(this.size - 1);
        }
    }

    reset() {
        this.create();
    }
}
