import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"

export default ({ data }) => {
  const body = data.mdx.body
  const site = data.site

  return (
    <Layout>
      <Helmet>
        <title>{`About Me – ${site.siteMetadata.title}`}</title>
      </Helmet>
      <div className="container mx-auto my-12">
        <section className="mx-auto prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
          <h1>About me</h1>
          <MDXRenderer>{body}</MDXRenderer>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    mdx(frontmatter: { title: { eq: "About Me" }, template: { eq: "page" } }) {
      body
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
