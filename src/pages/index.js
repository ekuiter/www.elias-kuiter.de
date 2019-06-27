import React from 'react';
import Layout from '../components/layout';
import Image from '../components/image';
import Navigation from '../components/navigation';
import styles from '../stylesheets/index.module.css';
import layoutStyles from '../stylesheets/layout.module.css';
import { Link } from 'gatsby';
import vita from '../data/vita';
import publications from '../data/publications';
import awards from '../data/awards';
import portfolio from '../data/portfolio';
import tools from '../data/tools';

const VitaEntry = ({ from, to, title, href, meta }) => (
  <tr>
    <td>
      {to
        ? from
          ? <span>{from} &#8211; {to}</span>
          : <span>bis {to}</span>
        : <span>ab {from}</span>}
    </td>
    <td>
      {href
        ? <a href={href}>{title}</a>
        : title}
      {meta
          ? <span>. {meta}.</span>
          : null}
    </td>
  </tr>
);

const Publication = ({ authors, title, href, publishedIn, meta }) => (
  <li>
    {authors}.
    {' '}
    {href
      ? <span><a href={href}>{title}</a>.</span>
      : <span>{title}.</span>}
    {' '}
    {publishedIn
        ? <span>In <em>{publishedIn}</em>, {meta}.</span>
        : meta
            ? <span>{meta}.</span>
            : null}
  </li>
);

const Award = ({ title, href, meta }) => (
  <li>
    {href
      ? <a href={href}>{title}</a>
      : title}
    {meta
        ? <span>. {meta}.</span>
        : null}
  </li>
);

const Project = ({ title, href, image, year }) => (
  <li>
    {href
      ? <a href={href}><Image src={image} title={`${title} (${year})`} size="medium" /></a>
      : <Image src={`projects/${image}`} title={title} size="medium" />}
  </li>
);

const Tool = ({ title, href, image, className }) => (
  <li className={className}>
    {href
      ? <a href={href}><Image src={image} title={title} size="small" /></a>
      : <Image src={`tools/${image}`} title={title} size="small" />}
  </li>
);

export default () => (
  <Layout className={layoutStyles.paddedHeaders}>
    <section>
      <div className={layoutStyles.space} />
      <Image src="ich.jpg" fixed alt="Foto Elias" style={{float: 'right', margin: '0 0 15px 15px', border: '1px solid #888'}} />

      <p>
        <strong>Hi! Mein Name ist Elias, ich bin 22 Jahre alt und ich studiere Informatik in Magdeburg.</strong>
      </p>

      <p>
        Ich erstelle Ihre individuelle Web- oder Softwarelösung, zum Beispiel eine Webseite oder App.
        Setzen Sie sich dazu einfach mit mir <Link to="/#kontakt">in Verbindung</Link>.
        Oder Sie stöbern zunächst ein wenig in meinem <Link to="/#portfolio">Portfolio</Link>.
      </p>

      <p>
        In der Informatik interessieren mich vor allem Themen des Software Engineering, unter anderem Software-Produktlinien.
        Mehr dazu lesen Sie in meinen <Link to="/#publikationen">Publikationen</Link>.
        Außerdem betreue ich einige Open-Source-Projekte wie den Heizungs-Datenlogger <a href="https://uvr2web.de">uvr2web</a>
        {' '}
        und den kollaborativen Feature-Modell-Editor <a href="https://github.com/ekuiter/variED">variED</a>.
      </p>

      <p>
        In meiner Freizeit lese ich gern und spiele Klavier.
        Ab und zu erstelle ich Klaviernoten zu Liedern, die auf meinem <a href="https://youtube.com/ekuiter">Youtube-Kanal</a>
        {' '}
        und meiner <a href="https://piano.elias-kuiter.de">Piano-Webseite</a> zu sehen sind. Über einen Besuch würde ich mich freuen!
      </p>
    </section>

    <section id="vita">
      <h3>Vita</h3>
      <table>
        <tbody>
          {vita.map((vitaEntry, idx) => <VitaEntry key={idx} {...vitaEntry} />)}
        </tbody>
      </table>
    </section>

    <section id="publikationen">
      <h3>Publikationen</h3>
      <ul>
        {publications.map((publication, idx) => <Publication key={idx} {...publication} />)}
      </ul>
    </section>

    <section>
      <h3>Auszeichnungen &amp; Förderung</h3>
      <ul>
        {awards.map((awards, idx) => <Award key={idx} {...awards} />)}
      </ul>
    </section>

    <section id="portfolio">
      <h3>Portfolio</h3>

      <p>
        Hier sehen Sie eine Auswahl meiner Projekte &#8211; um mehr zu erfahren, einfach eines anklicken.
      </p>

      <ul className={styles.portfolio}>
        {portfolio
          .sort(({year: yearA}, {year: yearB}) => yearB - yearA)
          .map((project, idx) => <Project key={idx} {...project} />)}
      </ul>
    </section>
    
    <section>
      <h3>Technologien</h3>

      <p>
        Für die technische Umsetzung meiner Projekte verwende ich unter anderem folgende Technologien und Werkzeuge:
      </p>

      <ul className={styles.tools}>
        {tools.map((tool, idx) => <Tool key={idx} {...tool} />)}
      </ul>
    </section>

    <section id="kontakt">
      <h3>Kontakt</h3>

      <p>
        Haben Sie eine Frage zu einem meiner Projekte oder ein anderes Anliegen?
        Dann kontaktieren Sie mich über das folgende Formular &#8211;
        oder senden Sie mir eine E-Mail an <a href="mailto:info@elias-kuiter.de">info@elias-kuiter.de</a>.
      </p>

      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <input type="email" name="email" placeholder="Ihre E-Mail-Adresse" required />
        <textarea name="message" placeholder="Ihre Nachricht" required />
        <input type="checkbox" name="consent" id="consent" required />
        <label for="consent">
          Mit der Nutzung dieses Formulars erklären Sie sich mit der Speicherung und Verarbeitung
          Ihrer Daten durch diese Website einverstanden.
        </label>
        <input type="submit" value="Abschicken" />
      </form>
    </section>

    <section>
      <h3>Siehe auch</h3>

      <Navigation style={{float: 'none'}} pages={[
          { title: 'GitHub', href: 'https://github.com/ekuiter' },
          { title: 'YouTube', href: 'https://youtube.com/ekuiter' },
          { title: 'Klaviernoten', href: 'https://piano.elias-kuiter.de' }
        ]} />
    </section>
  </Layout>
);