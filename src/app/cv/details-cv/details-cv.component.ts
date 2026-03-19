import { Component, signal, Signal } from "@angular/core";

import { DefaultImagePipe } from "../pipes/default-image-pipe";
import { Cv } from "../model/cv";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe]
})
export class DetailsCvComponent {

  cv = signal<Cv | null>(null);

  constructor() {}

  deleteCv() {

  }
}
