import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-we-do',
  templateUrl: './how-we-do.component.html',
  styleUrls: ['./how-we-do.component.scss']
})
export class HowWeDoComponent implements OnInit {

  data: any = {}
  content:any;
  selectedRow :number;

toggle(item,index?:number){
  this.selectedRow = index;
  let data=this.listitemdata;
  for(let list of data){
    if(item == list.id){
     this.content=list.description;
      // console.log(list.description);
    }
  }
}
  constructor() {
    this.getData();
    this.toggle(1,0)
  }

  ngOnInit() {
  }
  getData() {
    this.data = {
      listitem: [
        {
          id:1,
          name:"Explore",
        },
        {
          id:2,
          name:"Expert Guidance",
        },
        {
          id:3,
          name:"Resourceful",
        },
        {
          id:4,
          name:"Co-operate",
        },
        {
          id:5,
          name:"Value",
        }
      ]
    }
  }
  listitemdata=[
  {
    id:1,
    description:'To define a marketing strategy for a business it is sacrosanct to 	do a research about the industry. So we treat client business as our business. We thoroughly conduct a research about the business and gather the competitor’s report through our resources. The data gathered from different sources are cumulated together and that is being considered to zero down on a strategy.'
  },
  {
    id:2,
    description:'Our sole motto to do a task is to reach excellence. This can only be achieved when it is done by a connoisseur. We appoint a person who is specialist in their deliverables. As per the need of time, we take help of freelancer to the job but never take quality for granted.'
  },
  {
    id:3,
    description:' We employ the expert tools and software to make the campaign successful. In this dynamic era of change, we get the marketing task automated to make clients offers effective and efficient. Further, 	having industry connect with marketing professionals makes our job simpler as we get the right counseling at right time through right people.'
  },
  {
    id:4,
    description:'Like a football team can’t rely on the goalkeeper to win the whole match, in marketing also we seek guidance and assistant to make it to top . We are delighted 	to seek guidance from our client during the need of the hour. Collaborating with the marketing and sales team of their 	business and 	understanding their requirement to 	draft a online strategy, is what differentiate us from rest. '
  },
  {
    id:5,
    description:'Our reason for existence is to create a value in the client’s business. It’s hard to believe but prior to the start of our agency we have client ready to sign a MoU with us. Most of the business operate by saying that “This A & B package will cost you”. But our 	thought process differ from them. We say “This A pack will help in 	brand awareness ,whereas B pack will improve engagement” then we come to price factor. '
  }
  ]

}
