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
import { Amplify } from 'aws-amplify'
import awsconfig from '../aws-exports'
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

// Amplify.configure(awsconfig);

// Amplify.configure({
//   API: {
//     graphql_endpoint: 'https://q4pyzgw3ejezbjqcttluycxugq.appsync-api.ap-south-1.amazonaws.com/graphql'
//   }
// });
// configure nProgress events
Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps?.initialApolloState)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApolloProvider client={apolloClient}>
          <Windmill theme={windmill}>
            <UserGlobal />
            <Toaster />
            <div className="flex h-screen bg-white dark:bg-gray-900">
              <Component {...pageProps} />
            </div>
          </Windmill>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
