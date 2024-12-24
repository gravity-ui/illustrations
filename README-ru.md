# @gravity-ui/illustrations &middot; [![npm package](https://img.shields.io/npm/v/@gravity-ui/illustrations)](https://www.npmjs.com/package/@gravity-ui/illustrations) [![CI](https://img.shields.io/github/actions/workflow/status/gravity-ui/illustrations/.github/workflows/ci.yml?label=CI&logo=github)](https://github.com/gravity-ui/illustrations/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.gravity-ui.com/illustrations/)

## Установка

```shell
npm install --save-dev @gravity-ui/illustrations
```

## Использование

### React

#### Подготовка

Укажите значение для CSS-токена `--gil-color-underlay` в приложении:

```scss
--gil-color-underlay: rgba(240, 243, 245, 1);
```

В качестве альтернативы можно использовать SCSS-миксины:

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

#### Использование

```js
import NotFound from '@gravity-ui/illustrations/NotFound';
```

или

```js
import {NotFound} from '@gravity-ui/illustrations';
```

### SVG

> Для работы с SVG-форматом может потребоваться соответствующий загрузчик.

```js
import notFound from '@gravity-ui/illustrations/svgs/not-found-light.svg';
```
