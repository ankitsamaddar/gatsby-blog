import * as React from 'react'
import * as styles from './footer.module.scss'

export default function Footer (props) {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        {props.children}
      </div>
    </footer>
  );
}
