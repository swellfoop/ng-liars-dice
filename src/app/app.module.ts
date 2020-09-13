import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HandComponent } from './components/hand/hand.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayerComponent } from './components/player/player.component';
import { BetComponent } from './components/bet/bet.component';
import { BetCarouselComponent } from './components/bet-carousel/bet-carousel.component';
import { BetIconComponent } from './components/bet-icon/bet-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HandComponent,
    PlayerComponent,
    BetCarouselComponent,
    BetComponent,
    BetIconComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
