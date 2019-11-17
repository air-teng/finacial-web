import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo11-son',
  templateUrl: './demo11-son.component.html',
  styleUrls: ['./demo11-son.component.css']
})
export class Demo11SonComponent implements OnInit {

  sonName = "zhangsan";

  constructor() { }

  ngOnInit() {
  }

}
