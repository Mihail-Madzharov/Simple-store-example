import { createFeatureSelector, createSelector} from '@ngrx/store';
import { FetchDataFlowState } from './fetch-data-flow.state';

export const FetchDataFlowFeature = createFeatureSelector<FetchDataFlowState>(FetchDataFlowState.stateName);

export const responseSelector = createSelector(
  FetchDataFlowFeature,
  state => state.response
);
