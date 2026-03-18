import { Component, Input, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-name-info',
  imports: [],
  templateUrl: './name-info.html',
  styleUrl: './name-info.css',
})
export class NameInfo {
  // entrée un paramètre
  // name = input.required({
  //   alias: 'myName',
  //   transform: (value) => 'je suis ' + value
  // });
  name = input('');

  clickedName = output<string>();

  onClickName() {
    this.clickedName.emit(this.name());
  }
}
