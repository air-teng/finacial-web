import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {HeartBeatService} from '../heart-beat.service';

@Component({
  selector: 'app-demo08-service',
  templateUrl: './demo08-service.component.html',
  styleUrls: ['./demo08-service.component.css']
})
export class Demo08ServiceComponent implements OnInit {

  constructor(private myService:UserService,private myHBService:HeartBeatService) { }

  ngOnInit() {
  }

  handleClick(){
    //准备调用服务中的方法
    var isLogin = this.myService.checkLogin();
    console.log("当前的登录状态是：",isLogin);
  }

  startBeat(){
    this.myHBService.startBeat();
  }

  endBeat(){
    this.myHBService.endBeat();
  }
}
