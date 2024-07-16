import { useEffect } from 'react'
import { AppProps } from 'next/app'

import { axeAccessibilityReporter } from '../utils/axeAccessibilityReporter'

import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return <Component {...pageProps} />
}