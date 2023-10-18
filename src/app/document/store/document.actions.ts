import { createAction, props } from "@ngrx/store";
import { Document, DocumentUploadedResponse } from "../model/document.model";

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

export const updateDocumentTags = createAction(
  `${DOCUMENT_ACTION_TAG} Update Document Tags`,
  props<{ documentId: string, tags: string[] }>()
)

export const documentTagsUpdated = createAction(
  `${DOCUMENT_ACTION_TAG} Document Tags Updated`,
  props<{ documentId: string, tags: string[] }>()
)

export const removeDocument = createAction(
  `${DOCUMENT_ACTION_TAG} Remove Document`,
  props<{ id: string }>()
);

export const documentRemoved = createAction(
  `${DOCUMENT_ACTION_TAG} Document Removed`,
  props<{ id: string }>()
);

export const uploadDocument = createAction(
  `${DOCUMENT_ACTION_TAG} Upload Document`,
  props<{ file: File, roomId: number }>()
);

export const documentUploaded = createAction(
  `${DOCUMENT_ACTION_TAG} Document Uploaded`,
  props<DocumentUploadedResponse>()
);

export const documentFailedToUpload = createAction(
  `${DOCUMENT_ACTION_TAG} Document Failed to Upload`
);
