import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    console.log(this.square.state)
  }

}
