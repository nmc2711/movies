import React from "react"
import styled from "styled-components"
import Layout from "../commons/Layout/index"

function main() {
  return (
    <Layout>
      <Container>메인메인</Container>
    </Layout>
  )
}

export default main

const Container = styled.section`
  min-height: 400px;
`
