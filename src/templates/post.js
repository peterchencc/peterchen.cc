import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"

export default ({ data }) => {
  const post = data.mdx
  const site = data.site

  useEffect(() => {
    if (typeof window !== "undefined") {
      let nodes = document.querySelectorAll("[data-parent-class]")
      nodes.forEach((node) => {
        node.closest("p").className = node.dataset.parentClass
      })
    }
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>{`${post.frontmatter.title} – ${site.siteMetadata.title}`}</title>
      </Helmet>
      {/* bg-gradient-to-b from-blue-200 to-white */}
      <div className="bg-blue-100 pt-12 sm:pt-32 pb-12 mb-12 md:text-center lg:text-left">
        <div className="container">
          <div className="m-auto max-w-prose">
            <h1>{post.frontmatter.title}</h1>
            <div class="pt-8 text-gray-700">
              <div>
                By{" "}
                <Link className="font-semibold" to="/about">
                  Peter Chen
                </Link>{" "}
                on{" "}
                <time className="font-semibold">{post.frontmatter.date}</time>
              </div>
              <div class="pt-4 flex flex-wrap">
                {post.frontmatter.categories &&
                  post.frontmatter.categories.map((category) => {
                    return (
                      <span
                        key={category}
                        className="px-2 py-1 mr-2 mb-1 text-sm bg-gray-200 rounded"
                      >
                        #{category}
                      </span>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <article className="m-auto prose sm:prose-sm lg:prose-lg xl:prose-lg">
          {/* <Img fluid={post.frontmatter.featuredImage.childImageSharp.fluid} /> */}
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
        <div className="text-center align-center my-12">---</div>
        <div className="flex justify-center mx-auto my-6">
          <div className="prose">
            <Link to="/">back to home</Link>
          </div>
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
        categories
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
