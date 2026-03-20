import {  Injectable, Signal, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class CvService {
  /**
   * La liste des cvs à gérer
   * Elle est privé pour garder lo gestion et le control niveau service
   */
  #cvs = signal<Cv[]>([
    new Cv(1, 'Hanane', 'Elharti', 'Dev', '12345678', 20, ''),
    new Cv(2, 'Jennifer', 'Denis', 'Dev', '12345679', 20, 'rotating_card_profile.png'),
    new Cv(3, 'Meihdi', 'Chaouchi', 'Dev', '12345676', 20, 'rotating_card_profile2.png'),
    new Cv(4, 'Brandon', 'Soret', 'Dev', '12345674', 20, '           '),
    new Cv(5, 'Gauthier', 'Riesser', 'Dev', '12345674', 20, 'rotating_card_profile3.png'),
  ]);

  /**
   * Le signal qui représente le cv sélectionné
   * Il est privé pour garder le control
   */
  #selectedCv = signal<Cv | null>(null);

  /**
   * Une copie du cv sélectionné mais en lecture seule
   */
  selectedCv = this.#selectedCv.asReadonly();
  /**
   * Retourne la liste des cvs
   * @returns Cv[]
   */
  getCvs(): Signal<Cv[]> {
    // Le asReadonly va etre en sorte que le seul qui puisse modifier la listye c'est le service
    // Encapsulation, le consomateur il ne peut que lire
    return this.#cvs.asReadonly();
  }

  /**
   *
   * @returns Le flux des cvs de l'api
   */
  getCvsByApi(): Observable<Cv[]> {
    return of([]);
  }

  /**
   *
   * @returns Le flux des cvs de l'api
   */
  getCvByIdApi(): Observable<Cv> {
    return of(new Cv(1, 'Hanane', 'Elharti', 'Dev', '12345678', 20, ''));
  }

  /**
   *
   * Cherche un cv avec son id dans lai liste fictive de cvs
   *
   * @param id
   * @returns Cv | null
   */
  findCvById(id: number): Cv | null {
    return this.#cvs().find((cv) => cv.id == id) ?? null;
  }

  /**
   *
   * Supprime un cv s'il le trouve
   *
   * @param cv : Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): void {
    this.#cvs.update((actualsCv) => actualsCv.filter((cvEnCours) => cvEnCours != cv));
  }
  /**
   *
   * @param cv Update le cv sélectionné
   */
  selectCv(cv: Cv) {
    this.#selectedCv.set(cv);
  }
}
