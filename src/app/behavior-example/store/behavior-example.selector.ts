import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BehaviorExampleState } from './behavior-example.state';

export const behaviorExampleFeature = createFeatureSelector<BehaviorExampleState>(BehaviorExampleState.stateName);

export const behaviorInputSelector = createSelector (
  behaviorExampleFeature,
  state => state.inputValue
);
