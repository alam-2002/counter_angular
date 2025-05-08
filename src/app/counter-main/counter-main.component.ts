import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-main',
  templateUrl: './counter-main.component.html',
  styleUrls: ['./counter-main.component.css']
})
export class CounterMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count: number = 0;
  count2: number = 0;

  incrementCount() {
    this.count = this.count + 1;
  }

  resetCount() {
    this.count = 0;
  }

  decrementCount() {
    this.count = this.count - 1;
  }

  handelCounter(value: String) {
    if (value == 'minus') {
      this.count2 = this.count2 - 1;
    } else if (value == 'plus') {
      this.count2 = this.count2 + 1;
    } else {
      this.count2 = 0;
    }
  }

}
