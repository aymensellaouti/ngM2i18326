import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-som',
  imports: [FormsModule],
  templateUrl: './som.html',
  styleUrl: './som.css',
})
export class Som {
  x = signal(5);
  y = signal(7);
  z = computed(() => this.x() + this.y());
  doublez = computed(() => 2 * this.z());
  logEffect = effect(() => {
    console.log(this.z());
    console.log(this.doublez());
  })
  increment() {
    //this.x++;
    this.x.update((oldValue) => oldValue + 1);
  }
  log() {
    console.log(this.x);
  }

  reset() {
    this.x.set(0);
  }
}
