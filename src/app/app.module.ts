import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SimpleStoreComponent } from './simple-store/simple-store.component';
import { StoreModule, Store } from '@ngrx/store';
import { DispatcherToken } from './shared/tokens/dispatch-token';
import { RxjsWithLatestFromComponent } from './rxjs-with-latest-from/rxjs-with-latest-from.component';
import { SimpleStoreModule } from './simple-store/simple-store.module';
import { RxjsWithLatestFromModule } from './rxjs-with-latest-from/rxjs-with-latest-from.module';
import { MvvmPatternModule } from './mvvm-pattern/mvvm-pattern.module';
import { MvvmPatternComponent } from './mvvm-pattern/mvvm-pattern.component';
import { RxjsCombineLatestComponent } from './rxjs-combine-latest/rxjs-combine-latest.component';
import { RxjsCombineLatestModule } from './rxjs-combine-latest/rxjs-combine-latest.module';
import { NgrxEffectsComponent } from './ngrx-effects/ngrx-effects.component';
import { NgrxEffectsModule } from './ngrx-effects/ngrx-effects.module';
import { BehaviorExampleModule } from './behavior-example/behavior-example.module';
import { BehaviorExampleComponent } from './behavior-example/behavior-example/behavior-example.component';
import { FetchDataFlowComponent } from './fetch-data-flow/fetch-data-flow.component';
import { FetchDataFlowModule } from './fetch-data-flow/fetch-data-flow.module';
import { EffectsModule } from '@ngrx/effects';


const routes: Routes = [
  { path: 'simple-store', component: SimpleStoreComponent },
  { path: 'rxjs-with-latest-from', component: RxjsWithLatestFromComponent },
  { path: 'rxjs-combine-latest', component: RxjsCombineLatestComponent },
  { path: 'mvvm-pattern', component: MvvmPatternComponent },
  { path: 'ngrx-effects', component: NgrxEffectsComponent },
  { path: 'behavior-example', component: BehaviorExampleComponent },
  { path: 'fetch-data-flow', component: FetchDataFlowComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MvvmPatternModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    SimpleStoreModule,
    RxjsCombineLatestModule,
    RxjsWithLatestFromModule,
    NgrxEffectsModule,
    BehaviorExampleModule,
    FetchDataFlowModule,
    EffectsModule.forRoot([]),
  ],
  providers: [
    {
      provide: DispatcherToken,
      useFactory: store => action => store.dispatch(action),
      deps: [Store]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
