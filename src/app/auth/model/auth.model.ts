export interface AuthResponse {
  token: string
  id?: number
}

export interface AuthRequest {
  username: string
  password: string
}
