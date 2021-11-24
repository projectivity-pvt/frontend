import '../styles/globals.scss'
import '../styles/tailwind.scss'
import type { AppProps } from 'next/app'
import { Windmill } from '@windmill/react-ui'
import Amplify from 'aws-amplify'
import { Toaster } from 'react-hot-toast'

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: 'ap-south-1',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'ap-south-1_upPCBJgLv',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '36o63mlrl4005br0t5p67g3su6',

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,

    // OPTIONAL - Configuration for cookie storage
    // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
    cookieStorage: {
      // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      domain: 'localhost',
      // OPTIONAL - Cookie path
      path: '/',
      // OPTIONAL - Cookie expiration in days
      expires: 365,
      // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
      sameSite: 'strict',
      // OPTIONAL - Cookie secure flag
      // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
      secure: false,
    },
  },
  ssr: true,
})

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Windmill>
    <Toaster />
    <Component {...pageProps} />
  </Windmill>
)

export default MyApp
