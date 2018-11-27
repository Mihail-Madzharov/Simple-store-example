import { Action } from '@ngrx/store';

export const WithLatestFromActionTypes = {
  UpdateFirstValueAction: '[WithLatestFrom] Get value from first input',
  UpdateSecondValueAction: '[WithLatestFrom] Get value from second input'
};

export class UpdateFirstValueAction implements Action {
  readonly type = WithLatestFromActionTypes.UpdateFirstValueAction;
  constructor(public payload: string) { }
}

export class UpdateSecondValueAction implements Action {
  readonly type = WithLatestFromActionTypes.UpdateSecondValueAction;
  constructor(public payload: string) { }
}
