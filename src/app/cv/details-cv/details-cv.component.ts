import { Component, inject, signal, Signal } from "@angular/core";

import { DefaultImagePipe } from "../pipes/default-image-pipe";
import { Cv } from "../model/cv";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe]
})
export class DetailsCvComponent {

  /**
   * Le cv à afficher
   */
  cv = signal<Cv | null>(null);
  cvService = inject(CvService);
  /**
   * Les informations sur la route active
   * Vosu pouvez récupérer les paramètres de la route via l'object snapshot et son objet params
   */
  activatedRoute = inject(ActivatedRoute);
  /**
   * Il ne permet de naviguer via sa méthode navigate
   */
  router = inject(Router);
  constructor() {
    // 1ére étape : Récupérer l'id
    const id = this.activatedRoute.snapshot.params['id'];
    //2éme étape : Le chercher via le service CvService

    // Todo: Subscribe au flux du cv By Id
    // Si ok on l'affecte au siganl de cv
    // Sinon gérer l'erreur
   this.cvService.getCvByIdApi(id).subscribe({
     next: (cvApi) => {
       this.cv.set(cvApi);
     },
     error: (e) => {
       this.router.navigate(['/cv']);
     },
   });

    // this.cv.set(this.cvService.findCvById(id));
    // 2- 1 S'il n'existe pas => redirige vers la liste des cvs
   // if (!this.cv()) this.router.navigate(['/cv']);
  }

  deleteCv() {
    const cv = this.cv();
    if (cv) {
      // 1 étape : Appelle le cvServie pour le supprimer
      this.cvService.deleteCv(cv);
      // 2 étape :redirige vers la liste des cvs
      this.router.navigate(['/cv']);
    }
  }
}
