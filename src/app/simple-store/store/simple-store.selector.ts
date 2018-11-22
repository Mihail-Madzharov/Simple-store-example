import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SimpleStoreState } from './simple-store.state';

export const featureSelector = createFeatureSelector<SimpleStoreState>(SimpleStoreState.stateName);

// the selector will emit new value only if
// the value is different from the one before
export const inputValueSelector = createSelector(
  featureSelector,
  state => state.inputValue
);
