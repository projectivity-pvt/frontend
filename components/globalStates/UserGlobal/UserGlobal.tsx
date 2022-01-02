import { useEffect } from 'react'
import Amplify, { Auth } from 'aws-amplify'
import { awsKeys } from 'awsKeys'
import { authenticateUserOnMount } from './utils'

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: awsKeys.userPoolRegion,

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: awsKeys.userPoolId,

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: awsKeys.userPoolWebClientId,

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,

    // // OPTIONAL - Configuration for cookie storage
    // // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    // cookieStorage: {
    //   // REQUIRED - Cookie domain (only required if cookieStorage is provided)
    //   domain: awsKeys.cookieStorage.domain,
    //   // OPTIONAL - Cookie path
    //   path: awsKeys.cookieStorage.path,
    //   // OPTIONAL - Cookie expiration in days
    //   expires: awsKeys.cookieStorage.expires,
    //   // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
    //   sameSite: awsKeys.cookieStorage.sameSite,
    //   // OPTIONAL - Cookie secure flag
    //   // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
    //   secure: awsKeys.cookieStorage.secure,
    // },
  },
  // ssr: true,
})

export const UserGlobal = () => {
  console.log(Auth.configure())

  useEffect(() => {
    // this function will trigger only once when the app mounts
    authenticateUserOnMount()
  }, [])
  return null
}
