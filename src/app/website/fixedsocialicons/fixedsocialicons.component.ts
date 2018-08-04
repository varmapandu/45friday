import { Component, OnInit,HostListener,Inject } from '@angular/core';
import { WINDOW } from "../../service/window.service";
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-fixedsocialicons',
  templateUrl: './fixedsocialicons.component.html',
  styleUrls: ['./fixedsocialicons.component.scss']
})
export class FixedsocialiconsComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window, @Inject(DOCUMENT) private document: Document,) { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    // console.log(number)
    // if (number > ) {
    //   this.isScrolled = true;  
    // } 
   
  }
}
