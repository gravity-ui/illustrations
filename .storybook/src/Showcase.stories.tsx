import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import {Flex, Icon as IconWrapper, spacing} from '@gravity-ui/uikit';
import {IconTooltip} from './IconTooltip/IconTooltip';
import metadata from '../../metadata.json';
import {buildIconImportLine, buildIconSvgPath} from './utils';

const meta = {
    title: 'Components',
    id: 'components',
    args: {
        size: 300,
    },
} as Meta;

export default meta;

interface IconMeta {
    svgName: string;
    componentName: string;
}

const libContext = require.context('../../src/components', false, /\.tsx$/);

const iconsMetadataByName = (metadata.icons as IconMeta[]).reduce(
    (acc, icon) => ({...acc, [icon.componentName]: icon}),
    {} as Record<string, IconMeta>,
);
const items = libContext.keys().map((path) => {
    const module = libContext(path) as any;
    const Icon = module.default || module;
    const name = path.match(/(\w+)\.tsx$/)?.[1] ?? '';
    const meta = iconsMetadataByName[name];

    return {
        meta,
        Icon,
    };
});

export const Components: StoryFn = ({size}) => {
    return (
        <div className={spacing({p: 4})}>
            <Flex gap={8} wrap>
                {items.map(({meta, Icon}) => {
                    return (
                        <IconTooltip
                            key={meta.svgName}
                            componentName={meta.componentName}
                            importSvgLight={buildIconSvgPath(
                                meta.svgName,
                                meta.componentName,
                                'light',
                            )}
                            importSvgDark={buildIconSvgPath(
                                meta.svgName,
                                meta.componentName,
                                'dark',
                            )}
                            importComponent={buildIconImportLine(meta.componentName)}
                        >
                            {<IconWrapper data={Icon} size={size} />}
                        </IconTooltip>
                    );
                })}
            </Flex>
        </div>
    );
};
