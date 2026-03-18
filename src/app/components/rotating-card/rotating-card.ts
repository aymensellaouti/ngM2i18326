import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rotating-card',
  imports: [FormsModule],
  templateUrl: './rotating-card.html',
  styleUrl: './rotating-card.css',
})
export class RotatingCard {
  // état de notre interface
  name = 'sellaouti';
  firstname = 'aymen';
  job = 'Formateur';
  path = 'rotating_card_profile3.png';
}
