import { Link } from 'gatsby';
import React from 'react';
import Navigation from './navigation';
import styles from '../stylesheets/header.module.css';
import blackLinksStyles from '../stylesheets/blackLinks.module.css';

export default ({ siteTitle }) => (
  <header className={`${styles.header} ${blackLinksStyles.blackLinks}`}>
    <div>
      <h1 className={styles.heading}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Navigation scrollspy pages={[
        { title: 'Vita', to: '/#vita', scrollspy: 'vita' },
        { title: 'Publikationen', to: '/#publikationen', scrollspy: 'publikationen' },
        { title: 'Portfolio', to: '/#portfolio', scrollspy: 'portfolio' },
        { title: 'Kontakt', to: '/#kontakt', scrollspy: 'kontakt' },
        { title: '🎵', href: 'https://music.elias-kuiter.de' }
      ]} />
    </div>
  </header>
);