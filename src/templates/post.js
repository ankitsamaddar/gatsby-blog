import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/title"
import * as styles from "./post.module.scss"

export default function Post({data}) {
  const post = data.markdownRemark

  return (
      <Layout>
        <div className={styles.container}>
            <Title text={post.frontmatter.title}></Title>
            {/* Using Css-in-JS */}
            <div style={{ width: '100%', height: '200px', backgroundColor: '#fafafa', backgroundImage: 'Url(https://picsum.photos/seed/' + post.frontmatter.keywords + '/960/200/' + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginBottom: '30px' }}></div>
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`
