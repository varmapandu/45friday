import { Component, OnInit, Inject, Input, HostListener,ViewChild ,ElementRef} from '@angular/core';
import { HeaderService } from './header.service';
import { ProgramList } from './../../apex/entities/programList.entity';
import { Storage } from './../../shared/utils/storage';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from "../../service/window.service";
import { Routes, RouterModule, Router, NavigationStart,NavigationEnd } from '@angular/router';

// declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen:boolean = false;
  headerFadeIn:boolean = false;
  @ViewChild('ulList') ulList:ElementRef;
  @ViewChild('buttonToggle') buttonToggle:ElementRef;
  menuItems = [
    {
      link:'/',
      text:'Home'
    },
    {
      link:'/services',
      text:'Services'
    },
    // {
    //   link:'/blog',
    //   text:'blog'
    // },
    {
      link:'/about',
      text:'About'
    }
  ]
  constructor(private headerservice: HeaderService, @Inject(DOCUMENT) private document: Document,
  @Inject(WINDOW) private window,private router: Router,) {
  }

  ngOnInit() {
    console.log(this.ulList.nativeElement) 

  }
  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 100) {
      this.headerFadeIn = true;
    } else if (this.headerFadeIn && number < 10) {
      this.headerFadeIn = false;
    }
  }
  toggle(e){
this.menuOpen = !this.menuOpen
  }
  toggleMenu(e){
    var divEl = e.target.parentElement.parentElement.parentElement.parentElement;
    var buttonContainer = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    var btnContainer = this.buttonToggle.nativeElement
    console.log(divEl)
    divEl.setAttribute("class","overlay")
    btnContainer.setAttribute("class","button_container")
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
}
