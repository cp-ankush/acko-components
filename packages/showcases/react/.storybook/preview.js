
import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@acko-components/showcase-core/addons/backgrounds.json';
import viewports from '@acko-components/showcase-core/addons/viewports.json';
import '@acko-components/icons/dist/ackox/font/ackox.css';

export const decorators = [withDesign];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds,
  viewport: {
    viewports,
  },
};
