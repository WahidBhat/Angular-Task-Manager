import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = "http://localhost:3000/";
  tasks: Task[] = [];
  constructor(private httpClient: HttpClient) { }

  saveTask(task: Task):Observable<Task> {
    return this.httpClient.post<Task>(this.baseUrl+"tasks",task);
  }

  updateTask(task: Task):Observable<Task> {
    return this.httpClient.put<Task>(this.baseUrl+"tasks/"+task.id,task);
  }

  getTasks():Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.baseUrl + "tasks");
  }

  deleteTask(id:number):Observable<number>{
    return this.httpClient.delete<number>(this.baseUrl+"tasks/"+id);
  }
}
