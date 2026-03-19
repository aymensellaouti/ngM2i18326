import {  Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';



@Injectable({
  providedIn: 'root',
})
export class CvService {
  #cvs = signal<Cv[]>([
    new Cv(1, 'Hanane', 'Elharti', 'Dev', '12345678', 20, ''),
    new Cv(2, 'Jennifer', 'Denis', 'Dev', '12345679', 20, 'rotating_card_profile.png'),
    new Cv(3, 'Meihdi', 'Chaouchi', 'Dev', '12345676', 20, 'rotating_card_profile2.png'),
    new Cv(4, 'Brandon', 'Soret', 'Dev', '12345674', 20, '           '),
    new Cv(5, 'Gauthier', 'Riesser', 'Dev', '12345674', 20, 'rotating_card_profile3.png'),
  ]);

  #selectedCv = signal<Cv | null>(null);
  selectedCv = this.#selectedCv.asReadonly();
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Signal<Cv[]> {
    return this.#cvs.asReadonly();
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs().find(cv => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): void {
        this.#cvs.update((actualsCv) =>
          actualsCv.filter((cvEnCours) => cvEnCours != cv),
        );
  }
  /**
   *
   * @param cv Update le cv sélectionné
   */
  selectCv(cv: Cv) {
    this.#selectedCv.set(cv);
  }
}
