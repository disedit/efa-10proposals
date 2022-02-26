export default {
  global: {
    title: '@:hero.title.0 @:hero.title.1',
    EFA: 'Alianza Libera Europea',
    language: 'Select your language',
    skip: 'Skip to main content',
    newwindow: '(opens in a new window)'
  },
  meta: {
    description: '@:hero.subtitle',
    thumbnail: '/ogimage_en.png',
    url: 'https://efa-10proposals.netlify.app/it'
  },
  hero: {
    title: [
      'Costruire un’Europa',
      'di tutti i popoli',
    ],
    subtitle: '10 proposte per la Conferenza sul Futuro dell’Europa',
    introduction: {
      paragraphs: [
        `La {0} ({1}) è un’opportunità per gli Europei di {2}. La {3} sta contribuendo a questo dibattito con {4} per un Unione Europea che riflette veramente la diversità culturale del continente.`,
        `Vi invitiamo a leggere, condividere e commentare le proposte, e {0} sulla piattaforma ufficiale online #CoFoE! {1}`
      ],
      emphasis: ['far sentire la propria voce', '10 proposte', 'sottoscriverle'],
      conference: 'conferenza sul Futuro dell’Europa',
      hashtags: ['#CoFoE', '#TheFutureIsYours'],
      EFA: '@:global.EFA'
    },
  },
  proposal: {
    support: 'Endorse Proposal',
    share: 'Share',
    explainer: 'How to endorse a proposal',
    seeall: 'See all 10 proposals',
    copy: 'Copy Link',
    copied: 'Copied!'
  },
  explainer: {
    intro: 'Per sottoscrivere una proposta:',
    list: [
      'Registrare un account “EU Login” andando sul sito {0} e cliccare sul link per registrarsi',
      'Seguire le istruzioni per la creazione di un account sulla piattaforma CoFoE',
      'Cliccare sulla proposta che si vuole sottoscrivere usando i link su questa pagina',
      'Cliccare ‘Sottoscrivi’ per aggiungere il tuo voto alla proposta. Puoi anche lasciare un commento, se desideri',
    ],
    translation: 'La piattaforma usa <strong>traduzione automatica</strong>: puoi partecipare in qualsiasi lingua ufficiale dell’UE. <strong>Non c’è bisogno che tu sia residente in uno stato membro dell’EU</strong> per sottoscrivere o commentare.',
    thanks: 'Grazie per essere parte del dibattito!'
  },
  footer: {
    euparl: 'With Financial Support of the European Parliament. The information on this website concerns only the author, the European Parliament is not responsible for the use and content of the information.',
    follow: 'Follow us',
    contact: 'Contact',
    privacy: 'Privacy Policy'
  }
}
