import React from 'react';
import Navigation from './navigation';
import styles from '../stylesheets/footer.module.css';
import blackLinksStyles from '../stylesheets/blackLinks.module.css';

export default ({ title }) => (
  <footer className={`${styles.footer} ${blackLinksStyles.blackLinks}`}>
    <div>
      &copy; {new Date().getFullYear()} Elias Kuiter
      <Navigation currentTitle={title} pages={[
          { title: 'Datenschutz', to: '/datenschutz' },
          { title: 'Impressum', to: '/impressum' }
        ]} />
    </div>
  </footer>
);