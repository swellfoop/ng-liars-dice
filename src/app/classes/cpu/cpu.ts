import { Player } from '../player/player';
import { PlayerType } from 'src/app/enums/player-type.enum';

export class Cpu extends Player {
    
    constructor(name?: string) {
        super(name = name);
        this.type = PlayerType.cpu;
    }

    startTurn() {
        this.isActive = true;
    }

    endTurn() {
        this.isActive = false;
    }

    rollNoise() {
        
    }
}
