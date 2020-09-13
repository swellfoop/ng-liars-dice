import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/classes/player/player';
import { PlayerType } from 'src/app/enums/player-type.enum';
import { BetsService } from 'src/app/services/bets/bets.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player = new Player();

  readonly PLAYER_TYPE = PlayerType;

  constructor(public bets: BetsService) { }

  ngOnInit(): void {
  }

}
