import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable, of } from "rxjs";
import { CvService } from "../cv/services/cv.service";

export function uniqueCinValidator(cvService: CvService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<null | ValidationErrors> => {
    const cin = control.value;
    if (!cin) return of(null);
    return cvService.getCvsByProperty('cin', cin).pipe(
      map( cvs => cvs.length > 0 ? {uniqueCin: 'Le cin doit être unique'} : null )
    )
  }
}
