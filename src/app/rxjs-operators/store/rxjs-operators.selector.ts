import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RxJSOperatorsState } from './rxjs-operators.state';

export const featureSelector = createFeatureSelector<RxJSOperatorsState>(RxJSOperatorsState.stateName);

export const getFirstValue = createSelector(
  featureSelector,
  state => state.firstValue
);

export const getSecondValue = createSelector(
  featureSelector,
  state => state.secondValue
);
