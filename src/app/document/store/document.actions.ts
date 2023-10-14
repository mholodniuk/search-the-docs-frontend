import { createAction, props } from "@ngrx/store";
import { Document } from "../model/document.model";

const DOCUMENT_ACTION_TAG = '[Document]';

export const loadAvailableDocuments = createAction(
  `${DOCUMENT_ACTION_TAG} Load Documents`
);

export const loadDocumentsFailure = createAction(
  `${DOCUMENT_ACTION_TAG} Load Documents Failure`,
  props<{ message: string }>()
);

export const availableDocumentsLoaded = createAction(
  `${DOCUMENT_ACTION_TAG} Documents Loaded`,
  props<{ documents: Document[] }>()
);


export const clearAvailableDocuments = createAction(
  `${DOCUMENT_ACTION_TAG} Clear Documents`
);

