import { makeVar } from '@apollo/client'

export interface User {
  name: string
  id: string
  phone: string
  phone_verified: boolean
  type: string
}

export interface UserGlobal {
  loading: boolean
  user: User | null
}

const initialState = {
  user: null,
  loading: false,
}

export const userGlobalState = makeVar<UserGlobal>(initialState)
