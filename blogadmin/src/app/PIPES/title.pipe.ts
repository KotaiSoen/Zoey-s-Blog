import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
  
  const title = value.match(/<h[1-6](.*)>(.*)<\/h[1-6]>/g)!

  if (title) {
    let parser = new DOMParser();
    let parsedHtml = parser.parseFromString(title[0], 'text/html');
    let hContent = parsedHtml.querySelectorAll('h1, h2, h3, h4, h5, h6')!;
    return hContent[0].textContent!;
    // return title[0].match(/[^<h 1-6>](.*)[^</h 1-6>]/g)!.join('');
  }

  return '';

  }

}
