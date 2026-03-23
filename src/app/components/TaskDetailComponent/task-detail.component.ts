import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [RouterModule], 
  templateUrl: './task-detail.component.html',
})
export class TaskDetailComponent {}