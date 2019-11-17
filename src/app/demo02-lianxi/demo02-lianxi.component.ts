import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo02-lianxi',
  templateUrl: './demo02-lianxi.component.html',
  styleUrls: ['./demo02-lianxi.component.css']
})
export class Demo02LianxiComponent implements OnInit {
  students = [
    {
      sName:"lilei",
      sScore:90
    },
    {
      sName:"hanmeimei",
      sScore:50
    },
    {
      sName:"zhangsan",
      sScore:100
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
