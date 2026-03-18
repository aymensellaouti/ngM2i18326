import { Component, signal } from '@angular/core';
import { NameInfo } from '../name-info/name-info';

@Component({
  selector: 'app-names',
  imports: [NameInfo],
  templateUrl: './names.html',
  styleUrl: './names.css',
})
export class Names {
  names = signal(['hanane', 'meidhi', 'jennifer', 'gauthier', 'brandon']);
  shwoClickedName(name: string) {
    alert(name);
  }
}
