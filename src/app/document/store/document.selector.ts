import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DocumentState } from "./document.state";

export const selectDocumentState = createFeatureSelector<DocumentState>('document');

export const documentsSelector = createSelector(selectDocumentState, (state) => {
  return state.documents;
});

export const documentsLoadingSelector = createSelector(selectDocumentState, (state) => {
  return state.loading;
});
