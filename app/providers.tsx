'use client'

import { Provider } from 'react-redux'
import { store } from './store'
import { HeroUIProvider } from '@heroui/react'

export function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Provider store={store}>
      <HeroUIProvider>
        {children}
      </HeroUIProvider>
    </Provider>
  )
}