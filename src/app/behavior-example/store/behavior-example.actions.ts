import { Action } from '@ngrx/store';

export const BehaviorExampleActionTypes = {
  UpdateInput: '[Behavior] This will update input value',
  GetInputValue: '[Behavior] This will get input value'
};

export class UpdateInputAction implements Action {
  readonly type: string = BehaviorExampleActionTypes.UpdateInput;
  constructor(public payload: string) { }
}

export class GetInputValueAction implements Action {
  readonly type: string = BehaviorExampleActionTypes.GetInputValue;
  constructor(public payload: string) { }
}
