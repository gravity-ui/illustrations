import type {StorybookConfig} from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['./src/**/*.stories.@(ts|tsx)'],
    addons: [
        {name: '@storybook/preset-scss', options: {rule: {sideEffects: true}}},
        {name: '@storybook/addon-essentials', options: {backgrounds: false}},
        '@storybook/addon-webpack5-compiler-babel',
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },

    docs: {
        autodocs: true,
    },
    core: {
        disableTelemetry: true,
    },

    webpackFinal: async (webpackConfig) => {
        webpackConfig.module?.rules?.forEach((rule) => {
            if (!rule || typeof rule !== 'object') {
                return rule;
            }
            const test = rule.test;

            if (!test || typeof test !== 'object' || !('test' in test)) {
                return rule;
            }

            if (test.test('.svg')) {
                rule.exclude = /\.svg$/;
            }
        });

        webpackConfig.module?.rules?.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                    },
                },
            ],
        });

        return webpackConfig;
    },
};

module.exports = config;
