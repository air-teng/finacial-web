import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo09-cart',
  templateUrl: './demo09-cart.component.html',
  styleUrls: ['./demo09-cart.component.css']
})
export class Demo09CartComponent implements OnInit {

  numList = [100,200,300];

  constructor() { }

  ngOnInit() {
  }

  handleLogout(msg){
    console.log("logoutEvent被触发了,msg is ", msg);
  }

}
