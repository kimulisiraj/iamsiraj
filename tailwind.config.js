module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1em'
    },

    extend: {
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      },
      height: {
        '72': '18rem',
        '80': '20rem'
      },
      colors: {
        blue: '#4826D4',
        purple: '#301d55',
        'purple-light': '#CFA3FF',
        yellow: '#D4BF1F',
        red: '#CD4C48',
        pink: '#B12475'
      }
    },

    fontFamily: {
      'sans': ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Helvetica', 'Arial', 'sans-serif'],
      'serif': ['"IBM Plex Serif"', 'Georgia', 'Cambria']
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus']
  },
  plugins: []
}
