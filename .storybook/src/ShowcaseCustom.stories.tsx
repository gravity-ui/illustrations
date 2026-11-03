import React from 'react';

import {Box, Flex, Icon} from '@gravity-ui/uikit';
import {Meta, StoryFn} from '@storybook/react';

import {ImportsTooltip} from './ImportsTooltip/ImportsTooltip';
import {IllustrationMeta} from './types';

import metadata from '../../metadata.json';

import './customTheme.scss';

const meta = {
    title: 'Components',
    id: 'components',
    args: {
        size: 300,
    },
} as Meta;

export default meta;

const items = (metadata.illustrations as IllustrationMeta[]).map((meta) => {
    const Component = require(`../../src/components/${meta.componentName}.tsx`).default;

    return {
        meta,
        Component,
    };
});

export const CustomThemeComponents: StoryFn = ({size}) => {
    return (
        <Box className="custom" padding="spacing-4">
            <Flex gap="spacing-8" wrap>
                {items.map(({meta, Component}) => {
                    return (
                        <ImportsTooltip key={meta.svgName} meta={meta}>
                            <Icon data={Component} size={size} />
                        </ImportsTooltip>
                    );
                })}
            </Flex>
        </Box>
    );
};
