import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alternate-view',
  templateUrl: './alternate-view.component.html',
  styleUrls: ['./alternate-view.component.scss']
})
export class AlternateViewComponent implements OnInit {

  // evenOdd = [
  //   {
  //     heading:'Digital',
  //     description:'Our blood runs digital. From the technical to the strategic, we have a huge range of expertise and experience. Our set of talented, proactive developers, designers and project managers will work with you to create something fantastic. We’re all about digital transformations that build your identity and bring your brand to life.',
  //     image:'https://www.appnova.com/wp-content/uploads/2017/06/01-internal-2.jpg'
  //   },
  //   {
  //     heading:'Digital Marketing',
  //     description:' blood runs digital. From the technical to the strategic, we have a huge range of expertise and experience. Our set of talented, proactive developers, designers and project managers will work with you to create something fantastic. We’re all about digital transformations that build your identity and bring your brand to life.',
  //     image:'https://www.appnova.com/wp-content/uploads/2017/06/01-internal-2.jpg'
  //   },
  //   {
  //     heading:'Digital',
  //     description:'Our blood runs digital. From the technical to the strategic, we have a huge range of expertise and experience. Our set of talented, proactive developers, designers and project managers will work with you to create something fantastic. We’re all about digital transformations that build your identity and bring your brand to life.',
  //     image:'https://www.appnova.com/wp-content/uploads/2017/06/01-internal-2.jpg'
  //   },
  // ]

  
  data:any={};

  constructor() {
    this.getData();
   }

  ngOnInit() {
   }
    getData(){
      this.data={
        contents:[
          {
        imgsrc: "/assets/45friday_images/icon2.png",
        title:"Strategy",
        para:"Market Analysis",
        paralist:"Audience",
        paralist1:"Profiling",
        paralist2:"Brand Identify",
        paralist3:"Communication",
      },
        ],
         image:[
         {
          imgsrc1:"/assets/45friday_images/strategy.png",
         }
        ],
        contents1:[
          {
        imgsrc: "/assets/45friday_images/icon2.png",
        title:"Design",
        para:"Build",
        paralist:"Integrate",
        paralist1:"Test",
        paralist2:"Deliver",
        paralist3:"",
      },
        ],
         image1:[
         {
          imgsrc1:"/assets/45friday_images/design.png",
         }
        ],
        contents2:[
          {
        imgsrc: "/assets/45friday_images/icon2.png",
        title:"Technology",
        para:"Managed",
        paralist:"Services",
        paralist1:"Platform",
        paralist2:"Implementation",
        paralist3:"Presentation",
      },
        ],
         image2:[
         {
          imgsrc1:"/assets/45friday_images/technology.png",
         }
        ],
        contents3:[
          {
        imgsrc: "/assets/45friday_images/icon2.png",
        title:"Brand",
        para:"Branding",
        paralist:"Design",
        paralist1:"Motion",
        paralist2:"Content",
        paralist3:"",
      },
        ],
         image3:[
         {
          imgsrc1:"/assets/45friday_images/brand.png",
         }
        ]
      }
  
  }


}
