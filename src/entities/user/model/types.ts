export interface User {
  id: string
  name: string
  email: string
  password: string
  createdAt: string
}

export type RegisterResponse = User

export type RegisterRequest = {
  name: string
  email: string
  password: string
}

