import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { NgrxEffectsComponent } from './ngrx-effects.component';
import { ngrxInputValue, backgroundColor } from './store/ngrx-effects.selector';
import { NgrxInputValueToken, LabelBackgroundColorToken } from './token';
import { NgrxEffectsState } from './store/ngrx-effects.state';
import { ngrxEffectsReducers } from './store/ngrx-effects.reducer';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(NgrxEffectsState.stateName, ngrxEffectsReducers)
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
