import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //返回数据的处理 value是值，args是参数
    console.log('value is '+value);
    console.log(args);
    //返回处理后的结果
    return '$'+value;
  }

}
