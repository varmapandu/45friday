import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
data:any;
  constructor() {
    this.getData();
   }

  ngOnInit() {
  }

  getData(){
    this.data={
      overview: [
        {
          header:"Strategy",
          imagesrc:"../../assets/45friday_images/icon2.png",
          imagealt:"facebook",
          list:"Our strategy define your success and we plan it out with utmost care and passion. It is not just limited to a product but also includes market and competitors.",

        },
        {
          header:"Design",
          imagesrc:"../../assets/45friday_images/design_icon.png",
          imagealt:"facebook",
          list:"To appeal people, design can do the spell and with the help of our expert design team can make people mesmerized.",

        },
        {
          header:"Technology",
          imagesrc:"../../assets/45friday_images/icon2.png",
          imagealt:"facebook",
          list:"Future is technology for us and to be competitive in the industry we need to be continuously upgrade our-self.",

        },
        {
          header:"Brand",
          imagesrc:"../../assets/45friday_images/icon2.png",
          imagealt:"facebook",
          list:"Our main motto is to support the SME for which branding & development is essential. Thus we offer holistic services in this domain.",

        }
      ]

}
  }

  // image=[
  //   {
  //     id:1,
  //     imgsrc:"../../assets/45friday_images/facebook.png",
  //     imagealt:"facebook",
  //     imgsrc1:"../../assets/45friday_images/twit.png",
  //     imagealt1:"twit",
  //     imgsrc2:"../../assets/45friday_images/twitter.png",
  //     imagealt2:"twitter",
    
  //   },
  // ]


  images=[
    {
      id:1,
      imgSrc:"../../assets/45friday_images/facebook.png",
      imgAlt:'facebook',
      href:'https://www.facebook.com/digitallync/'
    },
    {
      id:2,
      imgSrc:"../../assets/45friday_images/twit.png",
      imgAlt:'twitter',
      href:'https://twitter.com/digitallync/'
    },
    {
      id:3,
      imgSrc:"../../assets/45friday_images/twitter.png",
      imgAlt:'twitter',
      href:'https://twitter.com/digitallync/'
    }
  
  ]
}
