# `@acko-components/atomic-components`

> Decathlon Design System - Vitamin React components library

<a href="https://decathlon.github.io/vitamin-web/@acko-components/showcase-atomic-components"><img src="https://img.shields.io/badge/storybook-react-61DAFB?style=flat&logo=storybook" alt="storybook" /></a></a>
<a href="https://www.npmjs.com/package/@acko-components/atomic-components"><img src="https://img.shields.io/npm/v/@acko-components/atomic-components?style=flat&logo=npm" alt="npm version" /></a>
<a href="https://sonarcloud.io/dashboard?id=decathlon_vitamin-web_react"><img src="https://sonarcloud.io/api/project_badges/measure?project=decathlon_vitamin-web_react&metric=alert_status" alt="Quality Gate Status" /></a>

## Install package

After installing [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/en/docs/install), you can install `@acko-components/atomic-components` with this command:

```sh
# with npm
npm i -S @acko-components/atomic-components

# with yarn
yarn add @acko-components/atomic-components
```

## Install fonts

[Roboto](https://fonts.google.com/specimen/Roboto) & [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed) fonts as described in [Typography](https://www.decathlon.design/726f8c765/v/0/p/860e14-typography) section will not be automatically loaded. Fortunately, there is a few easy ways to get started.

Shown below is a sample link markup used to load from a CDN:

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap"
/>
```

You can also do it via CSS Import:

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Condensed:ital,wght@0,400;0,700;1,700&display=swap');
```

Otherwise, you can install them with `typeface`:

```sh
# with npm
npm i -S typeface-roboto typeface-roboto-condensed

# with yarn
yarn add typeface-roboto typeface-roboto-condensed
```

Then, you can import them in your entry-point:

```javascript
import 'typeface-roboto';
import 'typeface-roboto-condensed';
```

## Install icons (optional)

If you need to use React components with icons displayed (via `VtmnIcon` component or props for icons in some components), you will need to install `@acko-components/icons` package.

```sh
# with npm
npm i -S @acko-components/icons

# with yarn
yarn add @acko-components/icons
```

Then, import the icon font in the entry point of your React application:

```javascript
import '@acko-components/icons/dist/vitamix/font/vitamix.css';
```

Or you can also import it with a CDN like `unpkg.com` with [this file](https://unpkg.com/@acko-components/icons/dist/vitamix/font/vitamix.css).

## Usage

### Using a React component

Once you have installed this package, you just have to import components you need in your React application!

Here is an example of the integration of `VtmnButton` component:

```javascript
import { VtmnButton } from '@acko-components/atomic-components';

const MyComponent = () => (
  <VtmnButton onClick={() => console.log('clicked')}>Click</VtmnButton>
);
```

### Overriding styles & behaviors

This library is made to give you a standard. However, it is quite possible to modify components by passing them new props & styles.

To do this, there are a [multitude of solutions](https://www.w3schools.com/react/react_css.asp).

## Development

To know all the use cases and their associated code, [check out the showcase here](https://decathlon.github.io/vitamin-web/@acko-components/showcase-atomic-components).

## Changelog

If you want to know the different changes between versions of this package, [look at the changelog here](https://github.com/Decathlon/vitamin-web/blob/main/packages/sources/react/CHANGELOG.md).

## I have an issue, what should I do?

Please file the issue [here](https://github.com/Decathlon/vitamin-web/issues/new).

## Contributing

See [the contributing docs](https://github.com/Decathlon/vitamin-web/blob/main/CONTRIBUTING.md).

## License

Apache-2.0 © [Decathlon](https://github.com/Decathlon)
