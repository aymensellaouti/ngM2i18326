import { Component, inject, OnDestroy } from "@angular/core";
import { FormBuilder, Validators, AbstractControl, ReactiveFormsModule } from "@angular/forms";
import { APP_CONST } from "../../config/constantes";
import { uniqueCinValidator } from "../../asyncValidators/unique-cin.validator";
import { CvService } from "../services/cv.service";

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
  imports: [ReactiveFormsModule],
})
export class AddCvComponent implements OnDestroy {
  formBuilder = inject(FormBuilder);
  cvSerivce = inject(CvService);
  minMaxRequired = Validators.compose([
    Validators.required,
    Validators.min(15),
    Validators.max(30),
  ]);
  form = this.formBuilder.group(
    {
      name: [
        '',
        {
          validators: Validators.required,
          updateOn: 'blur',
        },
      ],
      firstname: ['', Validators.required],
      path: [''],
      job: ['', Validators.required],
      cin: [
        '',
        {
          validators: [Validators.required, Validators.pattern('[0-9]{8}')],
          asyncValidators: [uniqueCinValidator(this.cvSerivce)],
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
          updateOn: 'change',
        },
      ],
    },
    {
      validators: [],
      asyncValidators: [],
      updateOn: 'change',
    },
  );
  constructor() {
    // this.name.valueChanges.subscribe({
    //   next: (value) => {
    //     console.log(value);
    //   }
    // })
    const savedForm = localStorage.getItem(APP_CONST.savedAddForm);
    if (savedForm) {
      this.form.patchValue(JSON.parse(savedForm));
    }
    this.age.valueChanges.subscribe({
      next: (age) => {
        if (age < 18) {
          this.path?.disable();
        } else {
          this.path?.enable();
        }
      },
    });
  }
  ngOnDestroy(): void {
    if (this.form.valid) {
      localStorage.setItem(APP_CONST.savedAddForm, JSON.stringify(this.form.value));
    }
  }
  addCv() {}

  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age(): AbstractControl {
    return this.form.get('age')!;
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }
}
