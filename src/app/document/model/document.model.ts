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
