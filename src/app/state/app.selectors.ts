import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './app.reducer';

export const selectUserContext = createFeatureSelector('userContex');

export const selecUserName = createSelector(
  selectUserContext,
  (state: AppState) => state.user.name,
);
