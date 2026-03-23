import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../service/task.service';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './task-edit.component.html'
})
export class TaskEditComponent {

  task!: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.parent?.snapshot.paramMap.get('id'));
    this.task = this.taskService.getTask(id)!;
  }

  updateTask() {
    this.taskService.updateTask(this.task);
    this.router.navigate(['/']);
  }
}