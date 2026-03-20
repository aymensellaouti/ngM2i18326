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
  cvs = signal<Cv[]>([])
  selectedCv = this.cvService.selectedCv;
  toastr = inject(ToastrService);
  constructor() {
    this.toastr.info('Bienvenu dans notre CvTech :D');
    // Todo: Subscribe au flux des cvs
    this.cvService.getCvsByApi().subscribe({
      next: (cvsApi) => {
        this.cvs.set(cvsApi);
      },
      error: (e) => {
        const cvsSignal = this.cvService.getCvs()
        this.cvs.set(cvsSignal());
        this.toastr.error(`Attention les données sont fictives merci de contatcer l'admin`)
      }
    })
    // Si ok on les affecte au siganl de cvs
    // Sinon gérer l'erreur
  }
  // onSelectedCv(cv: Cv) {
  //   this.selectedCv.set(cv);
  // }
}
