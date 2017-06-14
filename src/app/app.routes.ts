import { Routes } from '@angular/router';

import { TaskListComponent } from './containers/task-list/task-list.component';
import { TaskAddComponent } from './containers/task-add/task-add.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full' 
    },
    {
        path: 'add',
        component: TaskAddComponent
    },
    
    { path: 'tasks', component: TaskListComponent },
];