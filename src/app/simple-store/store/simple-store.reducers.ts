import { Action } from '@ngrx/store';

import { SimpleStoreActionTypes, SendInputValueAction } from './simple-store.actions';
import { ActionsMap } from 'src/app/shared/models/reducer.model';
import { SimpleStoreState } from './simple-store.state';

const initialState: SimpleStoreState = {
  inputValue: ''
};

// we are creating this pure function also known as reducer
// the purpose of the function is to take the old state
// and replace it with the new one
function sendInputValue(state: SimpleStoreState, action: SendInputValueAction) {
  const newState = Object.assign({}, state);
  newState.inputValue = action.payload;
  return newState;
}

// we are creating this map so we would
// find quicker and easier the action that was dispatched
const mapSimpleStoreReducers: ActionsMap<SimpleStoreState> = {
  [SimpleStoreActionTypes.SendInputValue]: sendInputValue
};

// the first thing that subscribe to the store is the reducer
// so it will be the first thing to emit after the action is dispatched
// the reducer expect initial value because it is a BehaviorSubject
// https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/behaviorsubject.md
export function simpleStoreReducer(state: SimpleStoreState = initialState, action: Action) {
  // we are checking if the action exist and if it exists
  // we call the function mapped to it otherwise we will return
  // the old state
  return mapSimpleStoreReducers[action.type] != null ?
    mapSimpleStoreReducers[action.type](state, action) :
    state;
}
