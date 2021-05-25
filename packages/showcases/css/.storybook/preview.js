import '@acko-components/css';
import '@acko-components/icons/dist/vitamix/font/vitamix.css';
import { withDesign } from 'storybook-addon-designs';
import backgrounds from '@acko-components/showcase-core/addons/backgrounds.json';
import viewports from '@acko-components/showcase-core/addons/viewports.json';

const cssReq = require.context(
  '!!raw-loader!@acko-components/css-design-tokens/src',
  true,
  /.\.css$/,
);
const cssTokenFiles = cssReq
  .keys()
  .map((filename) => ({ filename, content: cssReq(filename).default }));

export const decorators = [withDesign];

export const parameters = {
  viewport: {
    viewports,
  },
  backgrounds,
  designToken: {
    files: {
      css: cssTokenFiles,
    },
    options: {
      hideMatchingHardCodedValues: false,
    },
  },
};
