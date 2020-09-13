import { MAX_DIE_VALUE, MIN_DIE_VALUE } from 'src/app/constants/constants';
import { Icon } from 'src/app/interfaces/icon';

export class Die {
    max: number = MAX_DIE_VALUE;
    min: number = MIN_DIE_VALUE;
    value: number;
    get icon(): Icon {
        let iconClass: string;
        let unicode: string;
        switch (this.value) {
            case (1):
                iconClass = 'dice-one';
                unicode = '&#xf525;';
                break;
            case (2):
                iconClass = 'dice-two';
                unicode = '&#xf528;';
                break;
            case (3):
                iconClass = 'dice-three';
                unicode = '&#xf527;';
                break;
            case (4):
                iconClass = 'dice-four';
                unicode = '&#xf524;';
                break;
            case (5):
                iconClass = 'dice-five';
                unicode = '&#xf523;';
                break;
            case (6):
                iconClass = 'dice-six';
                unicode = '&#xf526;';
                break;
        };
        const icon: Icon = {
            class: iconClass,
            unicode: unicode
        };
        return icon;
    }

    constructor(value?: number) {
        if (value && value >= this.min && value <= this.max) {
            this.value = value;
        } else {
            this.roll();
        }
    }

    roll(): number {
        this.value = Math.floor(Math.random() * this.max + this.min);
        return this.value;
    }
}
