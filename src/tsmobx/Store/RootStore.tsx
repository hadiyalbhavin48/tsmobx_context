import React from 'react'
import Store from './Store'
export interface IRootStore{
    store : Store
}

export class RootClass implements IRootStore{
  store : Store

  constructor(){
    this.store = new Store()
  }
}
// export default RootStore