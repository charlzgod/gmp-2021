import React from 'react'
import CreateElementComponent from '../CreateElementComponent/CreateElementComponent'
import FunctionComponent from '../FunctionComponent/FunctionComponent'
import ReactClassComponent from '../ReactClassComponent/ReactClassComponent'
import ReactPureComponent from '../ReactPureComponent/ReactPureComponent'

const App = () => {
  return (
    <>
      <CreateElementComponent />
      <FunctionComponent />
      <ReactClassComponent />
      <ReactPureComponent />
    </>
  )
}

export default App
