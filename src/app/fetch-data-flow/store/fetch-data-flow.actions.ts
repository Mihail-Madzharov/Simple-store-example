import { Action } from '@ngrx/store';
import { SearchWikiModel } from '../search-wiki.model';

export const FetchDataFlowActionTypes = {
  UpdateInputValue: '[FetchDataFlow] This will receive input value and save it in store',
  SaveResponse: '[FetchDataFlow] This will save response from our service',
  HandleError: '[FetchDataFlow] This will handle error response'
};

export class UpdateInputValueAction implements Action {
  readonly type: string = FetchDataFlowActionTypes.UpdateInputValue;
  constructor(public payload: string) { }
}

export class SaveResponseAction implements Action {
  readonly type: string = FetchDataFlowActionTypes.SaveResponse;
  constructor(public payload: SearchWikiModel) { }
}
export class HandleErrorAction implements Action {
  readonly type: string = FetchDataFlowActionTypes.HandleError;
  constructor(public payload: any) { }
}
