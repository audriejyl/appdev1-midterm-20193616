import { Component } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-add.component.html'
})
export class TaskAddComponent {

  task: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
    priority: 'Low'    
  };

  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  addTask() {
    this.taskService.addTask(this.task);
    this.router.navigate(['/']);
  }
}