import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import ackoReactLogo from '@acko-components/showcase-core/images/acko-react-logo.png';

addons.setConfig({
  panelPosition: 'right',
  theme: {
    ...themes.normal,
    brandTitle: '@acko-components/atomic-components',
    brandUrl: 'https://github.com/Decathlon/vitamin-web',
    brandImage: ackoReactLogo,

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
