import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix',
  standalone: true
})
export class PrefixPipe implements PipeTransform {

  transform(id: string | number, prefix: string): string {
    return prefix + id;
  }

}
