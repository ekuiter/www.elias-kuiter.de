import React from 'react';
import styles from '../stylesheets/navigation.module.css';
import { Link } from 'gatsby';
import Scrollspy from 'react-scrollspy';

export default ({ pages, scrollspy = false, currentTitle, ...props }) => {
  const pageEntries = pages.map(({title, href, to}) => (
    <li key={href || to} className={!scrollspy && title === currentTitle ? styles.active : null}>
      {href
        ? <a href={href}>{title}</a>
        : <Link to={to}>{title}</Link>}
    </li>
  ));
  return scrollspy
    ? (
      <Scrollspy
        items={pages.map(({scrollspy}) => scrollspy)}
        currentClassName={styles.active}
        className={styles.navigation}
        offset={-100}>
        {pageEntries}
      </Scrollspy>
    )
    : (
      <ul className={styles.navigation} {...props}>
        {pageEntries}
      </ul>
    );
};