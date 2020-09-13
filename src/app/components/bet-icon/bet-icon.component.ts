import { Component, OnInit, Input } from '@angular/core';
import { Bet } from 'src/app/classes/bet/bet';

@Component({
  selector: 'app-bet-icon',
  templateUrl: './bet-icon.component.html',
  styleUrls: ['./bet-icon.component.scss']
})
export class BetIconComponent implements OnInit {

  @Input() bet: Bet;

  constructor() { }

  ngOnInit(): void {
  }

}
