import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board/board.component';
import { SquareComponent } from './square/square/square.component';

import { GameService } from './services/game.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
