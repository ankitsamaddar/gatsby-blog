import * as React from "react";
import * as styles from "./layout.module.scss";

import Header from './header'
import Footer from "./footer";

// props.children
// {} - Evaluate Javascript expression during compilation time
export default function Layout({children}) {
  return (
<div className={styles.container}>
  <Header />
  <div className={styles.content}>
    {children}
  </div>

  <Footer>MY NEW GATSBY BLOG 2024</Footer>
</div>
  );
}
