import { Component, signal } from '@angular/core';
import { First } from './components/first/first';
import { Second } from "./components/second/second";
import { Color } from "./components/color/color";
import { TwoComponent } from "./components/two/two.component";
import { RotatingCard } from "./components/rotating-card/rotating-card";
import { Som } from "./signals/som/som";
import { TtcComponent } from "./signals/ttc/ttc.component";
import { Names } from "./components/names/names";
import { CvComponent } from "./cv/cv-component/cv-component";
import { NgStyle } from "./directives/ng-style/ng-style";
import { NgClass } from "./directives/ng-class/ng-class";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";
import { TodoComponent } from "./todo/todo/todo.component";
import { RouterOutlet } from "@angular/router";
import { Navbar } from "./components/navbar/navbar";


@Component({
  selector: 'app-root',
  imports: [Color, TwoComponent, RotatingCard, Som, TtcComponent, Names, CvComponent, NgStyle, NgClass, MiniWordComponent, TodoComponent, RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Attributs, propriétés => State (état)
  name = 'aymen';
  // méthodes => Behaviour (comportement)
}
