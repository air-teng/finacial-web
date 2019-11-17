import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeartBeatService { 
  myTimer = null;
  constructor() { }
  startBeat(){
    if(!this.myTimer){
      this.myTimer = setInterval(()=>console.log("正在心跳..."),500);
    }
  }
  endBeat(){
    if(this.myTimer){
      clearInterval(this.myTimer);
      this.myTimer = null;
    }
  }
}
