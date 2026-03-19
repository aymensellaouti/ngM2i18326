import { Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  #embauchees = signal<Cv[]>([]);

  getEmbauchees(): Signal<Cv[]> {
    return this.#embauchees.asReadonly();
  }
  /**
   *
   * Permet d'embaucher des cvs
   *
   * @param cv - le Cv à embaucher
   * @returns {boolean} return true si embauchée false sinon
   */
  embaucher(cv: Cv): boolean {
    if(this.#embauchees().find(cvEncours => cvEncours == cv)) {
      return false;
    }
    this.#embauchees.update((actualCvs) => [
      // ... récupére tous les éléments du tableau
      ...actualCvs,
      cv
    ]);
    return true;
  }
}
