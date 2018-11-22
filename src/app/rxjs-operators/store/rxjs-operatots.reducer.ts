import { RxJSOperatorsState } from './rxjs-operators.state';
import { ActionsMap } from 'src/app/shared/models/reducer.model';
import { RxjsOperatorsActionTypes, GetFirstValueAction, GetSecondValueAction } from './rxjs-operators.actions';
import { Action } from '@ngrx/store';

const initialState: RxJSOperatorsState = {
  firstValue: null,
  secondValue: null
};

function getFirstValue(state: RxJSOperatorsState, action: GetFirstValueAction) {
  const newState = Object.assign({}, state);
  newState.firstValue = action.payload;
  return newState;

}

function getSecondValue(state: RxJSOperatorsState, action: GetSecondValueAction) {
  const newState = Object.assign({}, state);
  newState.secondValue = action.payload;
  return newState;
}

const mapRxJSOperatorReducers: ActionsMap<RxJSOperatorsState> = {
  [RxjsOperatorsActionTypes.GetFirstValue]: getFirstValue,
  [RxjsOperatorsActionTypes.GetSecondValue]: getSecondValue,
};

export function rxjsOperatorsReducer(state: RxJSOperatorsState = initialState, action: Action) {
  return mapRxJSOperatorReducers[action.type] != null ?
  mapRxJSOperatorReducers[action.type](state, action) :
  state;
}
