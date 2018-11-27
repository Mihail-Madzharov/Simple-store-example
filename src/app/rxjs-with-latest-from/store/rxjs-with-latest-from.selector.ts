import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WithLatestFromState } from './rxjs-with-latest-from.state';

export const featureSelector = createFeatureSelector<WithLatestFromState>(WithLatestFromState.stateName);

export const getFirstValue = createSelector(
  featureSelector,
  state => state.firstValue
);

export const getSecondValue = createSelector(
  featureSelector,
  state => state.secondValue
);
