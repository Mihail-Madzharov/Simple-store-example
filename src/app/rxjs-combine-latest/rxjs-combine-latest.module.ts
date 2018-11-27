import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsCombineLatestComponent } from './rxjs-combine-latest/rxjs-combine-latest.component';
import { StoreModule, select, Store } from '@ngrx/store';
import { RxjsCombineLatestState } from './rxjs-combine-latest/store/rxjs-combine-latest.state';
import { rxjsCombineLatestReducer } from './rxjs-combine-latest/store/rxjs-combine-latest.reducers';
import { FirstInputToken, SecondInputToken } from './rxjs-combine-latest/tokens';
import { firstInputSelector, secondInputSelector } from './rxjs-combine-latest/store/rxjs.combine-latest.selectors';

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
