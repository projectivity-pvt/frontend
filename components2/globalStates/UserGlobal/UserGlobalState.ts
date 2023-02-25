import { makeVar } from '@apollo/client'

export enum UserType {
  BUSINESS_ADMIN = 'BUSINESS_ADMIN',
  BUSINESS_USER = 'BUSINESS_USER',
  VENDOR = 'VENDOR',
}
export interface User {
  name: string
  id: string
  phone: string
  phone_verified: boolean
  type: UserType
}

export interface UserGlobal {
  loading: boolean
  user: User | null
}

export interface UserToken{
  token: string | null
}

const initialStateToken = {
  token: null,
}

const initialState = {
  user: null,
  loading: false,
}

export const userGlobalState = makeVar<UserGlobal>(initialState)
export const userTokenGlobalState = makeVar<UserToken>(initialStateToken)
