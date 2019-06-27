import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Image from '../components/image';
import styles from '../stylesheets/splitView.module.css';

export default () => (
  <Layout title="Nicht gefunden">
    <div className={styles.splitView}>
      <div>
        <h2>Nicht gefunden</h2>
        <p>Die angeforderte Seite konnte nicht gefunden werden. :(</p>
        <p><Link to="/">Zurück zur Startseite</Link></p>
      </div>
      <div style={{paddingTop: '20px'}}>
        <Image src="404.png" />
      </div>
      <div />
    </div>
  </Layout>
);