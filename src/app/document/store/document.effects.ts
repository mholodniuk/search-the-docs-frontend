import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, filter, map, of, switchMap, withLatestFrom } from "rxjs";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import { isDefined } from "../../shared/utils/utils.functions";
import { DocumentApiService } from "../service/document-api.service";
import { selectedRoomSelector } from "../../room/store/room.selector";
import * as DocumentActions from "../store/document.actions";
import * as RoomActions from "../../room/store/room.actions";
import { HttpErrorResponse } from "@angular/common/http";
import { userSelector } from "../../auth/store/user.selector";

@Injectable()
export class DocumentEffects {

  clearDocuments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.selectRoom),
      map(() => DocumentActions.clearAvailableDocuments())
    )
  );

  startDocumentLoading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.clearAvailableDocuments),
      map(() => DocumentActions.loadAvailableDocuments())
    )
  );

  loadDocuments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.loadAvailableDocuments),
      withLatestFrom(this.store.pipe(
        select(selectedRoomSelector),
        filter(isDefined),
        map(room => room.id)
      )),
      switchMap(([_, roomId]) => {
        return this.documentService.getDocumentsFromRoom(roomId).pipe(
          map((response) => DocumentActions.availableDocumentsLoaded({documents: response.documents})),
          catchError((error: HttpErrorResponse) => of(DocumentActions.loadDocumentsFailure({message: `Failed to load documents for room ${roomId}`})))
        )
      })
    )
  );

  updateDocumentTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.updateDocumentTags),
      switchMap(action => {
        return this.documentService.updateDocumentTags(action.documentId, action.tags).pipe(
          map((response) => DocumentActions.documentTagsUpdated({documentId: response.document, tags: response.tags})),
        )
      })
    )
  );

  uploadDocument$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.uploadDocument),
      withLatestFrom(this.store.pipe(
        select(userSelector),
        filter(isDefined),
      )),
      switchMap(([action, user]) => {
        return this.documentService.uploadDocument(action.file, action.roomId, user.id).pipe(
          map(response => DocumentActions.documentUploaded(response)),
          catchError((error: HttpErrorResponse) => of(DocumentActions.documentFailedToUpload()))
        )
      })
    )
  );

  deleteDocument$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DocumentActions.removeDocument),
      switchMap((action) => {
        return this.documentService.deleteDocument(action.id).pipe(
          map(() => DocumentActions.documentRemoved({id: action.id}))
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private documentService: DocumentApiService) {
  }
}
