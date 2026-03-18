import { Component } from '@angular/core';
import { Second } from "../second/second";

@Component({
  selector: 'app-first',
  imports: [Second],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  // Attributs, propriétés => State (état)
  name = 'jennifer';
  message = '';
  isHidden = false;
  // méthodes => Behaviour (comportement)
  showHide() {
    this.isHidden = !this.isHidden;
  }
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
