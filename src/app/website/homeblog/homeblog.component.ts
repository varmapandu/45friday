import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeblog',
  templateUrl: './homeblog.component.html',
  styleUrls: ['./homeblog.component.scss']
})
export class HomeblogComponent implements OnInit {

  image=[
    {
      id:1,
      imgsrc:"../../assets/45friday_images/14.jpg",
       header:"Our Blog",
    },
   
  ]


// emptycards=[
//   {
//     id:1,
//     imgsrc:"/assets/hands.png",
//     para:'LeParcel',
//   },
//   {
//     id:2,
//     imgsrc:"/assets/hands.png",
//   },

// ]
// cards=[
//   {
//     id:3,
//     imgsrc:"/assets/hands.png",
//   },
//   {
//     id:4,
//     imgsrc:"/assets/hands.png",
//   },

// ]

  constructor() { }

  ngOnInit() {
  }


}
