import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout"
import Title from "../components/title"

export default function About () {
  return (
    <Layout>
    <Title text='This is the about page'></Title>
    <div>
    <Link to="/">Home</Link> | <Link to="/about">About Me</Link>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Layout>
  );
}
