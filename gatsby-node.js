const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    let slug
    if (Object.prototype.hasOwnProperty.call(node.frontmatter, "slug")) {
      slug = `/${node.frontmatter.slug}`
    } else {
      slug = createFilePath({
        node,
        getNode,
        trailingSlash: false,
      })
    }

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              template
              published
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allMdx.edges.forEach(({ node }) => {
      // createPage({
      //   path: node.fields.slug,
      //   component: path.resolve(`./src/templates/post.js`),
      //   context: {
      //     slug: node.fields.slug,
      //   },
      // })
      // const template = node.frontmatter.template
      if (node.frontmatter.template === "project") {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/project.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      } else if (
        node.frontmatter.template === "post" &&
        node.frontmatter.published
      ) {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.fields.slug,
          },
        })
      }
    })
  })
}
