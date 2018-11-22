import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleStoreComponent } from './simple-store.component';
import { simpleStoreReducer } from './store/simple-store.reducers';
import { SimpleStoreState } from './store/simple-store.state';
import { StoreModule, Store, select } from '@ngrx/store';
import { InputValueToken } from './tokens';
import { inputValueSelector } from './store/simple-store.selector';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(SimpleStoreState.stateName, simpleStoreReducer),
  ],
  declarations: [SimpleStoreComponent],
  providers: [
    {
      provide: InputValueToken,
      useFactory: store => store.pipe(select(inputValueSelector)),
      deps: [Store]
    },
  ]
})
export class SimpleStoreModule { }
