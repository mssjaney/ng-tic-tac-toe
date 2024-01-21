import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.createBoard();
  }

  createBoard() {
    for (let i = 0; i < 9; i++) {
      this.board.push({ id: i, state: 'X' });
    }
  }

}
