import { BrowserModule,BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteModule } from '../app/website/website.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/website/header/header.component';
import { FooterComponent } from './website/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './apex/menu/menu.component';
import { CallusComponent } from './website/callus/callus.component';
import { CommonService } from './service/common.service';
import {FixedsocialiconsComponent} from './website/fixedsocialicons/fixedsocialicons.component'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    CallusComponent,
    FixedsocialiconsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'digital-lync' }),
    WebsiteModule,
    CommonModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    HttpClientModule,
    BrowserTransferStateModule,
    //appRoutes,
    //NgxCarouselModule
    //SimpleSmoothScrollModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
