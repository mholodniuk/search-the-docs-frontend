export interface Error {
  type: string
  title: string
  status: number
  instance: string
  timestamp: string
}

export type InvalidResourceUpdateException = Error & {
  errors: ErrorMessage[]
}

export interface ErrorMessage {
  field: string
  message: string
  invalidValue: string
}
