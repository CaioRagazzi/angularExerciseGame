import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() incrementedNumber = new EventEmitter<number>();
  incrementingNumber: number = 0;
  setIntervalReference: number;

  constructor() { }

  ngOnInit(): void {

  }

  startGame(): void {
    this.setIntervalReference = window.setInterval(() => {
      this.incrementingNumber++;
      this.incrementedNumber.emit(this.incrementingNumber);
    }, 1000)
  }

  stopGame(): void {
    window.clearInterval(this.setIntervalReference);
  }

}
