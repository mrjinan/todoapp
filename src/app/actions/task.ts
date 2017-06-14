import { Action } from '@ngrx/store';
import { Task } from './../models/task';


export const ADD_TASK = '[TASK] ADD';
export const REMOVE_TASK = '[TASK] REMOVE';
export const LOAD_TASKS = '[TASK] LOAD';

/**
 * All actions are made of at least a type property and an optional payload.
 *
 */

/**
 * An action for adding the task.
 * 
 * @export
 * @class AddAction
 * @implements {Action}
 */
export class AddAction implements Action {
   
    /**
     * 
     * 
     * 
     * @memberof AddAction
     */
    readonly type = ADD_TASK;

    /**
     * Creates an instance of AddAction.
     * @param {Task} payLoad 
     * 
     * @memberof AddAction
     */
    constructor(public payLoad: Task) { }

}


/**
 * An action for removing a task.
 * 
 * @export
 * @class RemoveAction
 * @implements {Action}
 */
export class RemoveAction implements Action {
    
    /**
     * 
     * 
     * 
     * @memberof RemoveAction
     */
    readonly type = REMOVE_TASK;

    /**
     * Creates an instance of RemoveAction.
     * @param {Task} payLoad 
     * 
     * @memberof RemoveAction
     */
    constructor(public payLoad: Task) { }
}


/**
 * An action for loading the tasks.
 * 
 * @export
 * @class LoadAction
 * @implements {Action}
 */
export class LoadAction implements Action {

    /**
     * 
     * 
     * 
     * @memberof LoadAction
     */
    readonly type = LOAD_TASKS;

    /**
     * Creates an instance of LoadAction.
     * @param {Task[]} payLoad 
     * 
     * @memberof LoadAction
     */
    constructor(public payLoad: Task[]) { }
}

