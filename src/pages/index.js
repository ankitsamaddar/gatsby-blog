import * as React from "react"
import Layout from "../components/layout"
import Title from "../components/title"
import ArticleList from "../components/article-list";

// Anonymous arrow function - Gives error/warnings
// export default () => ()
// Everything passed inside the Layout is children

export default function Home () {
    return (
  <Layout>
    <Title text='Welcome'/>
    <p>
      This is the index page. Here is where the website starts. Hello everyone welcome to the new Index page. From here the site will begin.
    </p>
    <ArticleList />
  </Layout>
);
  }
