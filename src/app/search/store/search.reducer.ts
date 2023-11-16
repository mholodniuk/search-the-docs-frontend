import { createReducer, on } from "@ngrx/store";
import { SearchState } from "./search.state";
import * as SearchActions from "./search.actions";

const initialState: SearchState = {
  filters: {
    phrase: ""
  },
  hits: [],
  loading: false
}

export const SearchReducer = createReducer(
  initialState,

  on(SearchActions.changeFilters, (state, action) => {
    return {
      ...state,
      loading: true,
      filters: {
        phrase: action.phrase,
        room: action.room,
        user: action.user
      }
    }
  }),

  on(SearchActions.hitsLoaded, (state, action) => {
    return {
      ...state,
      loading: false,
      hits: action.hits
    }
  }),

  on(SearchActions.clearHits, state => {
    return {
      ...state,
      loading: false,
      hits: []
    }
  }),
);
