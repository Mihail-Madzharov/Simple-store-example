import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SimpleStoreComponent } from './simple-store/simple-store.component';
import { StoreModule, Store } from '@ngrx/store';
import { DispatcherToken } from './shared/tokens/dispatch-token';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
<<<<<<< Updated upstream
import { SimpleStoreModule } from './simple-store/simple-store.module';
import { RxjsOperatorsModule } from './rxjs-operators/rxjs-operators.module';
=======
import { FirstValueToken, SecondValueToken } from './rxjs-operators/tokens';
import { getFirstValue, getSecondValue } from './rxjs-operators/store/rxjs-operators.selector';
import { MvvmPatternModule } from './mvvm-pattern/mvvm-pattern.module';
import { MvvmPatternComponent } from './mvvm-pattern/mvvm-pattern/mvvm-pattern.component';
>>>>>>> Stashed changes


const routes: Routes = [
  { path: 'simple-store', component: SimpleStoreComponent },
  { path: 'rxjs-operators', component: RxjsOperatorsComponent },
  { path: 'mvvm-pattern', component: MvvmPatternComponent },
];

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< Updated upstream
=======
    SimpleStoreComponent,
    RxjsOperatorsComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    MvvmPatternModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    SimpleStoreModule,
    RxjsOperatorsModule
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
