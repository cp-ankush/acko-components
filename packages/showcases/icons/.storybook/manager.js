import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import ackoIconsLogo from '@acko-components/showcase-core/images/acko-icons-logo.png';

addons.setConfig({
  panelPosition: 'right',
  theme: {
    ...themes.normal,
    brandTitle: '@acko-components/icons',
    brandUrl: '',
    brandImage: ackoIconsLogo,

    colorPrimary: '#007dbc',
    colorSecondary: '#4e5d6b',

    // UI
    appBg: 'white',
    appContentBg: '#eff1f3',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Roboto", Arial, Helvetica, sans-serif',
    fontCode: 'monospace',
  },
});
