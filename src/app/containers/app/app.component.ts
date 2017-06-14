import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as rootReducer from './../../reducers';
import * as layoutActions from './../../actions/layout';
import * as taskActions from './../../actions/task';

@Component({
    templateUrl: './app.component.html',
    selector: 'todo-app',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    /**
     * 
     * 
     * 
     * @memberof AppComponent
     */
    leftNavOpened: boolean;

    constructor(private store: Store<rootReducer.State>) {
        this.store.select(rootReducer.getShowSidenav).subscribe(result => {
            debugger;
            this.leftNavOpened = result;

        });
    }



    /**
     * 
     * 
     * 
     * @memberof AppComponent
     */
    openMenu() {
        this.store.dispatch(new layoutActions.OpenSideNavAction());
        window.event.stopPropagation();
        this.store.dispatch(new layoutActions.OpenSideNavAction());
    }


    /**
     * 
     * 
     * @param {any} event 
     * 
     * @memberof AppComponent
     */
    @HostListener('document:click', ['$event'])
    hideMenu(event) {
        if (this.leftNavOpened) {
            this.store.dispatch(new layoutActions.CloseSideNavAction());
        }
    }
}