import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rxjsOperatorsReducer } from './store/rxjs-with-latest-from.reducer';
import { WithLatestFromState } from './store/rxjs-with-latest-from.state';
import { StoreModule, select, Store } from '@ngrx/store';
import { RxjsWithLatestFromComponent } from './rxjs-with-latest-from.component';
import { FirstValueToken, SecondValueToken } from './tokens';
import { getFirstValue, getSecondValue } from './store/rxjs-with-latest-from.selector';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(WithLatestFromState.stateName, rxjsOperatorsReducer)
  ],
  declarations: [RxjsWithLatestFromComponent],
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
export class RxjsWithLatestFromModule { }
