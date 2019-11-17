import {Input, ElementRef, Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective implements OnInit{
 
  @Input() appChangeBg = "";
  constructor(private elemRef:ElementRef) {
  }

  ngOnInit(){
    console.log(this.appChangeBg);
    this.elemRef.nativeElement.style.backgroundColor = this.appChangeBg;
   
  }
}
