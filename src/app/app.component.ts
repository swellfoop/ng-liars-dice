import { Component } from '@angular/core';
import { StateService } from './services/state/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'liars-dice';

  constructor(public state: StateService) {

  }
}
