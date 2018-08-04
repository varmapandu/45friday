import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-blog',
  templateUrl: './sub-blog.component.html',
  styleUrls: ['./sub-blog.component.scss']
})
export class SubBlogComponent implements OnInit {

  data: any = {}
  getData() {
    this.data = {
      items:[
        {
         Title:"The Blog",
         name:"Blog",
         para:'BACK TO GRID VIEW Propane Studio Included on List of Top San Francisco Full-Service Agencies by Clutch',
         Date:'May 04,2018',
         subpara:['Propane Studio Included on List of Top San Francisco Full-Service Agencies by Clutch Propane Studio Included on List of Top San Francisco Full-Service Agencies by Clutch'],
         description:['While it may be slightly hard to stick out from the crowded full-service digital marketplace, we know that unbiased reviews are one of the best ways to distinguish our company. That’s why we are pleased to announce our inclusion in Clutch’s list of Top San Francisco full-service agencies it may be slightly hard to stick out from the crowded full-service digital marketplace, we know that unbiased reviews are one of the best ways to distinguish our company. That’s why we are pleased to announce our inclusion in Clutch’s list of Top San Francisco full-service agencies'],
        }
     ]
    }
  }
  images=[
    {
      imgSrc:'/assets/45friday_images/6.png',
      imgAlt:'',
    },
    {
      imgSrc:'/assets/45friday_images/5.png',
      imgAlt:'',
    },
    {
      imgSrc:'/assets/45friday_images/4.png',
      imgAlt:'',
    }
  
  ]
  constructor() { 
    this.getData();
  }

  ngOnInit() {
  }

}
