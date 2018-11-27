import { Action } from '@ngrx/store';

export const CombineLatestActionTypes = {
  UpdateFirstValue: '[CombineLatest] This will update value from first input',
  UpdateSecondValue: '[CombineLatest] This will update value from second input'
};

export class UpdateFirstValueAction implements Action {
  readonly type: string = CombineLatestActionTypes.UpdateFirstValue;
  constructor(public payload: string) { }
}

export class UpdateSecondValueAction implements Action {
  readonly type: string = CombineLatestActionTypes.UpdateSecondValue;
  constructor(public payload: string) { }
}
