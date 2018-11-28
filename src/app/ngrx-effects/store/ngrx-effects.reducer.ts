import { Action } from '@ngrx/store';

import { UpdateNgrxInputValueAction, UpdateNgrxLabelBackgroundColor, NgrxEffectActions } from './ngrx-effects.actions';
import { NgrxEffectsState } from './ngrx-effects.state';
import { ActionsMap } from '../../shared/models/reducer.model';


const initialState: NgrxEffectsState = {
    inputValue: '',
    backgroundColor: ''
};


function updateInputValue(state: NgrxEffectsState, action: UpdateNgrxInputValueAction) {
    const newState = Object.assign({}, state);
    newState.inputValue = action.payload;
    return newState;
}

function updateBackgroundColor(state: NgrxEffectsState, action: UpdateNgrxLabelBackgroundColor) {
    const newState = Object.assign({}, state);
    newState.backgroundColor = action.payload;
    return newState;
}

const actionsMap: ActionsMap<NgrxEffectsState> = {
    [NgrxEffectActions.UpdateNgrxInputValue]: updateInputValue,
    [NgrxEffectActions.UpdateLabelBackgroundColor]: updateBackgroundColor
};

export function ngrxEffectsReducers(state = initialState, action: Action) {
    return actionsMap[action.type] != null ? actionsMap[action.type](state, action) : state;
}
