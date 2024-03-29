import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    const image = value.match(/<img(.*)>/g)!;
    if(image) {
      let parser = new DOMParser();
      let parsedHtml = parser.parseFromString(image[0], 'text/html');
      return parsedHtml.images[0].src;
    }

    return '';
    
  }

}
