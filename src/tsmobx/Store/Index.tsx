import React, { createContext } from 'react'
import { RootClass } from './RootStore'
export const rootStoreContext = createContext({
  indexStore : new RootClass()
})