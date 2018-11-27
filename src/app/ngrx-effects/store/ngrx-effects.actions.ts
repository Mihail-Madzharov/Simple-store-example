import { Action } from '@ngrx/store';

export const NgrxEffectActions = {
    UpdateNgrxInputValue: '[NgrxEffectsAction] This will update the value of the input',
    UpdateLabelBackgroundColor: '[NgrxEffectsAction] This will update the background color of the label',
};

export class UpdateNgrxInputValueAction implements Action {
    type = NgrxEffectActions.UpdateNgrxInputValue;
    constructor(public payload: string) { }
}

export class UpdateNgrxLabelBackgroundColor implements Action {
    type = NgrxEffectActions.UpdateLabelBackgroundColor;
    constructor(public payload: string) { }
}
