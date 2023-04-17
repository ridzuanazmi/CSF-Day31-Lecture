import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input()
  counter = 0

  @Output()
  onValueChanged = new Subject<number>()

  dec() {
    this.counter--
  }
  inc() {
    this.counter++
  }

  // just one function instead of 2 for increment and decrement
  count(delta: number) {
    this.counter += delta

    // notify user of the change
    this.onValueChanged.next(this.counter)
  }
}
