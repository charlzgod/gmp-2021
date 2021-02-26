import React, { Component } from "react"
import ReactClassComponent from "../ReactClassComponent/ReactClassComponent"
import ReactPureComponent from "../ReactPureComponent/ReactPureComponent"
import ReactFunctionComponent from "../ReactFunctionComponent/ReactFunctionComponent"
import ReactCreateElementComponent from "../ReactCreateElementComponent/ReactCreateElementComponent"

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Hello World!</h1>
        <ReactClassComponent />
        <ReactPureComponent />
        <ReactFunctionComponent />
        <ReactCreateElementComponent />
      </>
    )
  }
}
