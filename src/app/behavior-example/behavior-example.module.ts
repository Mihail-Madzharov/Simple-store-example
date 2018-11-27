import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorExampleComponent } from './behavior-example/behavior-example.component';
import { InputValueToken } from './tokens';
import { select, Store, StoreModule } from '@ngrx/store';
import { behaviorInputSelector } from './store/behavior-example.selector';
import { BehaviorExampleState } from './store/behavior-example.state';
import { behaviorReducers } from './store/behavior-example.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(BehaviorExampleState.stateName, behaviorReducers)
  ],
  declarations: [BehaviorExampleComponent],
  providers: [
    {
      provide: InputValueToken,
      useFactory: store => store.pipe(select(behaviorInputSelector)),
      deps: [Store]
    }
  ]
})
export class BehaviorExampleModule { }
