import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rxjsOperatorsReducer } from './store/rxjs-operators.reducer';
import { RxJSOperatorsState } from './store/rxjs-operators.state';
import { StoreModule, select, Store } from '@ngrx/store';
import { RxjsOperatorsComponent } from './rxjs-operators.component';
import { FirstValueToken, SecondValueToken } from './tokens';
import { getFirstValue, getSecondValue } from './store/rxjs-operators.selector';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(RxJSOperatorsState.stateName, rxjsOperatorsReducer)
  ],
  declarations: [RxjsOperatorsComponent],
  providers: [
    {
      provide: FirstValueToken,
      useFactory: store => store.pipe(select(getFirstValue)),
      deps: [Store]
    },
    {
      provide: SecondValueToken,
      useFactory: store => store.pipe(select(getSecondValue)),
      deps: [Store]
    }
  ]
})
export class RxjsOperatorsModule { }
