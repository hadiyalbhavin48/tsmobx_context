import React, { useContext } from 'react'
import { rootStoreContext } from '../Store/Index'

export const useStore = () => useContext(rootStoreContext)