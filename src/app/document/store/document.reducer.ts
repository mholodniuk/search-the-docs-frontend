import { createReducer, on } from "@ngrx/store";
import { DocumentState } from "./document.state";
import * as DocumentActions from './document.actions';


const initialState: DocumentState = {
  documents: [],
  error: undefined,
  loading: false
};

export const DocumentReducer = createReducer(
  initialState,

  on(DocumentActions.clearAvailableDocuments, (state) => {
    return {
      ...state,
      loading: false,
      error: undefined,
      documents: []
    }
  }),

  on(DocumentActions.loadAvailableDocuments, (state, action) => {
    return {
      ...state,
      loading: true,
      error: undefined
    }
  }),

  on(DocumentActions.loadDocumentsFailure, (state, action) => {
    return {
      ...state,
      loading: true,
      error: action.message
    }
  }),

  // todo: while trying to click on shared room got: org.springframework.dao.IncorrectResultSizeDataAccessException
  on(DocumentActions.availableDocumentsLoaded, (state, action) => {
    return {
      ...state,
      loading: false,
      error: undefined,
      documents: action.documents,
    }
  }),
);
