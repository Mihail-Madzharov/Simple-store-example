import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FetchDataFlowComponent } from './fetch-data-flow.component';
import { StoreModule, select, Store } from '@ngrx/store';
import { FetchDataFlowState } from './store/fetch-data-flow.state';
import { fetchDataFlowReducers } from './store/fetch-data-flow.reducers';
import { EffectsModule } from '@ngrx/effects';
import { FetchDataFlowEffects } from './store/fetch-data-flow.effects';
import { ResponseToken } from './tokens';
import { responseSelector } from './store/fetch-data-flow.selectors';
import { ViewTextComponent } from './view-text/view-text.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(FetchDataFlowState.stateName, fetchDataFlowReducers),
    EffectsModule.forFeature([FetchDataFlowEffects])
  ],
  declarations: [FetchDataFlowComponent, ViewTextComponent],
  providers: [
    {
      provide: ResponseToken,
      useFactory: store => store.pipe(select(responseSelector)),
      deps: [Store]
    }
  ]
})
export class FetchDataFlowModule { }
