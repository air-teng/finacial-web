import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo10-chatroom',
  templateUrl: './demo10-chatroom.component.html',
  styleUrls: ['./demo10-chatroom.component.css']
})
export class Demo10ChatroomComponent implements OnInit {
  
  messageList = [];

  lname = "lucy";

  constructor() { }

  ngOnInit() {
  }

  displayMessage(msg){
    this.messageList.push(msg);
    console.log(msg);
  }
}
