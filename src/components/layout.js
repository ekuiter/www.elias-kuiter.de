import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Meta from './meta';
import Header from './header';
import Footer from './footer';
import 'normalize.css';
import '../stylesheets/global.css';
import styles from '../stylesheets/layout.module.css';

export default ({ children, description, lang, meta, title, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Meta description={description} lang={lang} meta={meta} title={title} />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={styles.layout}>
        <main {...props}>
          {children}
        </main>
      </div>
      <Footer title={title} />
    </>
  );
};