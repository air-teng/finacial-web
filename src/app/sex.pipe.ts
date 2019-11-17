import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sex'
})
export class SexPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == 0){
      return "女";
    }else if (value == 1){
      return "男";
    }
    return value;
  }

}
