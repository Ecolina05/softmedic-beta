import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameComponent'
})
export class NameComponentPipe implements PipeTransform {

  transform(value: string, ...args: any): any {
    if (value === undefined) {
      return '';
    } else if (value.includes('paciente')) {
      return 'Pacientes';
    } else if (value.includes('dashboard')) {
      return 'Dashboard';
    }
  }

}
