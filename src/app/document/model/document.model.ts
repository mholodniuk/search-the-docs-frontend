export interface Document {
  id: string
  name: string
  tags: string[]
  contentType: string
  filePath: string
  storage: string
  uploadedAt: string
}

export interface DocumentCollection {
  documents: Document[]
  count: number
}

export interface TagUpdateResponse {
  tags: string[];
  document: string
}

export interface DocumentUploadedResponse {
  id: string;
  filename: string;
  owner: string;
  room: string;
  info: string;
}
