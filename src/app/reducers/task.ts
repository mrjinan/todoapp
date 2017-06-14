import { ActionReducer, combineReducers } from '@ngrx/store';

import * as tasks from './../actions/task';
import { Task } from './../models/task';

export interface State {
    tasks: Task[]
}

export const initialState: State = {
    tasks: []
}
export function reducer(state = initialState, action: tasks.AddAction | tasks.RemoveAction | tasks.LoadAction): State {
    switch (action.type) {
        case tasks.ADD_TASK: return {
            tasks: [Object.assign({}, action.payLoad), ...state.tasks]
        }
        case tasks.LOAD_TASKS: return {
            tasks: [...state.tasks, ...action.payLoad]
        }
        case tasks.REMOVE_TASK:
            let taskIndex = state.tasks.indexOf(action.payLoad);
            return {
                tasks: [...state.tasks.slice(0, taskIndex),
                Object.assign({}, state.tasks[taskIndex], { completed: true }),
                ...state.tasks.slice(taskIndex + 1)
                ]
            }
        default: return state;
    }
}

export const getTasks = (state: State) => {
    return state.tasks;
}