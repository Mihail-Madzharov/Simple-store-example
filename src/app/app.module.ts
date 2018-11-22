import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SimpleStoreComponent } from './simple-store/simple-store.component';
import { StoreModule, Store, select } from '@ngrx/store';
import { SimpleStoreState } from './simple-store/store/simple-store.state';
import { simpleStoreReducer } from './simple-store/store/simple-store.reducers';
import { DispatcherToken } from './shared/tokens/dispatch-token';
import { InputValueToken } from './simple-store/tokens';
import { inputValueSelector } from './simple-store/store/simple-store.selector';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import { FirstValueToken, SecondValueToken } from './rxjs-operators/tokens';
import { getFirstValue, getSecondValue } from './rxjs-operators/store/rxjs-operators.selector';


const routes: Routes = [
  { path: 'simple-store', component: SimpleStoreComponent },
  { path: 'rxjs-operators', component: RxjsOperatorsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleStoreComponent,
    RxjsOperatorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreModule.forFeature(SimpleStoreState.stateName, simpleStoreReducer)
  ],
  providers: [
    {
      provide: DispatcherToken,
      useFactory: store => action => store.dispatch(action),
      deps: [Store]
    },
    {
      provide: InputValueToken,
      useFactory: store => store.pipe(select(inputValueSelector)),
      deps: [Store]
    },
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
