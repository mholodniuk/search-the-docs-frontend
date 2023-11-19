import { Hit } from "../../document/model/document.model";

export interface SearchState {
  filters: FilterOptions;
  hits: Hit[];
  loading: boolean;
}

export interface FilterOptions {
  phrase: string;
  fragmentSize: number;
  room?: string;
  user?: string;
}
