import { Injectable } from '@angular/core';
import { Bet } from 'src/app/classes/bet/bet';
import { MAX_HAND_SIZE, NUMBER_OF_PLAYERS, NUMBER_OF_CPU, MAX_DIE_VALUE } from 'src/app/constants/constants';
import { StateService } from '../state/state.service';

@Injectable({
  providedIn: 'root'
})
export class BetsService {

  bets: Bet[];
  allowedBets: Bet[];

  private allPlayers: number = NUMBER_OF_PLAYERS + NUMBER_OF_CPU;

  constructor() {
    this.generateBets();
    this.updateAllowedBets();
  }

  generateBets() {
    this.bets = this.createBets();
  }

  updateAllowedBets(lastBet?: Bet) {
    this.allowedBets = this.createBets(lastBet);
  }

  createBets(lastBet?: Bet): Bet[] {
    const bets = [];
    let baseQuantity = lastBet?.quantity || 0;
    let baseValue = lastBet?.value || 1;

    if (baseQuantity < MAX_HAND_SIZE * this.allPlayers) {
      for (let quantity = baseQuantity + 1; quantity <= MAX_HAND_SIZE * this.allPlayers; quantity++) {
        bets.push(new Bet(quantity, baseValue));
      };
    };
    if (baseValue < MAX_DIE_VALUE) {

      for(let value = baseValue + 1; value <= MAX_DIE_VALUE; value++) {
        for (let quantity = 1; quantity <= MAX_HAND_SIZE * this.allPlayers; quantity++) {
          bets.push(new Bet(quantity, value));
        };
      };
    };
    return bets;
  }
}
