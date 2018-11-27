import { WithLatestFromState } from './rxjs-with-latest-from.state';
import { ActionsMap } from 'src/app/shared/models/reducer.model';
import { WithLatestFromActionTypes, UpdateFirstValueAction, UpdateSecondValueAction } from './rxjs-with-latest-from.actions';
import { Action } from '@ngrx/store';

const initialState: WithLatestFromState = {
  firstValue: null,
  secondValue: null
};

function getFirstValue(state: WithLatestFromState, action: UpdateFirstValueAction) {
  console.log(action.payload);
  const newState = Object.assign({}, state);
  newState.firstValue = action.payload;
  return newState;

}

function getSecondValue(state: WithLatestFromState, action: UpdateSecondValueAction) {
  console.log(action.payload);
  const newState = Object.assign({}, state);
  newState.secondValue = action.payload;
  return newState;
}

const mapRxJSOperatorReducers: ActionsMap<WithLatestFromState> = {
  [WithLatestFromActionTypes.UpdateFirstValueAction]: getFirstValue,
  [WithLatestFromActionTypes.UpdateSecondValueAction]: getSecondValue,
};

export function rxjsOperatorsReducer(state: WithLatestFromState = initialState, action: Action) {
  return mapRxJSOperatorReducers[action.type] != null ?
  mapRxJSOperatorReducers[action.type](state, action) :
  state;
}
