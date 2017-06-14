import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@angular/material';


import { SideNavComponent } from './sidenav/sidenav.component';
import { TaskNavItemComponent } from './nav-item/nav-item.component';
import { TaskToolBarComponent } from './task-toolbar/task-toolbar.component';
import { TaskListComponent } from './task-list/task-list.component';
export const COMPONENTS = [SideNavComponent, TaskNavItemComponent, TaskToolBarComponent, TaskListComponent];

/**
 * A module for the dumb components.
 * 
 * @export
 * @class ComponentsModule
 */
@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,
       
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class ComponentsModule { }