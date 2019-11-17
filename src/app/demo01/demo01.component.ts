import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.css']
})
export class Demo01Component implements OnInit {
  stuName = 'zhangsan'
  list = [100,200,300]
  isMember = true
  constructor() { }

  ngOnInit() {
  }

}
