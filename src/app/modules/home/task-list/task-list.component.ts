import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [TaskService]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  activeRow: number = 99999;

  @Output('total-tasks') totalTasks: EventEmitter<number> = new EventEmitter<number>();
  @Output('edit-task') editTaskEvent: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.refreshTaskList();
  }
  
  refreshTaskList() {
    this.taskService.getTasks().subscribe((response) => {
      this.tasks = response;

      let ascTasks = response.sort((first, second) => 0 - (first.id < second.id ? 1 : -1));

      this.totalTasks.emit(ascTasks[ascTasks.length - 1].id);
    });

  }

  editTask(task: Task) {
    this.editTaskEvent.emit(task);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe((response) => {
      this.refreshTaskList();
    });

  }
}
