import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsCombineLatestComponent } from './rxjs-combine-latest.component';
import { StoreModule, select, Store } from '@ngrx/store';
import { FirstInputToken, SecondInputToken } from './tokens';
import { RxjsCombineLatestState } from './store/rxjs-combine-latest.state';
import { rxjsCombineLatestReducer } from './store/rxjs-combine-latest.reducers';
import { firstInputSelector, secondInputSelector } from './store/rxjs.combine-latest.selectors';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(RxjsCombineLatestState.stateName, rxjsCombineLatestReducer)
  ],
  declarations: [
    RxjsCombineLatestComponent,
  ],
  providers:
  [
    {
      provide: FirstInputToken,
      useFactory: store => store.pipe(select(firstInputSelector)),
      deps: [Store]
    },
    {
      provide: SecondInputToken,
      useFactory: store => store.pipe(select(secondInputSelector)),
      deps: [Store]
    }
  ]
})
export class RxjsCombineLatestModule { }
