import { Component, signal } from '@angular/core';
import { First } from './components/first/first';
import { Second } from "./components/second/second";
import { Color } from "./components/color/color";


@Component({
  selector: 'app-root',
  imports: [Color],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Attributs, propriétés => State (état)
  name = 'aymen';
  // méthodes => Behaviour (comportement)
}
