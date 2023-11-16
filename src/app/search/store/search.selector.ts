import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SearchState } from "./search.state";


export const selectSearchState = createFeatureSelector<SearchState>('search');

export const filterSelector = createSelector(selectSearchState, (state) => {
  return state.filters;
});

export const loadingSelector = createSelector(selectSearchState, (state) => {
  return state.loading;
});

export const hitSelector = createSelector(selectSearchState, (state) => {
  return state.hits;
});

export const filteredHitsSelector = createSelector(
  selectSearchState,
  filterSelector,
  (state, filters) => {
    let filteredItems = state.hits;

    if (filters.room) {
      filteredItems = filteredItems.filter(hit => hit.room === filters.room);
    }

    if (filters.user) {
      filteredItems = filteredItems.filter(hit => hit.user === filters.user);
    }

    return filteredItems;
  });
