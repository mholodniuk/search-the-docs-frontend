export interface AuthResponse {
  token: string
  userId: number
}

export interface AuthRequest {
  username: string
  password: string
}
