// eslint-disable-next-line import/order
import '@gravity-ui/uikit/styles/fonts.css';
// eslint-disable-next-line import/order
import '@gravity-ui/uikit/styles/styles.css';

import * as React from 'react';

import {Flex, Provider} from '@gravity-ui/uikit';
import type {Decorator, Preview} from '@storybook/react';

import './theme.scss';

const withThemeProvider: Decorator = (Story, context) => {
    const {colorTheme} = context.globals;
    const theme = colorTheme || 'light';

    return (
        <Flex>
            <Provider theme={theme} scoped>
                <Story {...context} theme={theme} />
            </Provider>
        </Flex>
    );
};

const preview: Preview = {
    decorators: [withThemeProvider],
    parameters: {
        options: {
            storySort: {
                method: 'alphabetical',
            },
        },
    },
    globalTypes: {
        colorTheme: {
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'mirror',
                items: [
                    {value: 'light', right: '☼', title: 'Light'},
                    {value: 'dark', right: '☾', title: 'Dark'},
                    {value: 'light-hc', right: '☼', title: 'Light HC'},
                    {value: 'dark-hc', right: '☾', title: 'Dark HC'},
                ],
            },
        },
    },
};

export default preview;
