export function buildIconSvgPath(svgName: string, componentName: string, theme: 'light' | 'dark') {
    return `import ${componentName}Icon from '@gravity-ui/illustrations/svgs/${theme}/${svgName}.svg';`;
}
export function buildIconImportLine(componentName: string) {
    return `import {${componentName}} from '@gravity-ui/illustrations';`;
}
