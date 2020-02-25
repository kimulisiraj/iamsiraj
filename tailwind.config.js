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
    fontSize: ['responsive', 'hover', 'focus'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'group-hover', 'hover', 'focus'],
    fontSize: ['responsive', 'group-hover', 'hover', 'focus'],
    transitionDuration: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionProperty: ['responsive', 'hover', 'focus', 'group-hover'],
    transitionTimingFunction: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    rotate: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    margin: ['responsive', 'hover', 'focus', 'group-hover']
  },
  plugins: []
}
