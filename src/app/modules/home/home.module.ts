import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule,MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import{MatButtonModule} from '@angular/material/button';
import{FormsModule} from '@angular/forms';


import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import {HomeComponent} from './home.component';
import { TaskService } from 'src/app/services/task.service';



@NgModule({
  declarations: [
    NewTaskComponent,
    TaskListComponent,
    HomeComponent
  ],
  exports:[HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers:[
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    TaskService
  ]
})
export class HomeModule { }
