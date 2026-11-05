import * as React from 'react';

import {Box, Flex, Icon} from '@gravity-ui/uikit';
import {Meta, StoryFn} from '@storybook/react';

import {ImportsTooltip} from './ImportsTooltip/ImportsTooltip';
import {IllustrationMeta} from './types';

import metadata from '../../metadata.json';

const storyMeta = {
    title: 'Svgs',
    id: 'svgs',
    args: {
        size: 300,
    },
} as Meta;

export default storyMeta;

interface Item {
    meta: IllustrationMeta;
    Component: any;
}

const items = (metadata.illustrations as IllustrationMeta[]).map((meta) => {
    const ComponentLight = require(`../../svgs/${meta.svgName}-light.svg`).default;
    const ComponentDark = require(`../../svgs/${meta.svgName}-dark.svg`).default;
    const ComponentLightHC = require(`../../svgs/${meta.svgName}-light-hc.svg`).default;
    const ComponentDarkHC = require(`../../svgs/${meta.svgName}-dark-hc.svg`).default;

    return {
        meta,
        ComponentLight,
        ComponentDark,
        ComponentLightHC,
        ComponentDarkHC,
    };
});

const svgsRenderer =
    (renderItems: Item[]): StoryFn =>
    ({size}) => {
        return (
            <Box padding="spacing-4">
                <Flex gap="spacing-8" wrap>
                    {renderItems.map(({meta: itemMeta, Component}) => {
                        return (
                            <ImportsTooltip key={itemMeta.svgName} meta={itemMeta}>
                                <Icon data={Component} size={size} />
                            </ImportsTooltip>
                        );
                    })}
                </Flex>
            </Box>
        );
    };

export const Light = svgsRenderer(
    items.map(({meta, ComponentLight}) => ({meta, Component: ComponentLight})),
);
export const Dark = svgsRenderer(
    items.map(({meta, ComponentDark}) => ({meta, Component: ComponentDark})),
);

export const LightHC = svgsRenderer(
    items.map(({meta, ComponentLightHC}) => ({meta, Component: ComponentLightHC})),
);
export const DarkHC = svgsRenderer(
    items.map(({meta, ComponentDarkHC}) => ({meta, Component: ComponentDarkHC})),
);
