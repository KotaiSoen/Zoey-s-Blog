import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    const arr = [];
    let description = new DOMParser().parseFromString(value, 'text/html');
    const parsedHtml: HTMLCollection = description.getElementsByTagName('p');
    for (let i = 0; i < parsedHtml.length; i++) {
      if(parsedHtml[i].textContent) {
        arr.push(parsedHtml[i].textContent);
      };
    }

    return arr[0]!;
  }

}
