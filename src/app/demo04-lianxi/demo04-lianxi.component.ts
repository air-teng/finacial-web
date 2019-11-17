import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo04-lianxi',
  templateUrl: './demo04-lianxi.component.html',
  styleUrls: ['./demo04-lianxi.component.css']
})
export class Demo04LianxiComponent implements OnInit {
  liList = [];
  inputValue = "";

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.liList.unshift(this.inputValue);
  }
  delete(){
    this.liList.pop();
  }
}
