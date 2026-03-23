import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TaskService } from '../../service/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {

    this.tasks = this.taskService.getTasks();
  }


  viewTask(id: number) {
    this.router.navigate(['/task', id]);
  }

 
  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks(); 
  }
}