import { Input, Directive , ElementRef, OnInit} from '@angular/core';
//Input --> 读取值
//Directive --> 定义指令
//ElementRef --> 获取原始元素
//OnInit --> 导出类的时候实现这个接口，规划化实现ngOnInit()方法
@Directive({
  selector: '[appMyChange]'
})
export class MyChangeDirective implements OnInit {

  @Input() appMyChange = "";

  constructor(private eleRef:ElementRef) { 
    console.log("指令被调用了",this.eleRef);
    this.eleRef.nativeElement.innerHTML = "hello world";
  }

  ngOnInit(){
    console.log("开始初始化了...",this.appMyChange);
  }
}
