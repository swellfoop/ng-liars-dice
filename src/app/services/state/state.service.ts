import { Injectable } from '@angular/core';
import { Player } from 'src/app/classes/player/player';
import { NUMBER_OF_PLAYERS, NUMBER_OF_CPU } from 'src/app/constants/constants';
import { Cpu } from 'src/app/classes/cpu/cpu';
import { Bet } from 'src/app/classes/bet/bet';
import { BetsService } from '../bets/bets.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  players: Player[] = [];
  activePlayer: Player;
  latestBet: Bet;

  constructor(private bets: BetsService) {
    this.generatePlayers();
    this.generateCpu();
    this.startRound();
  }

  generatePlayers() {
    for (let i = 1; i <= NUMBER_OF_PLAYERS; i++) {
      this.players.push(new Player(`Player ${i}`));
    }
  }

  generateCpu() {
    for (let i = 1; i <= NUMBER_OF_CPU; i++) {
      this.players.push(new Cpu(`Cpu ${i}`));
    }
  }

  startRound(player?: Player) {
    this.activePlayer = player || this.players[0];
    this.players.forEach(player => player.isActive = false);
    this.activePlayer.isActive = true;
  }

  bet(bet: Bet, player: Player) {
    if (player === this.activePlayer) {
      this.latestBet = bet;
      this.bets.updateAllowedBets(this.latestBet);
      this.nextPlayer();
    }
  }

  private nextPlayer() {
    this.activePlayer.endTurn();
    if (this.players.indexOf(this.activePlayer) < this.players.length - 1) {
      this.activePlayer = this.players[this.players.indexOf(this.activePlayer) + 1];
    }
    else {
      this.activePlayer = this.players[0];
    }
    this.activePlayer.startTurn();
  }
}
