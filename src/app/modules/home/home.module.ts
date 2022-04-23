import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import {HomeComponent} from './home.component';



@NgModule({
  declarations: [
    NewTaskComponent,
    TaskListComponent,
    HomeComponent
  ],
  exports:[HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
