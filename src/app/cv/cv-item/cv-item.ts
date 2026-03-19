import { Component, inject, input, output } from '@angular/core';
import { Cv } from '../model/cv';
import { DefaultImagePipe } from '../pipes/default-image-pipe';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv-item',
  imports: [DefaultImagePipe],
  templateUrl: './cv-item.html',
  styleUrl: './cv-item.css',
})
export class CvItem {
  cv = input.required<Cv>();
  size = input(50);
  cvService = inject(CvService);
  //selectCv = output<Cv>();

  onSelectCv() {
    this.cvService.selectCv(this.cv())
    //this.selectCv.emit(this.cv());
  }
}
