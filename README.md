# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## Install

```shell
npm install --save-dev @gravity-ui/illustrations
```

## Usage

### React

#### Preparation

Define following css-tokens in your app:

```scss
--gil-color-object-base: rgb(255, 190, 92);
--gil-color-object-accent-heavy: rgb(211, 101, 7);
--gil-color-object-hightlight: rgb(255, 216, 157);
--gil-color-shadow-over-object: rgb(211, 158, 80);
--gil-color-background-lines: rgb(140, 140, 140);
--gil-color-background-shapes: rgb(242, 242, 242);
--gil-color-object-accent-light: rgb(255, 255, 255);
--gil-color-object-danger: rgb(255, 0, 61);
```

or use mixins in scss:

```scss
@import '@gravity-ui/illustrations/styles/theme.scss';

.g-root {
  &_theme_light {
    @include g-illustrations-colors-light;
  }

  &_theme_dark {
    @include g-illustrations-colors-dark;
  }
}
```

Alternatively, if you are already have `@gravity-ui/uikit` package installed in your project, you can just import `gravityTheme.scss` to the root file with styles imports in your project:

```scss
// existing gravity styles definition
import '@gravity-ui/uikit/styles/styles.css';
// just add one more import below
import '@gravity-ui/illustrations/styles/gravityTheme.scss';
```

#### Usage

```js
import NotFound from '@gravity-ui/illustrations/NotFound';
```

or

```js
import {NotFound} from '@gravity-ui/illustrations';
```

### SVG

> You might need an appropriate loader for this

```js
import notFound from '@gravity-ui/illustrations/svgs/not-found-light.svg';
```
