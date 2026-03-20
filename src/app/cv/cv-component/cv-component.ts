import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from "../cv-list/cv-list";
import { CvCard } from "../cv-card/cv-card";
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from "../embauche/embauche.component";

@Component({
  selector: 'app-cv-component',
  imports: [CvList, CvCard, EmbaucheComponent],
  templateUrl: './cv-component.html',
  styleUrl: './cv-component.css',
})
export class CvComponent {
  cvService = inject(CvService);
  cvs = this.cvService.getCvs();
  selectedCv = this.cvService.selectedCv;
  toastr = inject(ToastrService);
  constructor() {
    this.toastr.info('Bienvenu dans notre CvTech :D');
    // Todo: Subscribe au flux des cvs
    // Si ok on les affecte au siganl de cvs
    // Sinon gérer l'erreur
  }
  // onSelectedCv(cv: Cv) {
  //   this.selectedCv.set(cv);
  // }
}
