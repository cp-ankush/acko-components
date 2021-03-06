module.exports = {
  prefix: 'acko-',
  purge: false,
  darkMode: false, // or 'media' or 'class',
  theme: {
    screens: {
      mobile: { max: '599px' },
      tablet: { min: '600px', max: '899px' },
      'small-desktop': { min: '900px', max: '1199px' },
      'medium-desktop': { min: '1200px', max: '1799px' },
      'large-desktop': { min: '1800px' },
    },
    colors: {
      brand: 'var(--acko-color_brand)',
      'brand-pro': 'var(--acko-color_brand-pro)',
      'brand-digital': {
        'light-1': 'var(--acko-color_brand-digital-light-1)',
        'light-2': 'var(--acko-color_brand-digital-light-2)',
        'light-3': 'var(--acko-color_brand-digital-light-3)',
        DEFAULT: 'var(--acko-color_brand-digital)',
        'dark-1': 'var(--acko-color_brand-digital-dark-1)',
        'dark-2': 'var(--acko-color_brand-digital-dark-2)',
      },
      green: {
        'light-1': 'var(--acko-color_green-light-1)',
        'light-2': 'var(--acko-color_green-light-2)',
        'light-3': 'var(--acko-color_green-light-3)',
        DEFAULT: 'var(--acko-color_green)',
        'dark-1': 'var(--acko-color_green-dark-1)',
        'dark-2': 'var(--acko-color_green-dark-2)',
      },
      white: 'var(--acko-color_white)',
      grey: {
        'light-1': 'var(--acko-color_grey-light-1)',
        'light-2': 'var(--acko-color_grey-light-2)',
        'light-3': 'var(--acko-color_grey-light-3)',
        'light-4': 'var(--acko-color_grey-light-4)',
        DEFAULT: 'var(--acko-color_grey)',
        'dark-1': 'var(--acko-color_grey-dark-1)',
        'dark-2': 'var(--acko-color_grey-dark-2)',
        'dark-3': 'var(--acko-color_grey-dark-3)',
      },
      black: 'var(--acko-color_black)',
      success: 'var(--acko-color_success)',
      info: 'var(--acko-color_info)',
      warning: 'var(--acko-color_warning)',
      danger: 'var(--acko-color_danger)',
      yellow: {
        'light-1': 'var(--acko-color_yellow-light-1)',
        'light-2': 'var(--acko-color_yellow-light-2)',
        DEFAULT: 'var(--acko-color_yellow)',
      },
      orange: {
        'light-1': 'var(--acko-color_orange-light-1)',
        'light-2': 'var(--acko-color_orange-light-2)',
        DEFAULT: 'var(--acko-color_orange)',
      },
      red: {
        'light-1': 'var(--acko-color_red-light-1)',
        'light-2': 'var(--acko-color_red-light-2)',
        DEFAULT: 'var(--acko-color_red)',
      },
    },
    spacing: {
      0: 'var(--acko-spacing_0)',
      1: 'var(--acko-spacing_1)',
      2: 'var(--acko-spacing_2)',
      3: 'var(--acko-spacing_3)',
      4: 'var(--acko-spacing_4)',
      5: 'var(--acko-spacing_5)',
      6: 'var(--acko-spacing_6)',
      7: 'var(--acko-spacing_7)',
      8: 'var(--acko-spacing_8)',
      9: 'var(--acko-spacing_9)',
      10: 'var(--acko-spacing_10)',
    },
    fontFamily: {
      normal: ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
      condensed: [
        'Roboto Condensed',
        'system-ui',
        '-apple-system',
        'sans-serif',
      ],
      display: ['Roboto Condensed', 'system-ui', '-apple-system', 'sans-serif'],
      body: ['Roboto', 'system-ui', '-apple-system', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      cursor: ['disabled', 'hover'],
      opacity: ['disabled', 'hover', 'active'],
      backgroundColor: ['active'],
      textColor: ['visited'],
    },
  },
  plugins: [],
};
