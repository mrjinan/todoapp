import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

/**
 * 
 * 
 * @export
 * @class SideNavComponent
 */
@Component({
    selector: 'task-sidenav',        
    templateUrl: './sidenav.component.html'
})
export class SideNavComponent {
    /**
     * Input parameter for toggling the side nav.
     * 
     * 
     * @memberof SideNavComponent
     */
    @Input() opened = false;

}