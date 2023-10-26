import { Document, Hit } from "../model/document.model";

export interface DocumentState {
  documents: Document[];
  loading: boolean;
  error?: string;
}

export interface SearchState {
  phrase: string;
  selected?: Document;
  hits: Hit[];
}
