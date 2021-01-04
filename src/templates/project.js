import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default ({ data }) => {
  const post = data.mdx
  const site = data.site

  return (
    <Layout>
      <Helmet>
        <title>{`${post.frontmatter.title} – ${site.siteMetadata.title}`}</title>
      </Helmet>
      <div className="container">
        <div className="grid">
          <div className="col-start-1 col-end-3">
            <div className="bg-blue-100 pt-12 sm:pt-32 pb-12 md:text-center lg:text-left">
              <h1>{post.frontmatter.title}</h1>
            </div>
          </div>
          <div className="sticky h-screen top-32">
            <div>Last Updated: {post.frontmatter.date}</div>
            <div className="">Project name: {post.frontmatter.projectName}</div>
            <div className="">
              <ul>
                {post.frontmatter.tags &&
                  post.frontmatter.tags.map((tag) => {
                    return (
                      <li key={tag} className="">
                        {tag}
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
          <div className="">
            <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} />
            <article class="m-auto prose sm:prose-sm lg:prose-lg xl:prose-lg">
              <MDXRenderer>{post.body}</MDXRenderer>
            </article>
          </div>
        </div>
        <div className="flex justify-center mx-auto my-20">
          <Link to="/">back to home</Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
        projectName
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
