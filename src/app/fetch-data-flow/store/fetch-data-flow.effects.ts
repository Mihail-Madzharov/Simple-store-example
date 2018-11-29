import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { SaveResponseAction, FetchDataFlowActionTypes, UpdateInputValueAction, HandleErrorAction } from './fetch-data-flow.actions';
import { switchMap, map, catchError, delay, mergeMap } from 'rxjs/operators';
import { FetchDataFlowService } from '../fetch-data-flow.service';
import { of } from 'rxjs';



@Injectable()
export class FetchDataFlowEffects {

  @Effect()
  getResponse$ = this.actions$
    .pipe(
      ofType<UpdateInputValueAction>(FetchDataFlowActionTypes.UpdateInputValue),
      switchMap(action => this.apiService$.fetchApi(action.payload)
        .pipe(
          // delay(5000),
          map((response) => {
            const [title, info] = response;
            return new SaveResponseAction({ title, info });
          }),
          catchError(err => {
            return of(new HandleErrorAction(err));
          })
        )
      ),
    );


  constructor(
    private actions$: Actions,
    private apiService$: FetchDataFlowService
  ) { }
}
