import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About {data.site.siteMetadata.title}</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores
      eum rem architecto vitae, eligendi quibusdam repellat officiis!
      Perspiciatis animi id tenetur, cum repellat nostrum mollitia aliquid
      dolores ab vitae.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
