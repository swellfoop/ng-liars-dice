import { Component, OnInit, Input } from '@angular/core';
import { Die } from 'src/app/classes/die/die';
import { Hand } from 'src/app/classes/hand/hand';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit {

  @Input() hand: Hand = new Hand();

  constructor() { }

  ngOnInit(): void { }

}
