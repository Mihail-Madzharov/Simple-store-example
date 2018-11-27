import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NgrxEffectsState } from './ngrx-effects.state';

const featureSelector = createFeatureSelector<NgrxEffectsState>(NgrxEffectsState.stateName);

export const ngrxInputValue = createSelector(featureSelector, state => state.inputValue);
export const backgroundColor = createSelector(featureSelector, state => state.backgroundColor);
