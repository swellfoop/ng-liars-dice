import { Die } from '../die/die';

export class Bet {
    quantity: number;
    value: number;
    get die(): Die {
        return new Die(this.value);
    }

    constructor(quantity: number, value: number) {
        this.quantity = quantity;
        this.value = value;
    }
}
