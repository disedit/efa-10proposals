export default {
  global: {
    title: '@:hero.title.0 @:hero.title.1',
    EFA: 'Alianza Libre Europea',
    language: 'Selecciona tu idioma',
    skip: 'Saltar al contenido principal',
    newwindow: '(se abre en una nueva ventana)'
  },
  meta: {
    description: '@:hero.subtitle',
    thumbnail: '/ogimage_en.png',
    url: 'https://efa-10proposals.netlify.app/es'
  },
  hero: {
    title: [
      'Construyendo la Europa',
      'de Todos los Pueblos',
    ],
    subtitle: '10 Propuestas para la Conferencia sobre el Futuro de Europa',
    introduction: {
      paragraphs: [
        `La {0} ({1}) es una oportunidad para que la ciudadanía europea
        pueda {2}. La {3} aporta {4} a este debate con el fin de que
        la UE sea fiel reflejo de la diversidad cultural del continente.`,
        `Les invitamos a leer, compartir y comentar dichas propuestas
        y a {0} en la Plataforma en línea oficial #CoFoE. {1}`
      ],
      emphasis: ['hacer oír su voz', '10 proposals', 'suscribirlas'],
      conference: 'Conferencia sobre el Futuro de Europa',
      hashtags: ['#CoFoE', '#TheFutureIsYours'],
      EFA: '@:global.EFA'
    },
  },
  proposal: {
    support: 'Suscribir la propuesta',
    share: 'Compartir',
    explainer: 'Cómo suscribir una propuesta',
    seeall: 'Ver todas las 10 propuestas',
    copy: 'Copiar enlace',
    copied: '¡Copiado!'
  },
  explainer: {
    intro: 'El proceso para subir las propuestas es el siguiente:',
    list: [
      'Primero, registrarse en la cuenta “EU Login” entrando en {0} y pulsando en el enlace para inscribirse.',
      'Seguir las instrucciones para crear una cuenta en la plataforma de la CoFoE.',
      'Navegar siguiendo los vínculos indicados en la página hasta llegar a la propuesta que quiera apoyar.',
      'Pulse ‘Adherirse’ para añadir su voto a la propuesta. También puede dejar un comentario si lo desea.',
    ],
    translation: 'La Plataforma cuenta con <strong>traducción automática</strong> de tal forma que usted puede participar en cualquiera de los idiomas oficiales de la UE. <strong>Aunque no resida en un país miembro de la UE es posible</strong> apoyar las propuestas o hacer comentarios.',
    thanks: '¡Gracias por participar en este debate!'
  },
  footer: {
    euparl: 'With Financial Support of the European Parliament. The information on this website concerns only the author, the European Parliament is not responsible for the use and content of the information.',
    follow: 'Síguenos',
    contact: 'Contacta',
    privacy: 'Política de privacidad Policy'
  }
}
