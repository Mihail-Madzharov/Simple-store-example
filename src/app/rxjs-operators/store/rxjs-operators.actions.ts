import { Action } from '@ngrx/store';

export const RxjsOperatorsActionTypes = {
  GetFirstValue: '[RxJS Operators] Get value from first input',
  GetSecondValue: '[RxJS Operators] Get value from second input'
};

export class GetFirstValueAction implements Action {
  readonly type = RxjsOperatorsActionTypes.GetFirstValue;
  constructor(public payload: string) { }
}

export class GetSecondValueAction implements Action {
  readonly type = RxjsOperatorsActionTypes.GetSecondValue;
  constructor(public payload: string) { }
}
