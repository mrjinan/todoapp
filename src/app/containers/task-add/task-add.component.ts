import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Store } from '@ngrx/store';
import * as rootReducer from './../../reducers';
import * as taskActions from './../../actions/task';
import { Task } from './../../models/task';


@Component({
    templateUrl: './task-add.component.html',

    styles: [`
    md-card-title,
    md-card-content {
      display: flex;
      justify-content: center;
    }

    input {
      width: 300px;
    }`]
})
export class TaskAddComponent {
    task: string = '';
    taskForm: FormGroup;

    constructor(private fb: FormBuilder, private store: Store<rootReducer.State>) { }

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.taskForm = this.fb.group({
            taskName: ''
        });
    }

    onSubmit() {
        if (this.taskForm.valid) {
            console.log(this.taskForm.value.taskName);

            let value = this.taskForm.value.taskName;
            this.store.dispatch(new taskActions.AddAction({
                completed: false,
                id: Math.floor((Math.random() * 100) + 1),
                title: value,
                userId: Math.floor((Math.random() * 100) + 1),
            }));

            this.taskForm.value.taskName = '';
        }
    }
}