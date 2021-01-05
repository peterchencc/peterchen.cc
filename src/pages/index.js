import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import Layout from "../components/Layout"
import Project from "../components/Project"
import MyCV from "../../static/peterchen-2020.pdf"

export default ({ data }) => {
  const site = data.site

  return (
    <Layout>
      <Helmet>
        <title>{`${site.siteMetadata.title} - peterchen.cc`}</title>
      </Helmet>
      <section className="bg-chelsea-blue py-20 h-auto">
        <div className="container">
          <div className="w-full text-white">
            <h1 className="font-bold text-3xl sm:text-5xl">
              Hello, I am Peter.
            </h1>
            <p className="font-bold text-3xl sm:text-5xl mb-16">
              I'm a Software Engineer with 6+ years experience building web
              products.
            </p>
            <p className="font-thin text-base sm:text-xl mb-4">
              Learn more{" "}
              <Link className="font-semibold underline" to="/about">
                about me
              </Link>{" "}
              or{" "}
              <OutboundLink
                className="font-semibold underline"
                href={MyCV}
                target="_blank"
                rel="noopener noreferrer"
              >
                view my resume
              </OutboundLink>
            </p>
          </div>

          <div className="">
            <ul className="flex items-center">
              <li className="py-2 mr-2">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/peterchencc/"
                  className="rounded-full h-10 w-10 flex items-center justify-center"
                  style={{ backgroundColor: "#0077B5" }}
                  rel="noreferrer"
                >
                  <svg
                    className="h-5 w-5 fill-current text-white"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn icon</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
              <li className="py-2 mr-2">
                <a
                  target="_blank"
                  href="https://github.com/peterchencc"
                  className="rounded-full h-10 w-10 flex items-center justify-center"
                  style={{ backgroundColor: "#181717" }}
                  rel="noreferrer"
                >
                  <svg
                    className="h-5 w-5 fill-current text-white"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub icon</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </li>
              <li className="py-2 mr-2">
                <a
                  target="_blank"
                  href="https://twitter.com/peterchencc"
                  className="rounded-full h-10 w-10 flex items-center justify-center"
                  style={{ backgroundColor: "#1DA1F2" }}
                  rel="noreferrer"
                >
                  <svg
                    className="h-5 w-5 fill-current text-white"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter icon</title>
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
              </li>
              <li className="py-2 mr-2">
                <a
                  target="_blank"
                  href="https://codepen.io/peterchencc"
                  className="rounded-full h-10 w-10 flex items-center justify-center"
                  style={{ backgroundColor: "#000000" }}
                  rel="noreferrer"
                >
                  <svg
                    className="h-5 w-5 fill-current text-white"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>CodePen icon</title>
                    <path d="M18.144 13.067v-2.134L16.55 12zm1.276 1.194a.628.628 0 01-.006.083l-.005.028-.011.053-.01.031c-.005.016-.01.031-.017.047l-.014.03a.78.78 0 01-.021.043l-.019.03a.57.57 0 01-.08.1l-.026.025a.602.602 0 01-.036.03l-.029.022-.01.008-6.782 4.522a.637.637 0 01-.708 0L4.864 14.79l-.01-.008a.599.599 0 01-.065-.052l-.026-.025-.032-.034-.021-.028a.588.588 0 01-.067-.11l-.014-.031a.644.644 0 01-.017-.047l-.01-.03c-.004-.018-.008-.036-.01-.054l-.006-.028a.628.628 0 01-.006-.083V9.739c0-.028.002-.055.006-.083l.005-.027.011-.054.01-.03a.574.574 0 01.12-.217l.031-.034.026-.025a.62.62 0 01.065-.052l.01-.008 6.782-4.521a.638.638 0 01.708 0l6.782 4.521.01.008.03.022.035.03c.01.008.017.016.026.025a.545.545 0 01.08.1l.019.03a.633.633 0 01.021.043l.014.03c.007.016.012.032.017.047l.01.031c.004.018.008.036.01.054l.006.027a.619.619 0 01.006.083zM12 0C5.373 0 0 5.372 0 12 0 18.627 5.373 24 12 24c6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12m0 10.492L9.745 12 12 13.51 14.255 12zm.638 4.124v2.975l4.996-3.33-2.232-1.493zm-6.272-.356l4.996 3.33v-2.974l-2.764-1.849zm11.268-4.52l-4.996-3.33v2.974l2.764 1.85zm-6.272-.356V6.41L6.366 9.74l2.232 1.493zm-5.506 1.549v2.134L7.45 12Z" />
                  </svg>
                </a>
              </li>
              <li className="py-2 mr-2">
                <a
                  target="_blank"
                  href="https://www.instagram.com/peterchencc/"
                  className="rounded-full h-10 w-10 flex items-center justify-center"
                  style={{ backgroundColor: "#E4405F" }}
                  rel="noreferrer"
                >
                  <svg
                    className="h-5 w-5 fill-current text-white"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram icon</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 150">
        <path
          fill="#023E8A"
          fillOpacity="1"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,165.3C840,171,960,213,1080,224C1200,235,1320,213,1380,202.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      <div id="scrolling-anchor"></div>

      <section className="container py-12">
        <div className="flex justify-center">
          <div className="text-2xl sm:text-3xl font-black pb-4 mb-8">Posts</div>
        </div>
        <div className="">
          {data.posts.edges.map(({ node }) => (
            <Link key={node.id} to={node.fields.slug}>
              <div
                className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-4xl mb-6 px-4 py-4 bg-white hover:bg-gray-100"
                key={node.id}
              >
                <span className="text-gray-700 font-semibold text-base mb-4">
                  {node.frontmatter.date}
                </span>
                <h3 className="font-bold text-xl md:text-2xl">
                  <span className="shadow-blue">{node.frontmatter.title}</span>
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container py-12">
        <div className="flex justify-center">
          <div className="text-2xl sm:text-3xl font-black pb-4 mb-8">
            Projects
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-2">
          {data.projects.edges.map(({ node }) => {
            return <Project key={node.id} data={node} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { template: { eq: "post" }, published: { eq: true } }
      }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM  YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    projects: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { template: { eq: "project" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            projectName
            date(formatString: "DD MMMM, YYYY")
            description
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    site: site {
      siteMetadata {
        title
      }
    }
  }
`
