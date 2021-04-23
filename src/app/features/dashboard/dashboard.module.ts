import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LastTodosComponent } from './last-todos/last-todos.component';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { ListComponent } from './list/list.component';
import { ListService } from './services/list.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
    ]),
    StoreModule.forFeature('list', listReducer),
    EffectsModule.forFeature([ListEffects]),
  ],
  declarations: [
    DashboardComponent,
    LastTodosComponent,
    CreateTodoComponent,
    ListComponent,
    ListItemComponent,
  ],
  providers: [
    ListService,
  ],
})
export class DashboardModule {
}
function listReducer(arg0: string, listReducer: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

