import { Action } from '@ngrx/store';

export const SimpleStoreActionTypes = {
  SendInputValue : '[SIMPLE-STORE] This will send input value'
};

export class SendInputValueAction implements Action {
  readonly type: string = SimpleStoreActionTypes.SendInputValue;
  constructor(public payload: string) { }
}


