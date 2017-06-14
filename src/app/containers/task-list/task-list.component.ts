import { Component, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as rootReducer from './../../reducers';
import * as taskActions from './../../actions/task';
import { Task } from './../../models/task';
import { TaskListService } from './task-list.service';

@Component({
  selector: 'task-list',
  templateUrl: 'task-list.component.html',
  providers: [TaskListService],
  styles: [`

    :host {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    md-card {
      width: 200px;
      margin: 15px;
    }
    md-card-title-group {
      margin-left: 0;
    }
    img {
      width: 60px;
      min-width: 60px;
      margin-left: 5px;
    }
    md-card-content {
      margin: 15px 0 50px;
    }
    md-card-actions {
      margin: 25px 0 0 !important;
    }
    md-card-footer {
      padding: 0 25px 25px;
      position: relative;
    }

     `]
})
export class TaskListComponent {
  private taskList: Observable<Task[]>;

  /**
   * Creates an instance of TaskListComponent.
   * @param {Store<rootReducer.State>} store 
   * @param {TaskListService} taskListService 
   * 
   * @memberof TaskListComponent
   */
  constructor(private store: Store<rootReducer.State>, private taskListService: TaskListService) { }

  /**
   * 
   * 
   * 
   * @memberof TaskListComponent
   */
  ngOnInit() {

    this.taskList = this.store.select(rootReducer.getTasks)


    this.taskListService.get()
      .subscribe(res => {
        this.store.dispatch(new taskActions.LoadAction(res));
      });
  }

  done(task: Task) {
    this.store.dispatch(new taskActions.RemoveAction(task));
  }
}