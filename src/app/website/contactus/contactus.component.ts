import { Component, OnInit } from '@angular/core';
import { Contact } from '../../apex/entities/contact.entity';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  UserDetailsForm: FormGroup;  
  profile: Contact = new Contact();  
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  mobilePattern = '^[6-9][0-9]{9}$';
  namePattern = '[a-zA-Z ]+$';
  constructor(private formBuilder: FormBuilder) { 
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['',  Validators.compose([Validators.required,Validators.pattern(this.namePattern)])],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5),Validators.pattern(this.mobilePattern)])]
    });
  }

  ngOnInit() {
  }
 
  getInTouch(){
    // this.profile.sourceOfPage = "connect page"
    // console.log(this.profile);
    // this.coursesService.saveForm(this.profile).subscribe((data:any)=>{
    //   console.log(data);
    //   if(data.status == '1'){
    //     setTimeout(function () {
    // }, 2000);
    // this.coursesService.navigateToThanksPage();
    //   }
    // })
    // }

}
}
