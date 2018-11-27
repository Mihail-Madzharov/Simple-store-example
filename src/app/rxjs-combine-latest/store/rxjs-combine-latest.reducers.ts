import { UpdateFirstValueAction, CombineLatestActionTypes } from './rxjs-combine-latest.actions';
import { RxjsCombineLatestState } from './rxjs-combine-latest.state';
import { UpdateSecondValueAction } from 'src/app/rxjs-with-latest-from/store/rxjs-with-latest-from.actions';
import { ActionsMap } from 'src/app/shared/models/reducer.model';
import { Action } from '@ngrx/store';


const initialState: RxjsCombineLatestState = {
  firstInput: null,
  secondInput: null
};

function updateFirstValue(state: RxjsCombineLatestState, action: UpdateFirstValueAction) {
  const newState = Object.assign({}, state);
  newState.firstInput = action.payload;
  return newState;
}

function updateSecondValue(state: RxjsCombineLatestState, action: UpdateSecondValueAction) {
  const newState = Object.assign({}, state);
  newState.secondInput = action.payload;
  return newState;
}

const mapCombineLatestReducers: ActionsMap<RxjsCombineLatestState> = {
  [CombineLatestActionTypes.UpdateFirstValue]: updateFirstValue,
  [CombineLatestActionTypes.UpdateSecondValue]: updateSecondValue
};

export function rxjsCombineLatestReducer(state: RxjsCombineLatestState = initialState, action: Action) {
  return mapCombineLatestReducers[action.type] != null ?
    mapCombineLatestReducers[action.type](state, action) :
    state;
}

