import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Highlight } from '../highlight';
import { Highlight2 } from '../highlight2';
import { Rainbow } from '../rainbow';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
  imports: [FormsModule, Highlight, Highlight2, Rainbow]
})
export class MiniWordComponent {
  //state
  color = signal('black');
  font = signal('garamond');
  size = signal(75);
}
