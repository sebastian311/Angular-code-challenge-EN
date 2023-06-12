import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';

export function kentekenValidator(control: FormControl): { [key: string]: any } | null {
  const value = control.value;
  if (value && value.length === 8) {
    if (
      /^[A-Z]{2}-[A-Z]{2}-[0-9]{2}$/.test(value) &&
      /^[0-9]{2}-[A-Z]{2}-[A-Z]{2}$/.test(value)
    ) {
      return { kentekenFormat: true };
    }
  } else if (value && value.length !== 6) {
    return { kentekenLength: false };
  }
  return null;
}


