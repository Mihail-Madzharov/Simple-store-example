import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { NgrxEffectsComponent } from './ngrx-effects.component';
import { ngrxInputValue, backgroundColor } from './store/ngrx-effects.selector';
import { NgrxInputValueToken, LabelBackgroundColorToken } from './token';
import { NgrxEffectsState } from './store/ngrx-effects.state';
import { ngrxEffectsReducers } from './store/ngrx-effects.reducer';
import { NgrxEffectsEffect } from './store/ngrx-effects.effects';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(NgrxEffectsState.stateName, ngrxEffectsReducers),
    EffectsModule.forFeature([NgrxEffectsEffect])
  ],
  providers: [{
    provide: NgrxInputValueToken, useFactory: (state) => state.select(ngrxInputValue),
    deps: [Store]
  },
  {
    provide: LabelBackgroundColorToken, useFactory: (state) => state.select(backgroundColor),
    deps: [Store]
  }],
  declarations: [NgrxEffectsComponent],
  exports: [NgrxEffectsComponent]
})
export class NgrxEffectsModule { }
