import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
  providers: [TaskService]
})
export class NewTaskComponent implements OnInit {
  task: Task = {
    id: 1,
    name: "",
    reminder: false
  };
  visible: boolean = false;
  isEdit: boolean = false;

  @Output('task-added') taskAdded: EventEmitter<Task> = new EventEmitter<Task>();
  @Output('task-updated') taskUpdated: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  resetNewTask(count: number) {
    this.task = {
      id: count + 1,
      name: "",
      reminder: false
    };
    this.isEdit = false;
  }

  editTask(task: Task) {
    this.task = task;
    this.visible = true;
    this.isEdit = true;
  }

  toggleNewTask() {
    this.visible = !this.visible;
  }

  onSubmit() {
    if (this.isEdit) {
      this.taskService.updateTask(this.task).subscribe((response) => {
        this.taskUpdated.emit(this.task);
        this.isEdit = false;
      });
    } else {
      this.taskService.saveTask(this.task).subscribe((response) => {
        this.taskAdded.emit(this.task);
        this.isEdit = false;
      });
    }

  }
}
