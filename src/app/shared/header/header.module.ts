import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderContainerComponent} from './header-container/header-container.component';
import {HeaderMenuComponent} from './header-menu/header-menu.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { ContactFormComponent } from 'src/app/modules/contact-us/contact-form/contact-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderContainerComponent,
    HeaderMenuComponent
  ],
  exports:[
    HeaderContainerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild([
      {path: 'home', component: HomeComponent},
      {path: 'contactus', component: ContactFormComponent},
    ])
  ]
})
export class HeaderModule { }
