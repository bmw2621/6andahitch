exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    {
        allMdx {
            nodes {
                id
                frontmatter {
                    slug
                }
            }
        }
    }
  `)

  data.allMdx.nodes.forEach(post => {
    const slug = post.frontmatter.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/postsTemplate.js`),
      context: {id: post.id}
    })
  })
}
