import { Component, signal } from '@angular/core';
import { First } from './components/first/first';
import { Second } from "./components/second/second";


@Component({
  selector: 'app-root',
  imports: [First, Second],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Attributs, propriétés => State (état)
  name = 'aymen';
  // méthodes => Behaviour (comportement)
}
