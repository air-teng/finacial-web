import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo03',
  templateUrl: './demo03-bindings.component.html',
  styleUrls: ['./demo03-bindings.component.css']
})
export class Demo03BindingsComponent implements OnInit {

  myUrl = "https://translate.google.cn"
  myAddress = "北京市"

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    console.log("btn is clicked!");
  }
  handleChange(){
    console.log(this.myAddress);
  }
}
