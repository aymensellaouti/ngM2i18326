import { Directive, signal } from '@angular/core';

@Directive({
  // C'est pour etre sur de ne cibler que
  // Les inputs de type texte qui ont un attribut
  // appRainbow
  selector: 'input[appRainbow][type=text]',
  host: {
    '[style.color]': 'this.color()',
    '[style.borderColor]': 'this.color()',
    '(keyup)': 'this.onKeyup()',
  },
})
export class Rainbow {
  color = signal('red');
  constructor() {
    console.log("AppRainbow");

  }
  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  onKeyup() {
    this.color.set(this.getRandomColor());
  }
}
