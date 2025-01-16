import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const SVGS_DIR = path.resolve(__dirname, '..', 'svgs');
export const TEMPLATES_DIR = path.resolve(__dirname, '..', 'templates');
export const ICONS_DIR = path.resolve(__dirname, '..', 'src', 'components');
export const META_DATA_PATH = path.resolve(__dirname, '..', 'metadata.json');

export const ILLUSTRATION_NAME_REGEXP = /^([a-z0-9]|[a-z0-9](-?[a-z0-9])*-?[a-z0-9])$/;

export const colorMaps = [
    {token: '--gil-color-object-base', lightRegexp: /#FFBE5C/gi},
    {token: '--gil-color-object-accent-heavy', lightRegexp: /#D36507/gi},
    {token: '--gil-color-object-hightlight', lightRegexp: /#FFD89D/gi},
    {token: '--gil-color-shadow-over-object', lightRegexp: /#D39E50/gi},
    {token: '--gil-color-background-lines', lightRegexp: /#8C8C8C/gi},
    {token: '--gil-color-background-shapes', lightRegexp: /#F2F2F2/gi},
    {token: '--gil-color-object-accent-light', lightRegexp: /#FFF(FFF)?/gi},
    {token: '--gil-color-object-danger', lightRegexp: /#FF003D/gi},
];

export const themes = ['light', 'dark', 'light-hc', 'dark-hc'];
