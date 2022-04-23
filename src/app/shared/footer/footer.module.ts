import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FooterItemComponent } from './footer-item/footer-item.component';



@NgModule({
  declarations: [
    FooterComponent,
    FooterItemComponent
  ],
  exports: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
