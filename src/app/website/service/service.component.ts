import { Component, OnInit,Inject } from '@angular/core';
import { Routes, RouterModule, Router, NavigationStart,NavigationEnd } from '@angular/router';
import { WINDOW } from "../../service/window.service";
import { Location } from '@angular/common';
import { DOCUMENT } from "@angular/platform-browser";
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: Document,
  @Inject(WINDOW) private window: Window,private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
    });
  }

  images=[
    {
      id:1,
      imgSrc:"../../assets/45friday_images/facebook_icon.png",
      imgAlt:'facebook',
      href:'https://www.facebook.com/digitallync/'
    },
    {
      id:2,
      imgSrc:"../../assets/45friday_images/twitter_icon.png",
      imgAlt:'twitter',
      href:'https://www.twitter.com/digitallync/'
    },
    {
      id:3,
      imgSrc:"../../assets/45friday_images/instagram.png",
      imgAlt:'instagram',
      href:'https://www.instagram.com/_digitallync_/'
    }
  
  ]
}
