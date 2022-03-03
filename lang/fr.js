export default {
  global: {
    title: '@:hero.title.0 @:hero.title.1',
    EFA: 'Alliance Libre Européenne',
    language: 'Select your language',
    skip: 'Skip to main content',
    newwindow: '(Ouvre dans une nouvelle fenêtre)'
  },
  meta: {
    description: '@:hero.subtitle',
    thumbnail: '/ogimage_en.png',
    url: 'https://tenproposals.e-f-a.org/fr'
  },
  hero: {
    title: [
      'Façonner une Europe',
      'de tous les peuples',
    ],
    subtitle: '10 propositions pour la Conférence sur l\'avenir de l\'Europe',
    introduction: {
      paragraphs: [
        `La {0} ({1}) est l'occasion pour les Européens de {2}.
        L'{3} contribue à ce débat avec {4} pour une UE qui reflète véritablement la diversité culturelle du continent.`,
        `Nous vous invitons à lire, partager et commenter ces propositions,
        et à {0} sur la plateforme en ligne officielle #CoFoE ! {1}`
      ],
      emphasis: ['faire entendre leur voix', '10 propositions', 'les endosser'],
      conference: 'Conférence sur l\'avenir de l\'Europe',
      hashtags: ['#CoFoE', '#TheFutureIsYours'],
      EFA: '@:global.EFA'
    },
  },
  proposal: {
    support: 'Approuver la proposition',
    share: 'Partager',
    explainer: 'Comment approuver une proposition',
    seeall: 'Voir les 10 propositions',
    copy: 'Copier le lien',
    copied: 'Copié !',
    more_options: 'More options...',
  },
  explainer: {
    intro: 'Le processus d\'approbation d\'une proposition est le suivant',
    list: [
      "Tout d'abord, créez un compte « EU Login » en vous rendant sur {0} et en cliquant sur le lien pour vous inscrire.",
      'Suivez les instructions pour créer également un compte sur la plateforme CoFoE',
      'Accédez à la proposition que vous souhaitez soutenir en utilisant les liens sur cette page.',
      'Cliquez sur "Approuver" pour ajouter votre vote à la proposition. Vous pouvez également laisser un commentaire si vous le souhaitez.',
    ],
    translation: `
      La plateforme utilise la <strong>traduction automatique</strong>
      afin que vous puissiez participer dans n'importe quelle langue
      officielle de l'UE. Vous n'avez <strong>pas besoin d'être basé dans un
      État membre de l'UE</strong> pour faire une approbation ou un commentaire.`,
    thanks: 'Merci de participer au débat !'
  },
  footer: {
    euparl: 'With Financial Support of the European Parliament. The information on this website concerns only the author, the European Parliament is not responsible for the use and content of the information.',
    follow: 'Suivez-nous',
    contact: 'Contact',
    privacy: 'Politique de confidentialité'
  }
}
