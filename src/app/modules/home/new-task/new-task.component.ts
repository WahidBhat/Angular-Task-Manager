import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
taskName:string="";
placeholder:string="Enter task name";
reminder:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
