import React from "react"
import styled from "styled-components"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
    <Footer />
  </Wrapper>
)

//styled
const Wrapper = styled.div`
  padding-top: 91px; /* 헤더 높이 */
`

export default Layout
