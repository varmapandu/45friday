import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  images=[
    {
      id:1,
      imgSrc:"../../../assets/45friday_images/facebook_icon.png",
      imgAlt:'facebook',
      href:'https://www.facebook.com/digitallync/'
    },
    {
      id:2,
      imgSrc:"../../../assets/45friday_images/twitter_icon.png",
      imgAlt:'twitter',
      href:'https://www.twitter.com/digitallync/'
    },
    {
      id:3,
      imgSrc:"../../../assets/45friday_images/instagram.png",
      imgAlt:'instagram',
      href:'https://www.instagram.com/_digitallync_/'
    }
  
  ]
  data:any={};

  constructor() {
    this.getData();
   }

  ngOnInit() {
  }
  getData(){
    this.data={
      para1:[
        {
          header:"Based out of Malaysia, is driven by ideas of individuals who share the great passion for marketing bolstered by technology.",
        }
      ],
      card1:[
        {
          id:1,
          imgsrc:"../../../assets/45friday_images/profile.png",
          para:"Profile"
        },
        {
          id:2,
          imgsrc:"../../../assets/45friday_images/profile.png",
          para:"Profile"
         
        },
        {
          id:3,
          imgsrc:"../../../assets/45friday_images/profile.png",
          para:"Profile"   
        },
      
      ],
      // para2:[
      //   {
      //     para:"“I recall having my first camera at 18 and taking it to a photoshoot of my freinds where I promptly left it behind. A few days later and being much more responsible, I take my first manual SLR. It was a canon eos1200d.."
      //   }
      // ],
      // para3:[
      //   {
      //     para1:"I recall having my first camera at 18 and taking it to a photoshoot of my freinds where I promptly left it behind. A few days later and being much more responsible, I take my first manual SLR. It was a canon eos1200d.."
      //   }
      // ],
      testimonials:[
        {
        imagepath: "../../../assets/45friday_images/design_icon.png",
          imagesrc: "",
          avatarpath: "",
          avatarscr: "",
          list: "Tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh tawshif is a web designer.",
        },
        {
          imagepath: "../../../assets/45friday_images/design_icon.png",
            imagesrc: "",
            avatarpath: "",
            avatarscr: "",
            list: "Tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh tawshif is a web designer.",
          },
          {
            imagepath: "../../../assets/45friday_images/design_icon.png",
              imagesrc: "",
              avatarpath: "",
              avatarscr: "",
              list: "Tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh,tawshif is a web designer living in Bangladesh tawshif is a web designer.",
            }
      ],
      
      card:[
        {
          id:1,
          imgsrc3:"../../../assets/45friday_images/image.png",   
          imgsrc1:"../../../assets/45friday_images/like1.png",
          imgsrc2:"../../../assets/45friday_images/comment1.png",
          
        },
        {
          id:2,
          imgsrc3:"../../../assets/45friday_images/image_group.png", 
          imgsrc1:"../../../assets/45friday_images/like1.png",
          imgsrc2:"../../../assets/45friday_images/comment1.png", 
        },
        {
          id:3,
          imgsrc3:"../../../assets/45friday_images/image_tech.png",
          imgsrc1:"../../../assets/45friday_images/like1.png",
          imgsrc2:"../../../assets/45friday_images/comment1.png", 
        },
        {
          id:4,
          imgsrc3:"../../../assets/45friday_images/image.png",   
          imgsrc1:"../../../assets/45friday_images/like1.png",
          imgsrc2:"../../../assets/45friday_images/comment1.png",
        },
        {
          id:5,
          imgsrc3:"../../../assets/45friday_images/image_group.png", 
          imgsrc1:"../../../assets/45friday_images/like1.png",
          imgsrc2:"../../../assets/45friday_images/comment1.png",
        },
      ],
     
}
}
}
