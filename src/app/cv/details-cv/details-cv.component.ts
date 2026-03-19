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

  constructor() {
    // 1ére étape : Récupérer l'id

    //2éme étape : Le chercher via le service CvService

    // 2- 1 S'il n'existe pas => redirige vers la liste des cvs
  }

  deleteCv() {
    // 1 étape : Appelle le cvServie pour le supprimer
    // 2 étape :redirige vers la liste des cvs
  }
}
