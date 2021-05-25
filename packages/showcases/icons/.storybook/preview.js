import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@acko-components/showcase-core/addons/backgrounds.json';
import viewports from '@acko-components/showcase-core/addons/viewports.json';
import '@acko-components/icons/dist/vitamix/font/vitamix.css';

export const decorators = [withDesign];

export const parameters = {
  viewport: {
    viewports,
  },
  backgrounds
};
