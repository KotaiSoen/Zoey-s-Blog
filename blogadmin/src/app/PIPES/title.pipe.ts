import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
  
  const title = value.match(/<h[1-6]>(.*)<\/h[1-6]>/g)!

  if (title) {
    return title[0].match(/[^<h 1-6>](.*)[^</h 1-6>]/g)!.join('');
  }

  return '';

  }

}
