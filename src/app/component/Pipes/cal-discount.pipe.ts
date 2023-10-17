import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeformat'
})
export class CalDiscountPipe implements PipeTransform {
  transform(value: string): string {
    let result = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0 && i < value.length - 1) {
        result += ' - ';
      }
      result += value.charAt(i);
    }
    return result;
  }
}
