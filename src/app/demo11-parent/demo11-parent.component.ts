import { Component, OnInit, ViewChild } from '@angular/core';
import {Demo11SonComponent} from '../demo11-son/demo11-son.component';//导的时候导文件名即可

@Component({
  selector: 'app-demo11-parent',
  templateUrl: './demo11-parent.component.html',
  styleUrls: ['./demo11-parent.component.css']
})
export class Demo11ParentComponent implements OnInit {
  //准备在父组件中，通过viewchild得到子组件的实例对象，进而做一些操作
  //在JS中拿到子组件变量的方式
  // @ViewChild(Demo11SonComponent)  demo11Son  //使用ViewChild引入
  @ViewChild('mySon')  demo11Son  //直接拿到本地变量的方式

  constructor() { }

  ngOnInit() {
    console.log(this.demo11Son.sonName);
  }

}
