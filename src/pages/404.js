import * as React from "react"
import * as styles from "./404.module.scss";
import Layout from "../components/layout"
import {Link} from 'gatsby'
// Named Function
export default function Problem() {
  return (
    <Layout>
    <div className={styles.content}>
    <h1 className={styles.header}>Page not found</h1>
    <p className={styles.errorMessage}>
      The page you are looking for does not exists.
    </p>
    <Link to='/'>Home</Link>
  </div>
  </Layout>
  );
}
