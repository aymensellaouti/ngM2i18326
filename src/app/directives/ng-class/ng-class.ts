import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-ng-class',
  imports: [],
  templateUrl: './ng-class.html',
  styleUrl: './ng-class.css',
})
export class NgClass {
  isOn = signal(false);
  interrupetur() {
    this.isOn.update(on => !on)
  }
}
