import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import{HttpClientModule} from '@angular/common/http';
import {HeaderModule} from './shared/header/header.module';
import {FooterModule} from './shared/footer/footer.module';
import {HomeModule} from './modules/home/home.module';
import {ContactUsModule} from './modules/contact-us/contact-us.module'


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './modules/home/home.component';
import { ContactFormComponent } from './modules/contact-us/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'contactus', component: ContactFormComponent},
    ]),
    HttpClientModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
