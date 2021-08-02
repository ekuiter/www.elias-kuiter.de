import React from 'react';
import {BreakpointsProvider} from 'react-with-breakpoints';
import Layout from '../components/layout';
import Image from '../components/image';
import Navigation from '../components/navigation';
import styles from '../stylesheets/index.module.css';
import layoutStyles from '../stylesheets/layout.module.css';
import { Link } from 'gatsby';
import vita from '../data/vita';
import awards from '../data/awards';
import portfolio from '../data/portfolio';
import tools from '../data/tools';
import loading from '../images/loading.gif';

const breakpoints = {
  small: 720,
  large: Infinity
}

const projectsPerRow = {
  small: 2,
  large: 3
}

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
        : <span dangerouslySetInnerHTML={{__html: title}}></span>}
      {meta
          ? <span>. {meta}.</span>
          : null}
    </td>
  </tr>
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

const Project = ({ title, href, image, onClick, active, isClient }) => (
  <li className={`${styles.project} ${active ? styles.active : ''}`} onClick={onClick}>
    {isClient
    ? <Image src={image} size="medium" />
    : <a href={href}>
        <Image src={image} title={title} size="medium" />
      </a>}
  </li>
);

const ProjectDescription = ({ title, subtitle, href, image, description, active }) => (
  <li className={`${styles.description} ${active ? styles.active : ''}`}>
    <div>
      <div className={styles.image}>
        <a href={href}>
          <Image src={image} size="large" />
        </a>
      </div>
      <h4>
        <a href={href}>
          <span>{title}</span> <span>{subtitle}</span>
        </a>
      </h4>
      {description &&
        <div className={styles.inner}>
          {description}
        </div>}
      <div style={{clear: 'both'}} />
    </div>
  </li>
);

const projectKey = ({title, href}) => title + href;

const Tool = ({ title, href, image, className }) => (
  <li className={className}>
    {href
      ? <a href={href}><Image src={image} title={title} size="small" /></a>
      : <Image src={`tools/${image}`} title={title} size="small" />}
  </li>
);

export default class extends React.Component {
  state = {
    isClient: false,
    activeProjectKey: null,
    breakpoint: typeof window !== `undefined`
      ? window.innerWidth <= breakpoints.small ? 'small' : 'large'
      : null,
    bib: null
  };

  onProjectClick = project => () =>
    this.setState(({activeProjectKey}) => {
      if (activeProjectKey === null)
        return {activeProjectKey: projectKey(project)};

      if (activeProjectKey !== projectKey(project)) {
        //window.setTimeout(() => {
        //  this.setState({activeProjectKey: projectKey(project)});
        //}, 50);
        return {activeProjectKey: projectKey(project)};
      }
      return {activeProjectKey: null};
    });

  onBreakpointChange = breakpoint =>
    this.setState({breakpoint});

  componentDidMount() {
    window.addEventListener('beforeunload', () => {
      if (this.state.activeProjectKey)
        sessionStorage.setItem('activeProjectKey', this.state.activeProjectKey);
      else
        sessionStorage.removeItem('activeProjectKey');
    });

    const pathName = document.location.pathname;
    const element = window.location.hash && document.querySelector(window.location.hash);
    if (window.scrollTo && element)
      window.scrollTo(0, element.offsetTop);
    else if (sessionStorage["scrollPosition_" + pathName])
      window.scrollTo(0, parseInt(sessionStorage.getItem("scrollPosition_" + pathName)));

    const newState = {isClient: true};
    if (sessionStorage['activeProjectKey'])
      newState.activeProjectKey = sessionStorage['activeProjectKey'];
    this.setState(newState);

    window.fetch("/bib.php")
      .then(res => res.text())
      .then(res => this.setState({bib: res.replaceAll("<br />&nbsp;", "").replaceAll("rgb(0, 104, 180)", "#dee1f9")}));
  }

  render() {
    const projects = portfolio
      .sort(({year: yearA, title: titleA}, {year: yearB, title: titleB}) =>
        (yearB + titleB).localeCompare(yearA + titleA));
    const projectComponents = projects.map(project =>
      <Project key={projectKey(project)} {...project} onClick={this.onProjectClick(project)}
        active={this.state.activeProjectKey === projectKey(project)} isClient={this.state.isClient} />);

    if (this.state.isClient) {
      const _projectsPerRow = projectsPerRow[this.state.breakpoint];
      for (var i = 0; i < projects.length; i++) {
        const projectDescriptionIndex = (Math.floor(i / _projectsPerRow) + 1) * _projectsPerRow;
        projectComponents.splice(i + projectDescriptionIndex, 0,
          <ProjectDescription key={projectKey(projects[i]) + '_description'} {...projects[i]}
            active={this.state.activeProjectKey === projectKey(projects[i])} />);
      }
    }

    return (
      <Layout className={layoutStyles.paddedHeaders}>
        <BreakpointsProvider
          breakpoints={breakpoints}
          onBreakpointChange={this.onBreakpointChange} />
        <section>
          <div className={layoutStyles.space} />
          <Image src="ich.jpg" fixed alt="Foto Elias"
            style={{float: 'right', margin: '0 0 15px 15px', border: '1px solid #888'}} />
    
          <p>
            <strong>Hi! Mein Name ist Elias, ich bin 24 Jahre alt und ich studiere Informatik in Magdeburg.</strong>
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
            In meiner Freizeit erstelle ich ab und zu Klaviernoten zu Liedern, die auf meinem <a href="https://youtube.com/ekuiter">YouTube-Kanal</a>
            {' '}
            und meiner <a href="https://piano.elias-kuiter.de">Piano-Webseite</a> zu sehen sind. Über einen Besuch würde ich mich freuen!
          </p>
        </section>
    
        <section id="vita">
          <h3>Vita</h3>
          <table>
            <tbody>
              {vita.map(vitaEntry => <VitaEntry key={vitaEntry.title + vitaEntry.href} {...vitaEntry} />)}
            </tbody>
          </table>
        </section>
    
        <section id="publikationen">
          <h3>Publikationen</h3>

          {this.state.bib
          ? <div dangerouslySetInnerHTML={{__html: this.state.bib}}></div>
          : <img src={loading} alt="Wird geladen ..." />}
        </section>
    
        <section>
          <h3>Auszeichnungen &amp; Förderung</h3>
          <ul>
            {awards.map(award => <Award key={award.title + award.href} {...award} />)}
          </ul>
        </section>
    
        <section id="portfolio">
          <h3>Portfolio</h3>
    
          <p>
            Hier sehen Sie eine Auswahl meiner Projekte &#8211; um mehr zu erfahren, einfach eines anklicken.
          </p>
    
          <ul className={styles.portfolio}>
            {projectComponents}
          </ul>
        </section>
        
        <section>
          <h3>Technologien</h3>
    
          <p>
            Für die technische Umsetzung meiner Projekte verwende ich unter anderem folgende Technologien und Werkzeuge:
          </p>
    
          <ul className={styles.tools}>
            {tools.map(tool => <Tool key={tool.title + tool.href} {...tool} />)}
          </ul>
        </section>
    
        <section id="kontakt">
          <h3>Kontakt</h3>
    
          <p>
            Haben Sie eine Frage zu einem meiner Projekte oder ein anderes Anliegen?
            Sie erreichen mich per E-Mail über <a href="mailto:kuiter@ovgu.de">kuiter@ovgu.de</a>.
          </p>
        </section>
    
        <section>
          <h3>Siehe auch</h3>
    
          <Navigation style={{float: 'none'}} pages={[
              { title: 'GitHub', href: 'https://github.com/ekuiter' },
              { title: 'Twitter', href: 'https://twitter.com/ekuiter' },
              { title: 'YouTube', href: 'https://youtube.com/ekuiter' },
              { title: 'Klaviernoten', href: 'https://piano.elias-kuiter.de' }
            ]} />
        </section>
      </Layout>
    );
  }
};