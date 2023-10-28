import { Document, Hit } from "../../document/model/document.model";

export interface SearchState {
  phrase: string;
  selected?: Document;
  hits: Hit[];
}
