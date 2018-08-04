import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import{WINDOW_PROVIDERS} from '../service/window.service';

import {BannerComponent} from './banner/banner.component';


import { ContactusComponent } from './contactus/contactus.component';



import {DummyComponent } from './dummy/dummy.component'

import {HeaderService} from './header/header.service';

import { ReviewsComponent } from './reviews/reviews.component';
import { AlternateViewComponent } from './alternate-view/alternate-view.component';
import { ServiceComponent } from './service/service.component';
import { HowWeDoComponent } from './how-we-do/how-we-do.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import {BlogpageComponent} from './blogpage/blogpage.component'
import { SubBlogComponent } from './blogpage/sub-blog/sub-blog.component';
import { HomeblogComponent } from './homeblog/homeblog.component';
// import { CallusComponent } from './callus/callus.component';

export const routes: Routes = [
  { path: '', component: DummyComponent},
  { path: 'Home', component: DummyComponent},
  {path:'services', component:ServiceComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog/:1',component:SubBlogComponent},
  {path:'about', component:AboutComponent},

];

@NgModule({
  declarations: [  
   
    ContactusComponent,
    DummyComponent,
    ReviewsComponent,
    AlternateViewComponent,
    BannerComponent,
    ServiceComponent,
    HowWeDoComponent,
    AboutComponent,
    BlogComponent,
    SubBlogComponent,
    HomeblogComponent,
    BlogpageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule.withServerTransition({ appId: 'digital-lync' }),
    BrowserTransferStateModule,
    RouterModule.forRoot(routes),
    SharedModule.forRoot(),
  ],
  
  exports: [RouterModule],
  providers: [WINDOW_PROVIDERS,HeaderService]
})
export class WebsiteModule { }
