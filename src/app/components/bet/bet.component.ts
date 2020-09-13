import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Bet } from 'src/app/classes/bet/bet';
import { Player } from 'src/app/classes/player/player';
import { BetsService } from 'src/app/services/bets/bets.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss']
})
export class BetComponent implements OnInit {

  @Input() player: Player = new Player();

  activeBet: Bet;

  constructor(private state: StateService, public bets: BetsService) { }

  ngOnInit(): void {
    this.updateActiveBet();
  }

  updateActiveBet(bet?: Bet) {
    this.activeBet = bet || this.bets.allowedBets[0];
  }

  bet() {
    this.state.bet(this.activeBet, this.player);
    this.updateActiveBet();
  }
  
  call() {
  }
}
