import * as React from 'react'
import * as styles from './title.module.scss'

export default function Title (props) {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{props.text}</h1>
      <div className={styles.subtitle}>{props.subtitle}</div>
    </section>
  );
}
