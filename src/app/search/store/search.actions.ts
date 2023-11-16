import { createAction, props } from "@ngrx/store";
import { FilterOptions } from "./search.state";
import { Hit } from "../../document/model/document.model";

const SEARCH_ACTION_TAG = '[Search]';

export const changeFilters = createAction(
  `${SEARCH_ACTION_TAG} Change Filters`,
  props<FilterOptions>()
);

export const searchFullText = createAction(
  `${SEARCH_ACTION_TAG} Full Text Search`
);

export const hitsLoaded = createAction(
  `${SEARCH_ACTION_TAG} Full Text Search Results Loaded`,
  props<{ hits: Hit[] }>()
);

export const clearHits = createAction(
  `${SEARCH_ACTION_TAG} Clear Full Text Search Result`
);
