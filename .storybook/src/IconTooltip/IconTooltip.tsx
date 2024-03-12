import React from 'react';
import {cn} from '../cn';
import {Button, Card, Label, Popover, PopoverInstanceProps, spacing} from '@gravity-ui/uikit';

import './IconTooltip.scss';

export interface IconTooltipProps {
    componentName: string;
    importSvgLight: string;
    importSvgDark: string;
    importComponent: string;
    children: React.ReactElement;
}

const b = cn('icon-tooltip');

export function IconTooltip({
    componentName,
    importSvgLight,
    importSvgDark,
    importComponent,
    children,
}: IconTooltipProps) {
    const popoverRef = React.useRef<PopoverInstanceProps>(null);
    const content = React.useMemo(
        () => (
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
        ),
        [],
    );

    return (
        <Card className={spacing({p: 2})}>
            <div>
                <Popover
                    ref={popoverRef}
                    content={content}
                    placement={['bottom', 'top']}
                    tooltipClassName={b()}
                    openOnHover={false}
                    disablePortal
                >
                    <Button view="flat-info">{componentName}</Button>
                </Popover>
            </div>
            {children}
        </Card>
    );
}
