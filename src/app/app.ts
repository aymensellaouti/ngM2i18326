import { Component, signal } from '@angular/core';
import { First } from './components/first/first';
import { Second } from "./components/second/second";
import { Color } from "./components/color/color";
import { TwoComponent } from "./components/two/two.component";
import { RotatingCard } from "./components/rotating-card/rotating-card";
import { Som } from "./signals/som/som";


@Component({
  selector: 'app-root',
  imports: [Color, TwoComponent, RotatingCard, Som],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Attributs, propriétés => State (état)
  name = 'aymen';
  // méthodes => Behaviour (comportement)
}
