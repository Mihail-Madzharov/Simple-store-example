import { createFeatureSelector, createSelector} from '@ngrx/store';
import { RxjsCombineLatestState } from './rxjs-combine-latest.state';

export const combineLatestFeature = createFeatureSelector<RxjsCombineLatestState>('CombineLatestState');

export const firstInputSelector = createSelector(
  combineLatestFeature,
  state => state.firstInput
);

export const secondInputSelector = createSelector(
  combineLatestFeature,
  state => state.secondInput
);
