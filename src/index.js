import React from "react"
import ReactDOM from "react-dom"
import "./styles/common.scss"
import App from "./App"
import Routes from "./Routes.js" //-> Routes 컴포넌트 연결
//context
import { GlobalProvider } from "./context"

ReactDOM.render(
  <GlobalProvider>
    <Routes />
  </GlobalProvider>,
  document.getElementById("root")
)
