import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Card from "../components/Card"
import styled from 'styled-components'

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: wrap;
  padding: 3% 4%;
`

const IndexPage = () => (
  <Layout>
    <LayoutWrapper>
      <SEO title="Home" />
      {/* <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> */}
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </LayoutWrapper>
  </Layout>
)

export default IndexPage
