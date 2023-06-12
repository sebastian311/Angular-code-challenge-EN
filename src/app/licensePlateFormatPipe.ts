import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'licensePlateFormat'})
export class LicensePlateFormatPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    let formatted = value.toUpperCase();

    if (formatted.length === 6) {
      if (/[A-Z]{2}[0-9]{2}[A-Z]{2}/.test(formatted)) {
        // Format: AA14BB -> AA-14-BB
        formatted = `${formatted.slice(0, 2)}-${formatted.slice(2, 4)}-${formatted.slice(4, 6)}`;
      } else if (/[0-9]{2}[A-Z]{2}[A-Z]{2}/.test(formatted)) {
        // Format: 14AABB -> 14-AA-BB
        formatted = `${formatted.slice(0, 2)}-${formatted.slice(2, 4)}-${formatted.slice(4, 6)}`;
      }
    }

    return formatted;
  }
}
