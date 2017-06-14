import { ActionReducer, combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';

import * as layoutReducers from './layout';
import * as taskReducers from './task';
export interface State {
    layout: layoutReducers.State,
    tasks: taskReducers.State
}

const reducers = {
    layout: layoutReducers.reducer,
    tasks:taskReducers.reducer
}

const combinedReducers: ActionReducer<State> = combineReducers(reducers);


/**
 * 
 * 
 * @export
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export function reducer(state: any, action: any) {
    return combinedReducers(state,action);
}


export const getLayoutState = (state: State) => state.layout;

export const getShowSidenav = createSelector(getLayoutState, layoutReducers.getShowSideNav);

export const getTaskState = (state: State) => state.tasks;

export const getTasks = createSelector(getTaskState, taskReducers.getTasks);
