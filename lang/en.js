export default {
  global: {
    title: '@:hero.title.0 @:hero.title.1',
    EFA: 'European Free Alliance',
    language: 'Select your language',
    skip: 'Skip to main content',
    newwindow: '(opens in a new window)'
  },
  meta: {
    description: '@:hero.subtitle',
    thumbnail: '/ogimage_en.png',
    url: 'https://efa-10proposals.netlify.app'
  },
  hero: {
    title: [
      'Shaping a Europe',
      'of All Peoples',
    ],
    subtitle: '10 Proposals for the Conference on the Future of Europe',
    introduction: {
      paragraphs: [
        `The {0} ({1}) is an opportunity for Europeans to {2}.
        The {3} is contributing to this debate with {4} for an EU that
        truly reflects the continent’s cultural diversity.`,
        `We invite you to read, share and comment on these proposals,
        and to {0} them on the official #CoFoE online platform! {1}`
      ],
      emphasis: ['make their voices heard', '10 proposals', 'endorse'],
      conference: 'Conference on the Future of Europe',
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
    intro: 'The process of endorsing a proposal is as follows:',
    list: [
      'First, register an “EU Login” account by going to {0} and clicking the link to register.',
      'Follow the instructions to also set up an account on the CoFoE platform.',
      'Navigate to the proposal you want to support by using the links on this page.',
      'Click ‘Endorse’ to add your vote to the proposal. You can also leave a comment if you wish.',
    ],
    translation: 'The platform uses <strong>automatic translation</strong> so you can participate in any EU official language. You <strong>do not need to be based in an EU member state</strong> to make an endorsement or comment.',
    thanks: 'Thank you for being part of the debate!'
  },
  footer: {
    euparl: 'With Financial Support of the European Parliament. The information on this website concerns only the author, the European Parliament is not responsible for the use and content of the information.',
    follow: 'Follow us',
    contact: 'Contact',
    privacy: 'Privacy Policy'
  }
}
