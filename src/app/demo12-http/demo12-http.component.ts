import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-demo12-http',
  templateUrl: './demo12-http.component.html',
  styleUrls: ['./demo12-http.component.css']
})
export class Demo12HttpComponent implements OnInit {

  constructor(private myHttp:HttpClient) { }

  ngOnInit() {
  }

  handleClick(){
    var url = 'http://jsonplaceholder.typicode.com/users';
    //发送网络请求
    this.myHttp.get(url).subscribe((result)=>{console.log(result)});
  }
}
