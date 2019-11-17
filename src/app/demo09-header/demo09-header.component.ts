import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-demo09-header',
  templateUrl: './demo09-header.component.html',
  styleUrls: ['./demo09-header.component.css']
})
export class Demo09HeaderComponent implements OnInit {
  //1.触发的事件名就是它
  //2.它本是就是一个触发器
  @Output() logoutEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    //在此方法中，触发给当前组件绑定的自定义事件
    this.logoutEvent.emit(false);
  }

}
