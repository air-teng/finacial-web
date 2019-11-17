import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo05-pipe',
  templateUrl: './demo05-pipe.component.html',
  styleUrls: ['./demo05-pipe.component.css']
})
export class Demo05PipeComponent implements OnInit {

  stuName = "JohnReese";
  price = 12345;
  totalPrice = 345.3438;
  progress = 0.35;
  stu={sName:'lucy',sAge:20};
  
  constructor() { }

  ngOnInit() {
  }

}
