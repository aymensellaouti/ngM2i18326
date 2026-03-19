import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second {
  name = signal('jennifer');
  firstname = signal('jennifer');
  acr = inject(ActivatedRoute);
  constructor() {
    this.name.set(this.acr.snapshot.params['name']);
    this.firstname.set(this.acr.snapshot.params['firstname']);
  }
}
