import { Routes } from '@angular/router';
import { TaskListComponent } from './components/TaskListComponent/task-list.component';
import { TaskDetailComponent } from './components/TaskDetailComponent/task-detail.component';
import { TaskInfoComponent } from './components/TaskInfoComponent/task-info.component';
import { TaskEditComponent } from './components/TaskEditComponent/task-edit.component';
import { TaskAddComponent } from './components/TaskAddComponent/task-add.component';

export const routes: Routes = [
  { path: '', component: TaskListComponent },

  {
    path: 'task/:id',
    component: TaskDetailComponent,
    children: [
      { path: 'info', component: TaskInfoComponent },
      { path: 'edit', component: TaskEditComponent }
    ]
  },

  { path: 'add', component: TaskAddComponent }
];