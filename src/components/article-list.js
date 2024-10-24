import * as React from "react"
import { StaticQuery, graphql } from "gatsby";
import Article from "../components/article";

export default function ArticleList () {
  return (
    <StaticQuery
    query = { graphql `
      query
      {
        allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                title
                image
                keywords
                date(formatString: "MMM YYYY")
              }
              excerpt
            }
          }
        }
      }
      `
    }

    render={ data => (
    <div>
      {data.allMarkdownRemark.edges.map(({node}) => (
        <Article
        id={node.id}
        to={node.fields.slug}
        keywords={node.frontmatter.keywords}
        title={node.frontmatter.title}
        date={node.frontmatter.date}
        excerpt={node.excerpt}
        />
      ))}
    </div>
  )}

    />
  );
}
