import '../styles/globals.scss'
import '../styles/tailwind.scss'
import type { AppProps } from 'next/app'
import { Windmill } from '@windmill/react-ui'
import Amplify, { Auth } from 'aws-amplify'
import { Toaster } from 'react-hot-toast'
import windmill from 'styles/windmill'
import { useApollo } from 'apolloClient'
import { ApolloProvider } from '@apollo/client'
import { awsKeys } from 'awsKeys'
import { useEffect } from 'react'
import '../styles/nprogress.scss'
import nProgress from 'nprogress'
import { Router } from 'next/router'

// configure nProgress events
Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

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

    // OPTIONAL - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    cookieStorage: {
      // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      domain: awsKeys.cookieStorage.domain,
      // OPTIONAL - Cookie path
      path: awsKeys.cookieStorage.path,
      // OPTIONAL - Cookie expiration in days
      expires: awsKeys.cookieStorage.expires,
      // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
      sameSite: awsKeys.cookieStorage.sameSite,
      // OPTIONAL - Cookie secure flag
      // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
      secure: awsKeys.cookieStorage.secure,
    },
  },
  ssr: true,
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps?.initialApolloState)
  const getUser = async () => {
    const currentUserInfo = await Auth.currentUserInfo()
    console.log({ currentUserInfo })
  }

  useEffect(() => {
    getUser()
  }, [])
  return (
    <ApolloProvider client={apolloClient}>
      <Windmill theme={windmill}>
        <Toaster />
        <Component {...pageProps} />
      </Windmill>
    </ApolloProvider>
  )
}

export default MyApp
