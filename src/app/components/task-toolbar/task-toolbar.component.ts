import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

/**
 * The toolbar.
 * 
 * @export
 * @class TaskToolBarComponent
 */
@Component({
    templateUrl: './task-toolbar.component.html',
    selector: 'task-toolbar'
})
export class TaskToolBarComponent {
    @Output() openMenu = new EventEmitter();
}