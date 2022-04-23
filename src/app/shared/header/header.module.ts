import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderContainerComponent} from './header-container/header-container.component';
import {HeaderMenuComponent} from './header-menu/header-menu.component';



@NgModule({
  declarations: [
    HeaderContainerComponent,
    HeaderMenuComponent
  ],
  exports:[
    HeaderContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
