import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import {Flex, Icon as IconWrapper, spacing} from '@gravity-ui/uikit';
import {IconTooltip} from './IconTooltip/IconTooltip';
import {buildIconImportLine, buildIconSvgPath} from './utils';

import metadata from '../../metadata.json';

const meta = {
    title: 'Svgs',
    id: 'svgs',
    args: {
        size: 300,
    },
} as Meta;

export default meta;

interface ItemMeta {
    svgName: string;
    theme: 'light' | 'dark';
    componentName: string;
}

const libContext = require.context('../../svgs', false, /\.svg$/);
const iconsMetadataByName = (metadata.icons as ItemMeta[]).reduce(
    (acc, icon) => ({...acc, [icon.svgName]: icon}),
    {} as Record<string, ItemMeta>,
);

interface Item {
    meta: ItemMeta;
    Icon: any;
}

const items = libContext
    .keys()
    .map((path) => {
        const module = libContext(path) as any;
        const name = path.match(/((\w|-)+-(light|dark))\.svg$/)?.[1] ?? '';
        const meta = iconsMetadataByName[name];
        const Icon = module.default || module;

        return {
            meta,
            Icon,
        };
    })
    .reduce(
        (acc, item) => {
            acc[item.meta.theme].push(item);
            return acc;
        },
        {light: Array<Item>(), dark: Array<Item>()},
    );

const svgsRenderer =
    (renderItems: Item[]): StoryFn =>
    ({size}) => {
        return (
            <div className={spacing({p: 4})}>
                <Flex gap={8} wrap>
                    {renderItems.map(({meta: itemMeta, Icon}) => {
                        return (
                            <IconTooltip
                                key={itemMeta.svgName}
                                componentName={itemMeta.componentName}
                                importSvgLight={buildIconSvgPath(
                                    itemMeta.svgName,
                                    itemMeta.componentName,
                                    'light',
                                )}
                                importSvgDark={buildIconSvgPath(
                                    itemMeta.svgName,
                                    itemMeta.componentName,
                                    'dark',
                                )}
                                importComponent={buildIconImportLine(itemMeta.componentName)}
                            >
                                {<IconWrapper data={Icon} size={size} />}
                            </IconTooltip>
                        );
                    })}
                </Flex>
            </div>
        );
    };

export const Light = svgsRenderer(items.light);
export const Dark = svgsRenderer(items.dark);
