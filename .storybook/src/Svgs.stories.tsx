import * as React from 'react';

import {Flex, Icon, spacing} from '@gravity-ui/uikit';
import {Meta, StoryFn} from '@storybook/react';

import {ImportsTooltip} from './ImportsTooltip/ImportsTooltip';
import {IllustrationMeta} from './types';

import metadata from '../../metadata.json';

const meta = {
    title: 'Svgs',
    id: 'svgs',
    args: {
        size: 300,
    },
} as Meta;

export default meta;

interface Item {
    meta: IllustrationMeta;
    Component: any;
}

const items = (metadata.illustrations as IllustrationMeta[]).map((meta) => {
    const ComponentLight = require(`../../svgs/${meta.svgName}-light.svg`).default;
    const ComponentDark = require(`../../svgs/${meta.svgName}-dark.svg`).default;

    return {
        meta,
        ComponentLight,
        ComponentDark,
    };
});

const svgsRenderer =
    (renderItems: Item[]): StoryFn =>
    ({size}) => {
        return (
            <div className={spacing({p: 4})}>
                <Flex gap={8} wrap>
                    {renderItems.map(({meta: itemMeta, Component}) => {
                        return (
                            <ImportsTooltip key={itemMeta.svgName} meta={itemMeta}>
                                <Icon data={Component} size={size} />
                            </ImportsTooltip>
                        );
                    })}
                </Flex>
            </div>
        );
    };

export const Light = svgsRenderer(
    items.map(({meta, ComponentLight}) => ({meta, Component: ComponentLight})),
);
export const Dark = svgsRenderer(
    items.map(({meta, ComponentDark}) => ({meta, Component: ComponentDark})),
);
