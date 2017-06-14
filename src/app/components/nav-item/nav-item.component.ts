import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

/**
 * 
 * 
 * @export
 * @class TaskNavItemComponent
 */
@Component({
    selector: 'task-nav-item',
    templateUrl: './nav-item.component.html',

})
export class TaskNavItemComponent {
    @Input() icon;
    @Input() url;
}