import fsSync from 'fs';
import fs from 'fs/promises';
import path from 'path';

import {META_DATA_PATH, SVGS_DIR, TEMPLATES_DIR, colorMaps} from './constants.mjs';
import {svgoTransformer} from './transform-colors.mjs';
import {cleanDir} from './utils.mjs';

const transforms = colorMaps.map(({token, lightRegexp}) => ({
    newValue: `var(${token})`,
    regexpOrStringToChange: lightRegexp,
}));

async function writeToFile(filePath, fileName, data) {
    if (!fsSync.existsSync(filePath)) {
        await fs.mkdir(filePath, {recursive: true});
    }
    await fs.writeFile(path.join(filePath, fileName), data);
}

async function run() {
    await cleanDir(TEMPLATES_DIR);

    const metadata = JSON.parse(await fs.readFile(META_DATA_PATH, 'utf8'));

    metadata.illustrations.forEach(async ({svgName}) => {
        const ill = await fs.readFile(path.resolve(SVGS_DIR, `${svgName}-light.svg`), 'utf8');
        const svg = svgoTransformer(ill, transforms);

        await writeToFile(path.join(TEMPLATES_DIR), `${svgName}.svg`, svg);
    });
}

run().catch((error) => {
    console.error(error);
    process.exit(1);
});
