# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## Install

```shell
npm install --save-dev @gravity-ui/illustrations
```

## Usage

### React

#### Preparation

Define `--gil-color-secondary-theme` css-token in your app:

```scss
--gil-color-secondary-theme: rgba(240, 243, 245, 1);
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
