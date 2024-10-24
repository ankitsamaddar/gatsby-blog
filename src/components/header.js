import * as React from "react"
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import * as styles from "./header.module.scss";

// HeaderLink component
// Private component - No export keyword
const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>{props.text}</Link>
)

// HomeButton component
const HomeButton = props => (
  <Link to={props.to}>
    <div className={styles.button}>{props.text}</div>
  </Link>
)

// Social Button Component
const SocialButton = (props) => {

  let style = '';
  let url = '';

  if (props.site === 'twitter') {
    style = styles.buttonTwitter;
    url = "https://twitter.com/" + props.username;
  }
  else if (props.site === 'linkedin') {
    style = styles.buttonLinkedin;
    url = "https://www.linkedin.com/in/" + props.username;
  }
  else if (props.site === 'github') {
    style = styles.buttonGithub;
    url = "https://www.github.com/" + props.username;
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  )

}

export default function Header () {
  return (
    <StaticQuery
    query={
      graphql `
      query {
          site {
            siteMetadata {
              title
            }
          }
        }`
    }

    render={ data => (

      <header className={styles.container}>
        <div className={styles.row}>
          <HomeButton to='/' text={data.site.siteMetadata.title}/>
          <SocialButton site="github" username='ankitsamaddar' />
          <SocialButton site="linkedin" username='ankitsamaddar' />
          <SocialButton site="twitter" username='ankitsamaddar' />
        </div>
        <div className={styles.row}>
          <HeaderLink to='/' text='ARTICLES'/>
          <HeaderLink to='about' text='ABOUT' />
        </div>
      </header>
      )
    }
    />

  );
}
