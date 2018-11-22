import { RxJSOperatorsState } from './rxjs-operators.state';
import { ActionsMap } from 'src/app/shared/models/reducer.model';
import { RxjsOperatorsActionTypes, UpdateFirstValueAction, UpdateSecondValueAction } from './rxjs-operators.actions';
import { Action } from '@ngrx/store';

const initialState: RxJSOperatorsState = {
  firstValue: null,
  secondValue: null
};

function getFirstValue(state: RxJSOperatorsState, action: UpdateFirstValueAction) {
  console.log(action.payload);
  const newState = Object.assign({}, state);
  newState.firstValue = action.payload;
  return newState;

}

function getSecondValue(state: RxJSOperatorsState, action: UpdateSecondValueAction) {
  console.log(action.payload);
  const newState = Object.assign({}, state);
  newState.secondValue = action.payload;
  return newState;
}

const mapRxJSOperatorReducers: ActionsMap<RxJSOperatorsState> = {
  [RxjsOperatorsActionTypes.UpdateFirstValueAction]: getFirstValue,
  [RxjsOperatorsActionTypes.UpdateSecondValueAction]: getSecondValue,
};

export function rxjsOperatorsReducer(state: RxJSOperatorsState = initialState, action: Action) {
  return mapRxJSOperatorReducers[action.type] != null ?
  mapRxJSOperatorReducers[action.type](state, action) :
  state;
}
