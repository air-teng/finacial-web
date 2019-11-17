import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-demo10-user',
  templateUrl: './demo10-user.component.html',
  styleUrls: ['./demo10-user.component.css']
})
export class Demo10UserComponent implements OnInit {
  
  @Input() userName = '';
  @Output() sendMessage = new EventEmitter();
  myMsg = '请输入...';

  constructor() { }

  ngOnInit() {
  }

  addMessage(){
    if(this.myMsg !== '请输入...' && this.myMsg !== ''){
      this.sendMessage.emit(this.userName + ":" + this.myMsg);
    }
    this.myMsg = '';
  }

}
