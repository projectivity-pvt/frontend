import '../styles/globals.scss'
import '../styles/tailwind.scss'
import type { AppProps } from 'next/app'
import { Windmill } from '@windmill/react-ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Windmill>
      <Component {...pageProps} />
    </Windmill>
  )
}

export default MyApp
