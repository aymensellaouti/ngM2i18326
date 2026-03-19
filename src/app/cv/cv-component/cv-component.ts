import { Component, signal } from '@angular/core';
import { Cv } from '../model/cv';
import { CvList } from "../cv-list/cv-list";
import { CvCard } from "../cv-card/cv-card";

@Component({
  selector: 'app-cv-component',
  imports: [CvList, CvCard],
  templateUrl: './cv-component.html',
  styleUrl: './cv-component.css',
})
export class CvComponent {
  cvs = signal<Cv[]>([
    new Cv(1, 'Hanane', 'Elharti', 'Dev', '12345678', 20, 'rotating_card_profile.png'),
    new Cv(2, 'Jennifer', 'Denis', 'Dev', '12345679', 20, 'rotating_card_profile.png'),
    new Cv(3, 'Meihdi', 'Chaouchi', 'Dev', '12345676', 20, 'rotating_card_profile2.png'),
    new Cv(4, 'Brandon', 'Soret', 'Dev', '12345674', 20, 'rotating_card_profile3.png'),
    new Cv(5, 'Gauthier', 'Riesser', 'Dev', '12345674', 20, 'rotating_card_profile3.png'),
  ]);
  selectedCv = signal<Cv | null>(null);

  onSelectedCv(cv: Cv) {
    this.selectedCv.set(cv);
  }
}
