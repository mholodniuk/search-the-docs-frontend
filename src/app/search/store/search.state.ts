import { Hit } from "../../document/model/document.model";

export interface SearchState {
  filters: FilterOptions;
  hits: Hit[];
  loading: boolean;
}

export interface FilterOptions {
  phrase: string;
  room?: string;
  user?: string;
}
