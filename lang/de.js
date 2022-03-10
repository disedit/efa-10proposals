export default {
  global: {
    title: '@:hero.title.0 @:hero.title.1',
    EFA: 'Europäische Freie Allianz',
    language: 'Select your language',
    skip: 'Skip to main content',
    newwindow: '(Öffnet in einem neuen Fenster)'
  },
  meta: {
    description: '@:hero.subtitle',
    thumbnail: '/ogimage_en.png',
    url: 'http://tenproposals.e-f-a.org/de'
  },
  hero: {
    title: [
      'Für ein Europa',
      'aller Völker',
    ],
    subtitle: '10 Vorschläge für die Konferenz zur Zukunft Europas',
    introduction: {
      paragraphs: [
        `Die {0} ({1}) ist eine Gelegenheit für alle Europäer, {2}.
        Die {3} leistet einen Beitrag zur Debatte in Form von {4} für eine EU,
        die die wahre kulturelle Vielfalt des Kontinents widerspiegelt.`,
        `Wir laden Sie ein, diese Vorschläge zu lesen, zu teilen,
        zu kommentieren und sie auf der offiziellen #CoFoE Website
        zu {0}! {1}`
      ],
      emphasis: ['sich Gehör zu verschaffen', '10 Vorschlägen', 'unterstützen'],
      conference: 'Konferenz zur Zukunft Europas',
      hashtags: ['#CoFoE', '#TheFutureIsYours'],
      EFA: '@:global.EFA'
    },
  },
  proposal: {
    support: 'Vorschlag unterstützen',
    share: 'Teilen',
    explainer: 'Wie man einen Vorschlag unterstützt',
    seeall: 'Alle 10 Vorschläge anzeigen',
    copy: 'Link kopieren',
    copied: 'Kopiert!',
    more_options: 'More options...',
  },
  explainer: {
    intro: 'So unterstützt man einen Vorschlag:',
    list: [
      'Richten Sie zunächst ein “EU-Login”-Konto ein. Folgen Sie diesem Link und befolgen Sie die weiteren Anweisungen: {0}',
      'Richten Sie auch ein Konto auf der Konferenz-Plattform ein.',
      'Navigieren Sie über die auf der Seite angegebenen Links zu dem Vorschlag, den Sie unterstützen möchten.',
      'Klicken Sie auf “Unterstützen”, um Ihre Unterstützung des Vorschlages zu bekunden. Wenn Sie möchten, können Sie auch einen Kommentar hinterlassen.',
    ],
    translation: `Die Plattform benutzt eine <strong>automatische Übersetzung</strong>.
      Sie können deshalb jede EU-Amtssprache verwenden.
      <strong>Sie müssen nicht in einem EU-Mitgliedstaat ansässig sein</strong>,
      um eine Anregung zu geben oder einen Kommentar zu hinterlassen.`,
    thanks: 'Danke, dass Sie Teil der Debatte sind!'
  },
  footer: {
    euparl: 'With Financial Support of the European Parliament. The information on this website concerns only the author, the European Parliament is not responsible for the use and content of the information.',
    follow: 'Folge uns',
    contact: 'Kontakt',
    privacy: 'Datenschutzbestimmungen'
  }
}
