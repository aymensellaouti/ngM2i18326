import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  imports: [],
  templateUrl: './ng-style.html',
  styleUrl: './ng-style.css',
})
export class NgStyle {
  color = signal('red');
  bgc = signal('yellow');
  font = signal('arial')

}
