const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.{html,ts}',
    './projects/design/**/*.{html,ts}',
    './projects/shortcodes/**/*.{html,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      red: colors.red,
      orange: colors.orange,
      green: colors.green,
      gray: {
        '50': '#f5f5f5', 
        '100': '#ebebeb', 
        '200': '#cccccc', 
        '300': '#abb2bf', 
        '400': '#707070', 
        '500': '#333333', 
        '600': '#2e2e2e', 
        '700': '#262626', 
        '800': '#1f1f1f', 
        '900': '#0d1117'
      },
      primary: {
        light: '#55f3de',
        DEFAULT: '#4353FF',
        dark: '#1D242C'//, '#556af3',
      },
      color: 'var(--text)',
      'color-light': 'var(--text-light)',
      'color-shade': 'var(--text-shade)',
      danger: '#FF1616',
      code: 'var(--code)',
      canvas: {
        light: 'var(--canvas-light)',
        DEFAULT: 'var(--canvas)',
        shade: 'var(--canvas-shade)',
        opac: 'var(--canvas-opac)',
      },
    },
    extend: {
      colors: {},
      fontFamily: {
        sans: ['Mulish'],
      },
      backgroundImage: (theme) => ({
        'gradient-145': 'linear-gradient(145deg, var(--tw-gradient-stops))',
        'gradient-primary': `linear-gradient(145deg, ${theme(
          'colors.primary.light'
        )}, ${theme('colors.primary.DEFAULT')}, ${theme(
          'colors.primary.dark'
        )})`,
        'gradient-primary-inverse': `linear-gradient(-145deg, ${theme(
          'colors.primary.light'
        )}, ${theme('colors.primary.DEFAULT')}, ${theme(
          'colors.primary.dark'
        )})`,
      }),
      inset: {
        4: '1rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        24: '6rem',
        32: '8rem',
      },
      maxHeight: {
        248: '248px',
        384: '384px',
        524: '524px',
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      borderRadius: {
        xl: '22px',
      },
      minHeight: {
        18: '4.5rem',
        24: '6rem',
        80: '20rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: { color: theme('colors.color') },
            h2: { color: theme('colors.color') },
            h3: { color: theme('colors.color') },
            h4: { color: theme('colors.color') },
            h5: { color: theme('colors.color') },
            h6: { color: theme('colors.color') },
            strong: { color: theme('colors.color') },
            'ul li:before': {
              backgroundColor: theme('colors.color-light'),
            },
            'ol li:before': {
              color: theme('colors.color-light'),
            },
            a: {
              color: theme('colors.primary.DEFAULT'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.primary.light'),
              },
            },
            li: { color: theme('colors.color') },
            hr: { borderColor: theme('colors.color') },
            code: {
              paddingTop: theme('spacing[0.5]'),
              paddingBottom: theme('spacing[0.5]'),
              paddingRight: theme('spacing.1'),
              paddingLeft: theme('spacing.1'),
              marginRight: theme('spacing.[0.5]'),
              marginLeft: theme('spacing.[0.5]'),
              borderRadius: theme('borderRadius.md'),
              color: theme('colors.code'),
              backgroundColor: theme('colors.canvas.light'),
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              color: theme('colors.color'),
              backgroundColor: theme('colors.canvas.light'),
            },
            blockquote: {
              color: theme('colors.color'),
              borderLeftColor: theme('colors.color-light'),
            },
            'blockquote p:first-of-type::before': {
              content: '""',
            },
            'blockquote p:last-of-type::after': {
              content: '""',
            },
          },
        },
        toc: {
          css: {
            h2: { cursor: 'pointer' },
            'h2::before': {
              opacity: 0,
              content: '"#"',
              display: 'inline-block',
              marginLeft: '-18px',
              paddingRight: '2px',
              cursor: 'pointer',
              color: theme('colors.primary.light'),
            },
            'h2:hover::before': {
              opacity: 0.75,
            },
          },
        },
      }),
      screens: {
        xs: '256px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover'],
      cursor: ['hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
