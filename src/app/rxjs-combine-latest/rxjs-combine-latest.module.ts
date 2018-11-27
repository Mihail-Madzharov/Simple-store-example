import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsCombineLatestComponent } from './rxjs-combine-latest/rxjs-combine-latest.component';
import { StoreModule } from '@ngrx/store';
import { RxjsCombineLatestState } from './rxjs-combine-latest/store/rxjs-combine-latest.state';
import { rxjsCombineLatestReducer } from './rxjs-combine-latest/store/rxjs-combine-latest.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(RxjsCombineLatestState.stateName, rxjsCombineLatestReducer)
  ],
  declarations: [
    RxjsCombineLatestComponent,

  ]
})
export class RxjsCombineLatestModule { }
