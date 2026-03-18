import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
  // état de ma vue
  private defaultColor = 'red';
  color = this.defaultColor;

  //behaviour, comportement de composant
  changeColor(newColor: string) {
    this.color = newColor;
  }

  // reset
  reset() {
    this.color = this.defaultColor;
  }
}
