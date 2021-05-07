import React from 'react';

const bullet = <span style={{padding: '0 6px'}}>•</span>;

const description = (links, description) => (
  <>
    <p>
      {links
        .map(([href, title]) => <a key={href} href={href}>{title}</a>)
        .reduce((acc, val) => [acc, bullet, val])}
    </p>
    <p>{description}</p>
  </>
);

export default [
  {
    title: 'HCP-Technology',
    year: 2010,
    subtitle: '2010: Redesign der Webseite',
    href: 'https://hcp-technology.com',
    image: 'hcp-technology.jpg',
    description: description(
      [
        ['https://hcp-technology.com', 'Webauftritt von HCP-Technology']
      ], (
          <>
            HCP-Technology ist Ihr zuverlässiger Partner für temperaturgeführten Transport.
            Die Website informiert in den drei Bereichen Mikrobiologie, Medizin und Landwirtschaft
            über die Produkte von HCP-Technology.
          </>
      )
    )
  },

  {
    title: 'Wilmering',
    year: 2011,
    subtitle: '2011: Redesign der Webseite',
    href: 'https://automaten-wilmering.de',
    image: 'wilmering.jpg',
    description: description(
      [
        ['https://automaten-wilmering.de', 'Webauftritt von Wilmering']
      ], (
          <>
            Snacks oder Getränke verkaufen - mit Automaten von Wilmering.
            Die Firma Wilmering ist Großhändler für gebrauchte Verkaufsautomaten und hat sich auf deren Wiederaufbereitung spezialisiert.
          </>
      )
    )
  },

  {
    title: 'Ebersuche Weser-Ems',
    year: 2012,
    subtitle: '2012: Entwicklung der App',
    href: 'https://play.google.com/store/apps/details?id=ek.ebersuche&hl=de',
    image: 'ebersuche.jpg',
    description: description(
      [
        ['https://play.google.com/store/apps/details?id=ek.ebersuche&hl=de', 'App bei Google Play'],
        ['https://schweinebesamung.de/ebersuche/', 'Online-Suche']
      ], (
          <>
            Die Ebersuche der Schweinebesamung Weser-Ems ermöglicht Ihnen den schnellen Zugriff auf alle Eberdaten.
            Nutzen Sie unterwegs einfach die Android-App.
            Als PC-Nutzer können Sie auch ohne die App direkt online nach Ebern suchen.
          </>
      )
    )
  },

  {
    title: 'Wilmering',
    year: 2013,
    subtitle: '2013: Entwicklung der Datenbank',
    href: 'http://db.automaten-wilmering.de',
    image: 'wilmering-datenbank.jpg',
    description: description(
      [
        ['http://db.automaten-wilmering.de', 'Automaten-Datenbank']
      ], (
          <>
            Die Automaten-Datenbank ermöglicht den einfachen Zugriff auf das gesamte Angebot der Firma Wilmering.
            Sie können direkt nach einem bestimmten Automaten suchen oder alle Automaten nach bestimmten Kriterien filtern.
          </>
      )
    )
  },

  {
    title: 'uvr2web',
    year: 2013,
    subtitle: '2013: Entwicklung der Firmware und App',
    href: 'https://uvr2web.de',
    image: 'uvr2web.jpg',
    description: description(
      [
        ['https://uvr2web.de', 'Projekt-Webseite'],
        ['http://uvr2web.elias-kuiter.de/?demo', 'Online-Demo'],
        ['https://github.com/ekuiter/uvr2web-spl', 'Quelltext auf GitHub']
      ], (
          <>
            uvr2web ist eine Arduino-Software zur Überwachung deiner UVR1611-Heizungsregelung.
            Es kann Temperaturdaten visualisieren, diese auf deinem PC oder Smartphone darstellen und vieles mehr.
          </>
      )
    )
  },
  
  {
    title: 'TempLog',
    year: 2013,
    subtitle: '2013: Entwicklung der Firmware und App',
    href: 'http://log.hcp-technology.com',
    image: 'templog.png',
    description: description(
      [
        ['http://log.hcp-technology.com', 'Projekt-Webseite'],
        ['https://play.google.com/store/apps/details?id=ek.hcp.templog&hl=de', 'App bei Google Play']
      ], (
          <>
            TempLog erfasst die Temperaturdaten Ihrer Kühlgeräte von HCP-Technology und Dometic und stellt diese schnell und einfach grafisch dar.
            Die App ist für Windows und Android verfügbar.
          </>
      )
    )
  },

  {
    title: 'Marias Bilder',
    year: 2013,
    subtitle: '2013: Design der Webseite',
    href: 'http://www.marias-bilder.de',
    image: 'marias-bilder.jpg',
    description: description(
      [
        ['http://www.marias-bilder.de', 'Webauftritt von Maria Kuiter'],
        ['https://github.com/ekuiter/marias-bilder', 'Quelltext auf GitHub']
      ], (
          <>
            Stöbern Sie auf Maria Kuiters Webseite für kreative Wohnideen, Digital Art, Zentangle und vieles mehr.
          </>
      )
    )
  },
  
  {
    title: 'Ferienwohnung auf Ameland',
    year: 2015,
    subtitle: '2015: Redesign der Webseite',
    href: 'http://ameland-fewo.de',
    image: 'ameland-fewo.jpg',
    description: description(
      [
        ['http://ameland-fewo.de', 'Webauftritt der Ferienwohnung']
      ], (
          <>
            Suchen Sie eine Ferienwohnung auf Ameland? Vielleicht werden Sie bei dieser Wohnung für 5 Personen in Buren fündig. Buchen Sie Ihren Urlaub direkt online - Belegungsplan inklusive.
          </>
      )
    )
  },

  {
    title: 'Meine Piano-Webseite',
    year: 2016,
    subtitle: '2016: Design der Webseite',
    href: 'https://piano.elias-kuiter.de',
    image: 'elias-kuiter-piano.jpg',
    description: description(
      [
        ['https://piano.elias-kuiter.de', 'Piano-Webseite'],
        ['https://github.com/ekuiter/elias-kuiter-de-piano', 'Quelltext auf GitHub'],
        ['https://www.youtube.com/watch?v=F50deTQaGV4', 'Ein Beispiel! 🎵']
      ], (
          <>
            Auf dieser Webseite veröffentliche ich Klaviernoten von AURORA, Florence + The Machine und verschiedenen Computerspielen zum kostenfreien Download.
          </>
      )
    )
  },

  {
    title: 'UnnamedOS',
    year: 2016,
    subtitle: '2016: Entwicklung des Betriebssystems',
    href: 'https://github.com/ekuiter/UnnamedOS',
    image: 'unnamedos.png',
    description: description(
      [
        ['https://github.com/ekuiter/UnnamedOS', 'Projekt-Webseite'],
        ['http://ekuiter.github.io/UnnamedOS', 'Dokumentation'],
        ['https://github.com/ekuiter/UnnamedOS/releases/latest', 'Im Emulator testen']
      ], (
          <>
            Dies ist ein einfaches Betriebssystem mit grundlegenden Features wie Interrupts, Paging und Multitasking.
            Ziel war es, die wesentlichen Aspekte der x86-Architektur zu erlernen und beispielhaft in gut dokumentiertem Quellcode zu implementieren.
          </>
      )
    )
  },

  {
    title: 'moviz',
    year: 2017,
    subtitle: '2017: Entwicklung der App',
    href: 'https://github.com/ekuiter/moviz',
    image: 'moviz.png',
    description: description(
      [
        ['https://github.com/ekuiter/moviz', 'Projekt-Webseite'],
        ['https://github.com/ekuiter/moviz/releases/latest', 'Download für macOS']
      ], (
          <>
            "Woher kenne ich nochmal diesen Schauspieler? Warum kommt mir diese Stimme so bekannt vor?"
            Serien- und Filmfans mit Forscherdrang kennen diese und ähnliche Fragen, die moviz mit einer Mind-Map-Visualisierung beantworten kann.
          </>
      )
    )
  },

  {
    title: 'PCLocator',
    year: 2018,
    subtitle: '2018: Entwicklung der Toolsuite',
    href: 'https://github.com/ekuiter/PCLocator',
    image: 'pclocator.png',
    description: description(
      [
        ['https://github.com/ekuiter/PCLocator', 'Projekt-Webseite'],
        ['http://wwwiti.cs.uni-magdeburg.de/iti_db/publikationen/ps/auto/KuiterKK+2018:SPLC:challenge.pdf', 'Paper']
      ], (
          <>
            Der PCLocator unterstützt die Analyse von präprozessorbasiertem Programmcode in variablen Softwaresystemen.
            Dazu leitet die Toolsuite Konfigurationen aus einem Feature-Modell und Programmcode ab, die eine gegebene Codezeile enthalten.
          </>
      )
    )
  },

  {
    title: 'variED',
    year: 2019,
    subtitle: '2019: Bachelorarbeit und Prototyp',
    href: 'https://github.com/ekuiter/variED',
    image: 'varied.jpg',
    description: description(
      [
        ['https://github.com/ekuiter/variED', 'Projekt-Webseite'],
        ['http://varied.herokuapp.com', 'Online-Demo'],
        ['http://wwwiti.cs.uni-magdeburg.de/iti_db/publikationen/ps/auto/Kuiter2019:BachelorThesis.pdf', 'Bachelorarbeit']
      ], (
          <>
            variED ist ein Forschungsprototyp zur kollaborativen Feature-Modellierung, der im Rahmen meiner Bachelorarbeit entstanden ist.
            Mit variED können Feature-Modelle in Echtzeit gemeinsam im Browser bearbeitet werden, ähnlich wie bei Google Docs.
          </>
      )
    )
  },
  
  {
    title: 'Pignap',
    year: 2020,
    subtitle: '2020: Entwicklung der Firmware und App',
    href: 'http://pignap.com',
    image: 'pignap.jpg',
    description: description(
      [
        ['http://pignap.com', 'Artikel im Shop'],
        ['https://www.youtube.com/watch?v=C_pEEuA6Ljc', 'YouTube-Video'],
        ['https://play.google.com/store/apps/details?id=com.pignap', 'App'],
        ['https://www.bundesregierung.de/breg-de/suche/wichtiger-schritt-zu-mehr-tierschutz-1608074', 'Hintergrund']
      ], (
          <>
            Ab dem 1. Januar 2021 ist die betäubungslose Ferkelkastration in Deutschland verboten.
            Pignap stellt eine Alternative dar und ermöglicht durch die Inhalationsnarkose mit Isofluran die wirksame Schmerzausschaltung bei der Ferkelkastration.
          </>
      )
    )
  }
];