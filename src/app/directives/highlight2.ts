import { Directive, input, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight2]',
  host: {
    '[style.backgroundColor]': 'this.bgc()',
    '(mouseenter)': 'this.onMouseEnter()',
    '(mouseleave)': 'this.onMouseLeave()',
  },
})
export class Highlight2 {
  // La nouvelle méthode d'écrire définit à parir de
  // angular 19
  in = input('red');
  out = input('yellow')
  bgc = signal(this.out());
  constructor() {}
  onMouseEnter() {
    this.bgc.set(this.in());
  }
  onMouseLeave() {
    this.bgc.set(this.out());
  }
}
