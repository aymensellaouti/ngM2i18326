import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {
  // Jusqu'à angular 18

  // Modifier l'apparence
  // Quelles apparences
  @HostBinding('style.backgroundColor')
  bgc = 'red';


  // Modifier le comportement d'un element du DOM
  // Quels comportements je veux appliquer et quand
  constructor() { }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgc = 'yellow';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgc = 'red';
  }
}
