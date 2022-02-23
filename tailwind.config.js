module.exports = {
  content: [],
  theme: {
    colors: {
      purple: '#80379b',
      orange: '#FA8269',
      white: '#ffffff',
      black: '#212529',
      transparent: 'transparent',
      gray: {
        light: '#f8f9fa',
        mid: '#777879'
      }
    },
    fontFamily: {
      sans: ['Geogrotesque', 'sans-serif']
    },
    extend: {
      fontSize: {
        title: 'calc(2.5rem + 2.5vw)',
        number: '15rem'
      },
      padding: {
        nav: '5rem'
      },
      width: {
        'logo-full': '6rem',
        'logo-mini': '3rem',
        'logo-full-lg': '8.25rem',
        'logo-mini-lg': '4.25rem'
      },
      maxWidth: {
        card: '30rem'
      },
      zIndex: {
        100: '100'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
