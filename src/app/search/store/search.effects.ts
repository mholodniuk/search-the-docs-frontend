import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { select, Store } from "@ngrx/store";
import { AppState } from "../../store/app.state";
import * as SearchActions from "./search.actions";
import { filter, map, switchMap } from "rxjs";
import { isDefined } from "../../shared/utils/utils.functions";
import { userSelector } from "../../auth/store/user.selector";
import { filterSelector } from "./search.selector";
import { SearchApiService } from "../service/search-api.service";

@Injectable()
export class SearchEffects {

  changeFilters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.changeFilters),
      map(() => SearchActions.searchFullText())
    )
  );

  applyFilters = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.searchFullText),
      concatLatestFrom(() => [
          this.store.pipe(select(userSelector), filter(isDefined), map(user => user.id)),
          this.store.pipe(select(filterSelector))
        ]
      ),
      switchMap(([_, userId, filters]) => {
        return this.searchService.fullTextSearch(filters.phrase, userId).pipe(
          map((response) => SearchActions.hitsLoaded({hits: response.hits}))
        )
      })
    )
  );

  constructor(
    private actions$: Actions,
    private searchService: SearchApiService,
    private store: Store<AppState>) {
  }
}
