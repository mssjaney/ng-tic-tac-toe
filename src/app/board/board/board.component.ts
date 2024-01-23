import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

interface Square {
  id: number;
  state: string;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public board: Square[] = [];

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    this.createBoard();
  }

  createBoard() {
    for (let i = 0; i < 9; i++) {
      this.board.push({ id: i, state: 'X' });
    }
  }

}
