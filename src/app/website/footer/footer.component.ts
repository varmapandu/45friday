import { Component, OnInit } from '@angular/core';
// import {CoursesService} from '../courses/courses.service';
// import { ContactForm } from '../../website/courses/courses.form';
import { Contact } from '../../apex/entities/contact.entity';
import { Routes, RouterModule, Router, NavigationStart,NavigationEnd } from '@angular/router';


import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  namePattern = '[a-zA-Z ]+$';  
  // myForm: any = ContactForm.init();
  profile: Contact = new Contact();
  UserDetailsForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
    // ContactForm.edit(this.myForm);
    this.UserDetailsForm = this.formBuilder.group({
      'name': ['', [Validators.required, Validators.pattern(this.namePattern)]],
      'email': ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      // 'mobile': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.pattern(this.mobilePattern)])]
    });
  }

  ngOnInit() {

  }
    onSubmit(e){
      console.log(e)
      // this.profile.sourceOfPage = "home page";
      // this.coursesService.saveForm(this.profile).subscribe((data: any) => {
      //   console.log(data);
      //   if (data.status == 1) {
      //     setTimeout(function () {
      //     }, 2000);
      //     this.coursesService.navigateToThanksPage();
      //     this.profile = new Contact();
      //   }
      // })
    }
}
