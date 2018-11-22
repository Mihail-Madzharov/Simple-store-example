import { Action } from '@ngrx/store';

export const RxjsOperatorsActionTypes = {
  UpdateFirstValueAction: '[RxJS Operators] Get value from first input',
  UpdateSecondValueAction: '[RxJS Operators] Get value from second input'
};

export class UpdateFirstValueAction implements Action {
  readonly type = RxjsOperatorsActionTypes.UpdateFirstValueAction;
  constructor(public payload: string) { }
}

export class UpdateSecondValueAction implements Action {
  readonly type = RxjsOperatorsActionTypes.UpdateSecondValueAction;
  constructor(public payload: string) { }
}
