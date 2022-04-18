import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTemplate'
})
export class SearchTemplatePipe implements PipeTransform {

  transform(value: any, args?: any): unknown {
    console.log(value, args)

    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();

    return value.filter( (data)=> {
      return JSON.stringify(data).toLocaleLowerCase().includes(args);
    })
  }

}
