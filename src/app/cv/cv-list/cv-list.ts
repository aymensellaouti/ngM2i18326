import { Component, input } from '@angular/core';
import { Cv } from '../model/cv';
import { CvItem } from "../cv-item/cv-item";

@Component({
  selector: 'app-cv-list',
  imports: [CvItem],
  templateUrl: './cv-list.html',
  styleUrl: './cv-list.css',
})
export class CvList {
  cvs = input<Cv[]>([]);
}
