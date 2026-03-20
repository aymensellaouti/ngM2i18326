import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from "../cv-list/cv-list";
import { CvCard } from "../cv-card/cv-card";
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from "../embauche/embauche.component";
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import { httpResource } from '@angular/common/http';
import { APP_API } from '../../config/api.config';

@Component({
  selector: 'app-cv-component',
  imports: [CvList, CvCard, EmbaucheComponent],
  templateUrl: './cv-component.html',
  styleUrl: './cv-component.css',
})
export class CvComponent {
  cvService = inject(CvService);
  selectedCv = this.cvService.selectedCv;
  toastr = inject(ToastrService);
  cvs = signal<Cv[]>([]);
  errorMessage = signal('');
  isLoading = signal(false);
  // toSignal il s'inscrit à l'observable
  // récupére la valeu$
  // la met dans un signal
  cvs2 = toSignal(
    this.cvService.getCvsByApi().pipe(
      catchError(e => {
        this.toastr.error(`Attention les données sont fictives merci de contatcer l'admin`);
        return of(this.cvService.getCvs());
      })
    )
  );

  cvsResource = httpResource(() => APP_API.cv);
  constructor() {
    //this.cvsResource.
    this.toastr.info('Bienvenu dans notre CvTech :D');
    // Todo: Subscribe au flux des cvs
    this.cvService.getCvsByApi().subscribe({
      next: (cvsApi) => {
        this.cvs.set(cvsApi);
      },
      error: (e) => {
        const cvsSignal = this.cvService.getCvs();
        this.cvs.set(cvsSignal());
        this.toastr.error(`Attention les données sont fictives merci de contatcer l'admin`);
      },
    });
    // Si ok on les affecte au siganl de cvs
    // Sinon gérer l'erreur
  }
  // onSelectedCv(cv: Cv) {
  //   this.selectedCv.set(cv);
  // }
}
