import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(val: string, length?: any): string {
    const words = val.split(/\s+/);
    const result = (words.length > length) ? words.slice(0, length).join(' ') + '...' : val
    return result;
  }

}
