import * as React from 'react';

import {Button, Card, Label, Popover, spacing} from '@gravity-ui/uikit';

import {cn} from '../cn';
import {IllustrationMeta} from '../types';

import './ImportsTooltip.scss';

export interface ImportsTooltipProps {
    meta: IllustrationMeta;
    children: React.ReactElement;
}

const b = cn('imports-tooltip');

export function ImportsTooltip({meta: {svgName, componentName}, children}: ImportsTooltipProps) {
    const content = React.useMemo(() => {
        const importSvgLight = buildIconSvgPath(svgName, componentName, 'light');
        const importSvgDark = buildIconSvgPath(svgName, componentName, 'dark');
        const importComponent = buildIconImportLine(componentName);
        return (
            <div className={b('grid')}>
                <div className={b('label')}>Name</div>
                <div className={b('value')}>
                    <Label type="copy" copyText={componentName}>
                        {componentName}
                    </Label>
                </div>
                <div className={b('label')}>Svg (light theme)</div>
                <div className={b('value')}>
                    <Label type="copy" copyText={importSvgLight}>
                        {importSvgLight}
                    </Label>
                </div>
                <div className={b('label')}>Svg (dark theme)</div>
                <div className={b('value')}>
                    <Label type="copy" copyText={importSvgDark}>
                        {importSvgDark}
                    </Label>
                </div>
                <div className={b('label')}>Component</div>
                <div className={b('value')}>
                    <Label type="copy" copyText={importComponent}>
                        {importComponent}
                    </Label>
                </div>
            </div>
        );
    }, []);

    return (
        <Card className={spacing({p: 2})}>
            <div>
                <Popover
                    content={content}
                    placement={['bottom', 'top']}
                    trigger="click"
                    hasArrow
                    className={b()}
                >
                    <Button view="flat-info">{componentName}</Button>
                </Popover>
            </div>
            {children}
        </Card>
    );
}

function buildIconSvgPath(svgName: string, componentName: string, theme: 'light' | 'dark') {
    return `import ${componentName}Icon from '@gravity-ui/illustrations/svgs/${theme}/${svgName}.svg';`;
}
function buildIconImportLine(componentName: string) {
    return `import {${componentName}} from '@gravity-ui/illustrations';`;
}
