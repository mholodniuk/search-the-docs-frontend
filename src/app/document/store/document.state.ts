import { Document } from "../model/document.model";

export interface DocumentState {
  documents: Document[];
  loading: boolean;
  error?: string;
}
