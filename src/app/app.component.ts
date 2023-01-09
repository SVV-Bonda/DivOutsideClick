import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  @ViewChild('divButton') divButton!: ElementRef;
  @ViewChild('openDiv') openDiv!: ElementRef;
  openDivpop: boolean = false;

  constructor(){

  }

  OpenDiv(){
    this.openDivpop = !this.openDivpop
  }

  outClick(e:any) {
    if (e.target.innerText !== this.divButton.nativeElement.innerText && e.target.innerText !== this.openDiv.nativeElement.innerText) {
      this.openDivpop = false;
    }
  }
}
