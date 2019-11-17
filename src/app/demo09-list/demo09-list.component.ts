import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-demo09-list',
  templateUrl: './demo09-list.component.html',
  styleUrls: ['./demo09-list.component.css']
})
export class Demo09ListComponent implements OnInit {
  //允许接受myList属性所传来的数据，并将数据保存在变量myList中
  @Input() myList = []

  constructor() { }

  ngOnInit() {
  }

}
