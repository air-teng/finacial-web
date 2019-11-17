import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  //在服务中，封装一个检查用户是否登录的方法
  checkLogin(){
    return true;
  }
}
