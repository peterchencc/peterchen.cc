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
        <div className="md:grid">
          <div className="col-start-1 col-end-3">
            <div className="pt-12 pb-12 sm:pt-32 md:text-center lg:text-left">
              <h1>{post.frontmatter.title}</h1>
            </div>
          </div>
          <div className="md:sticky md:h-screen md:top-32">
            <div className="text-gray-700">
              <span className="">Last Updated:</span> {post.frontmatter.date}
            </div>
            <div className="text-gray-700">
              <span className="">Project Name:</span>{" "}
              {post.frontmatter.projectName}
            </div>
            <div className="text-gray-700">
              <ul className="pt-4 flex flex-wrap md:block">
                {post.frontmatter.tags &&
                  post.frontmatter.tags.map((tag) => {
                    return (
                      <li key={tag} className="w-auto mr-2 mb-2">
                        <span className="px-2 py-1 text-sm bg-gray-200 rounded">
                          #{tag}
                        </span>
                      </li>
                    )
                  })}
              </ul>
            </div>
          </div>
          <div className="py-4 md:pt-0">
            <Img
              className="my-12 md:mt-0 md:mb-8"
              fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            />
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
        date(formatString: "DD MMM, YYYY")
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
