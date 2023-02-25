import { useMemo } from 'react'
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { awsKeys } from 'awsKeys'
import UserPool from 'UserPool'
import { AUTH_TYPE, createAuthLink } from 'aws-appsync-auth-link'
import { userTokenGlobalState } from '@components/globalStates/UserGlobal/UserGlobalState'

const { userToken } = userTokenGlobalState()


const token = "eyJraWQiOiI2bjRzMTlVRGhTVnFJVmt4RjI1WWorY1diYVg0VXR5VElSaFl5SWJtRHVJPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJmMTQyMzk5MC02Y2VkLTRjYzEtYjgxNi1lYmJkNWVmZDA2MDYiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfUWJ3VEFBMVpTIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImYxNDIzOTkwLTZjZWQtNGNjMS1iODE2LWViYmQ1ZWZkMDYwNiIsIm9yaWdpbl9qdGkiOiIyMDcyNWMxZC0yNjQyLTQzNGUtYmM0Ni02NGQ3NDViODhiNmQiLCJhdWQiOiIxYnR2Z3Bjb2xqc2Rrc2JjOGJhaThpMTJ2diIsImV2ZW50X2lkIjoiZTM2NTYzMmQtNGNiZS00ZjMyLWI3NjgtZTQ0ODI0MGJmZmYzIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NjE0MzMwMDksIm5hbWUiOiJBemF6IEFsaSIsInBob25lX251bWJlciI6Iis5MTk5MzAzOTM1MjYiLCJleHAiOjE2NjE0MzY2MDksImN1c3RvbTp1c2VyX3R5cGUiOiJWRU5ET1IiLCJpYXQiOjE2NjE0MzMwMDksImp0aSI6IjI3MTQ1MGRmLTUwMDctNDFmMS1hZThmLTgxNTkxYTljM2YwZCIsImVtYWlsIjoiYWphei5hbGkxODZAZ21haWwuY29tIn0.Bv_hydojdtUV3ZN9fIfx_hGkj7mwmDdp-nqLPDVoOfOXx0FcqB35RmcW5QHphIWBWTaVA8UZOBmzDPiBOYrn3brmu8jigBk-J0spuMtkX_PKdnONPcjw5e7gFvphITm2BJsEL5w9KqYFbA6z56rlkZUoeqBnn6WTQm-tsYfSi0GPMUw5ihpiCOFhWrjUQtp4RX9YgHfPGNJ-jPbgXyJgyMKdyeqRbLVO1fcl2lfwh3S-WJt2b0YgJkdlLZku1-Y28ncaxl2b6w_YcgxhMJenLMLlkXFLDwzcpngGNyIVScni5Caql-AgeUCTNsxcDKNIa4fYALw_oDvmGtVCN_uEQw"

let apolloClient: ApolloClient<NormalizedCacheObject>
const url = awsKeys.aws_appsync_graphqlEndpoint
const region = awsKeys.aws_appsync_region
const auth = {
  type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
  jwtToken: token
}


console.log("first")


console.log(userToken?.token)


const link = ApolloLink.from([
  // @ts-ignore
  createAuthLink({ url, region, auth }),
  createHttpLink({ uri: url }),
])

const createApolloClient = (): ApolloClient<NormalizedCacheObject> =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link,
    ssrMode: typeof window === 'undefined', // set to true for SSR
  })

export const initializeApollo = ({
  initialState = null,
}: {
  initialState?: NormalizedCacheObject | null
} = {}): ApolloClient<NormalizedCacheObject> => {
  const localApolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = localApolloClient.extract()

    // Restore the cache with the merged data
    localApolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return localApolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = localApolloClient

  return localApolloClient
}

export const useApollo = (
  initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> => {
  const store = useMemo<ApolloClient<NormalizedCacheObject>>(
    () => initializeApollo({ initialState }),
    [initialState]
  )
  return store
}
