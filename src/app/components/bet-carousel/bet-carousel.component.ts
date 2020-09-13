import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Bet } from 'src/app/classes/bet/bet';

@Component({
  selector: 'app-bet-carousel',
  templateUrl: './bet-carousel.component.html',
  styleUrls: ['./bet-carousel.component.scss']
})
export class BetCarouselComponent implements OnInit, OnChanges {

  @Input() bets: Bet[];

  @Output() activeBet: EventEmitter<Bet> = new EventEmitter<Bet>();

  offset: number = 0;
  activeBetIndex: number = 0;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges() {
    this.resetPosition()
  }

  prev() {
    if (this.activeBetIndex > 0) {
      this.activeBetIndex -= 1;
      this.offset = 100 * this.activeBetIndex;
      this.updateActiveBet();
    }
  }

  next() {
    if (this.activeBetIndex < this.bets.length - 1) {
      this.activeBetIndex += 1;
      this.offset = 100 * this.activeBetIndex;
      this.updateActiveBet();
    }
  }

  updateActiveBet() {
    this.activeBet.emit(this.bets[this.activeBetIndex]);
  }

  resetPosition() {
    this.offset = 0;
    this.activeBetIndex = 0;
  }

}
