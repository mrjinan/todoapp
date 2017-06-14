import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Task } from './../../models/task';
/**
 * 
 * 
 * @export
 * @class Task List Component
 */
@Component({
    selector: 'my-task-list',        
    templateUrl: './task-list.component.html'
})
export class TaskListComponent {
    /**
     * Input parameter for task list
     * 
     * 
     * @memberof task list
     */
    @Input() tasks: Task[]

}