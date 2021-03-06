import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    const description = value.match(/<p>[^<](.*)<\/p>/g)!;

    // if(description) {
    //   return description[0].match(/[^<p>](.*)[^</p>]/g)!.join('');
    // }

    // return '';

    let parser = new DOMParser();
    let parsedHtml = parser.parseFromString(description[0], 'text/html');
    let pContent = parsedHtml.querySelector('p')!.textContent!;
    return pContent;
  
  }

}
