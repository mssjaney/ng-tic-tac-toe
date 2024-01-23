import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

interface Square {
  id: number;
  state: string;
}

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  @Input() square!: Square;

  constructor(public gameService: GameService) { }

  ngOnInit(): void {
    console.log(this.square.state)
  }

}
