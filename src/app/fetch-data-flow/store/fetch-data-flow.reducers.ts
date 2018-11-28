import { Action } from '@ngrx/store';

import { FetchDataFlowActionTypes, SaveResponseAction } from './fetch-data-flow.actions';
import { ActionsMap } from 'src/app/shared/models/reducer.model';
import { FetchDataFlowState } from './fetch-data-flow.state';

const initialState: FetchDataFlowState = {
  response: null
};

function saveResponse(state: FetchDataFlowState, action: SaveResponseAction): FetchDataFlowState {
  const newState = Object.assign({}, state);
  newState.response = action.payload;
  return newState;
}

const mapFetchDataFlowReducers: ActionsMap<FetchDataFlowState> = {
  [FetchDataFlowActionTypes.SaveResponse]: saveResponse
};

export function fetchDataFlowReducers(state: FetchDataFlowState = initialState, action: Action) {
  return mapFetchDataFlowReducers[action.type] != null ?
    mapFetchDataFlowReducers[action.type](state, action) :
    state;
}
