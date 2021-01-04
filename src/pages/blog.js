import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <main>
        <section className="container">
          <h4>{data.allMdx.totalCount} Posts</h4>
          {data.allMdx.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>— {node.frontmatter.date}</span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
