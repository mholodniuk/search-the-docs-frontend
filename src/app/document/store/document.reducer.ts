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

  on(DocumentActions.loadAvailableDocuments, (state) => {
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

  on(DocumentActions.availableDocumentsLoaded, (state, action) => {
    return {
      ...state,
      loading: false,
      error: undefined,
      documents: action.documents,
    }
  }),

  on(DocumentActions.documentTagsUpdated, (state, action) => {
    const updatedDocuments = state.documents.map(doc => doc.id === action.documentId ? {
      ...doc,
      tags: action.tags
    } : doc);

    return {
      ...state,
      documents: [...updatedDocuments]
    }
  }),

  on(DocumentActions.documentRemoved, (state, action) => {
    return {
      ...state,
      documents: [...state.documents.filter(document => document.id !== action.id)]
    }
  })
);
