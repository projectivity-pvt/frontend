import '../styles/globals.scss'
import '../styles/tailwind.scss'
import type { AppProps } from 'next/app'
import { Windmill } from '@windmill/react-ui'
import { Toaster } from 'react-hot-toast'
import windmill from 'styles/windmill'
import { useApollo } from 'apolloClient'
import { ApolloProvider } from '@apollo/client'
import '../styles/nprogress.scss'
import nProgress from 'nprogress'
import { Router } from 'next/router'
import { UserGlobal } from '@components/globalStates/UserGlobal/UserGlobal'

// configure nProgress events
Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps?.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Windmill theme={windmill}>
        <UserGlobal />
        <Toaster />
        <Component {...pageProps} />
      </Windmill>
    </ApolloProvider>
  )
}

export default MyApp
