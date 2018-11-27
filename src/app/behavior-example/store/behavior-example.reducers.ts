import { ActionsMap } from 'src/app/shared/models/reducer.model';
import { BehaviorExampleState } from './behavior-example.state';
import { BehaviorExampleActionTypes, UpdateInputAction } from './behavior-example.actions';
import { Action } from '@ngrx/store';

const initialState: BehaviorExampleState = {
  inputValue: null
};

function updateInput(state: BehaviorExampleState, action: UpdateInputAction): BehaviorExampleState {
  const newState = Object.assign({}, state);
  newState.inputValue = action.payload;
  return newState;
}


const mapBehaviorReducers: ActionsMap<BehaviorExampleState> = {
  [BehaviorExampleActionTypes.UpdateInput]: updateInput
};

export function behaviorReducers(state: BehaviorExampleState = initialState, action: Action) {
  return mapBehaviorReducers[action.type] != null ?
    mapBehaviorReducers[action.type](state, action) :
    state;
}
