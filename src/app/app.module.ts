import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppComponent } from './containers/app/app.component';
import { routes } from './app.routes';
import { TaskListComponent } from './containers/task-list/task-list.component';
import { TaskAddComponent } from './containers/task-add/task-add.component';

import { ComponentsModule } from './components';
import { reducer } from './reducers';

@NgModule({
  declarations: [
    TaskAddComponent,
    AppComponent,
    TaskListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    ComponentsModule,
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
